import { QuarkElement, property, customElement } from "quarkc";
import { memoize } from "./utils";
import style from "./index.less?inline";
import defaultIconURL from "./images/star-mask.png";

const cssValueRE = /^((?:\d+)?(?:\.\d*)?)([a-zA-Z%]+)?$/;

declare global {
  interface HTMLElementTagNameMap {
    "quark-ui-rate": QuarkUiRate;
  }
}

@customElement({ tag: "quark-ui-rate", style })
class QuarkUiRate extends QuarkElement {
  /** current rating value */
  @property({ type: Number })
  value = 0;
  /** size of icon —— unit default to px */
  @property({ type: String })
  size: string = "20";
  /** space between icons —— unit default to px */
  @property({ type: String })
  space: string = "4";
  /** icon count —— top rating value */
  @property({ type: Number })
  count = 5;
  /** active color */
  @property({ type: String })
  activeColor = "linear-gradient(to right, #FB990F, #FF5526)";
  /** default color */
  @property({ type: String })
  color = "#F0F3F5";
  /** icon's url */
  @property({ type: String })
  icon = defaultIconURL;
  /** is half rate allowed */
  @property({ type: Boolean })
  allowHalf = false;
  /** is readonly */
  @property({ type: Boolean })
  readonly = false;
  /** is disabled */
  @property({ type: Boolean })
  disabled = false;

  private get roundedValue() {
    return Math.min(this.count, Math.max(0, this.value));
  }

  /** parse css values —— eg. 1px、1rem */
  private _parseValue(cssValue: string, defaultUnit = "px"): [number, string] {
    const match = cssValue.match(cssValueRE);

    if (!match) {
      return [0, defaultUnit];
    }

    const [_, value, unit] = match;
    return [parseFloat(value), unit || defaultUnit];
  }

  private parseValue = memoize(
    this._parseValue
    // (...args) => JSON.stringify(args),
  );

  private formatParsedValue([value, unit]: [number, string]) {
    return `${value}${unit}`;
  }

  private get parsedSize() {
    return this.parseValue(this.size);
  }

  private get parsedSizeValue() {
    return this.parsedSize[0];
  }

  private get parsedSizeUnit() {
    return this.parsedSize[1];
  }

  private get formattedSize() {
    return this.formatParsedValue(this.parsedSize);
  }

  /** progress，decimal between 0-1 */
  private get progress() {
    return this.roundedValue / this.count;
  }

  /** background width of progress track —— original width */
  private get progressBgWidth() {
    return this.parsedSizeValue * this.count;
  }

  /** track's real with */
  private get progressWidth() {
    return this.progressBgWidth * this.progress;
  }

  private _getClassNames(classNameMap: Record<string, boolean>) {
    return Object.entries(classNameMap)
      .filter(([_, value]) => value)
      .map(([className]) => className)
      .join(" ");
  }

  private getClassNames = memoize(this._getClassNames);

  componentDidUpdate(propName: string, oldValue: string, newValue: string) {
    if (propName === "value") {
      this.$emit("change", {
        detail: newValue,
      });
    }
  }

  componentWillUnmount() {
    this.parseValue.cache.clear();
  }

  private async handleClick(e: PointerEvent, index: number) {
    if (!(e.target instanceof HTMLElement) || this.readonly || this.disabled) {
      return;
    }

    const {
      target: { offsetWidth },
      offsetX,
    } = e;
    const targetValue = this.allowHalf
      ? Math.ceil((offsetX / offsetWidth) * 2) * 0.5
      : 1;
    this.$emit("input", { detail: index + targetValue });
  }

  render() {
    return (
      <div
        class={`star-list ${this.getClassNames({
          "star-list--readonly": this.readonly,
          "star-list--disabled": this.disabled,
        })}`}
      >
        {Array.from(new Array(this.count), (_, index) => (
          <div
            key={index}
            class="star"
            style={{
              width: this.formattedSize,
              height: this.formattedSize,
              marginLeft:
                index === 0
                  ? "0px"
                  : this.formatParsedValue(this.parseValue(this.space)),
              background: this.disabled ? "#F0F3F5" : this.color,
              "mask-image": `url(${this.icon})`,
              "-webkit-mask-image": `url(${this.icon})`,
            }}
            onClick={(e: PointerEvent) => this.handleClick(e, index)}
          >
            <div
              class="star__progress"
              style={{
                width: this.formatParsedValue([
                  this.progressWidth,
                  this.parsedSizeUnit,
                ]),
                left: this.formatParsedValue([
                  index * this.parsedSizeValue * -1,
                  this.parsedSizeUnit,
                ]),
                background: `${this.disabled ? "#c8c9cc" : this.activeColor
                  } left top / ${this.formatParsedValue([
                    this.progressBgWidth,
                    this.parsedSizeUnit,
                  ])} 100%`,
              }}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default QuarkUiRate;
