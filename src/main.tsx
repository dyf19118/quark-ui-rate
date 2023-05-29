import { QuarkElement, property, customElement } from "quarkc";
import { memoize } from "lodash-es";
import style from "./main.css?inline";
import defaultIconURL from "./images/star-mask.png";

const cssValueRE = /^((?:\d+)?(?:\.\d*)?)([a-zA-Z%]+)?$/;

@customElement({ tag: "quark-ui-rate", style })
class QuarkUiRate extends QuarkElement {
  /** 当前分值 */
  @property({ type: Number })
  value = 0;
  /** 图标大小——默认单位px */
  @property({ type: String })
  size: string = "20";
  /** 图标间距——默认单位px */
  @property({ type: String })
  space: string = "4";
  /** 总分——星星数量 */
  @property({ type: Number })
  count = 5;
  /** 选中时颜色 */
  @property({ type: String })
  activeColor = "linear-gradient(to right, #FB990F, #FF5526)";
  /** 未选中时颜色 */
  @property({ type: String })
  color = "#F0F3F5";
  /** 图标地址 */
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

  get roundedValue() {
    return Math.min(this.count, Math.max(0, this.value));
  }

  /** 解析CSS值——如1px、1rem */
  _parseValue(cssValue: string, defaultUnit = "px"): [number, string] {
    const match = cssValue.match(cssValueRE);

    if (!match) {
      return [0, defaultUnit];
    }

    const [_, value, unit] = match;
    return [parseFloat(value), unit || defaultUnit];
  }

  parseValue = memoize(
    this._parseValue
    // (...args) => JSON.stringify(args),
  );

  formatParsedValue([value, unit]: [number, string]) {
    return `${value}${unit}`;
  }

  get parsedSize() {
    return this.parseValue(this.size);
  }

  get parsedSizeValue() {
    return this.parsedSize[0];
  }

  get parsedSizeUnit() {
    return this.parsedSize[1];
  }

  get formattedSize() {
    return this.formatParsedValue(this.parsedSize);
  }

  /** 进度，0-1之间的小数 */
  get progress() {
    return this.roundedValue / this.count;
  }

  /** 进度导轨的背景色宽度——也就是原始宽度 */
  get progressBgWidth() {
    return this.parsedSizeValue * this.count;
  }

  /** 进度导轨的真实宽度 */
  get progressWidth() {
    return this.progressBgWidth * this.progress;
  }

  _getClassNames(classNameMap: Record<string, boolean>) {
    return Object.entries(classNameMap)
      .filter(([_, value]) => value)
      .map(([className]) => className)
      .join(" ");
  }

  getClassNames = memoize(this._getClassNames);

  componentDidUpdate(propName: string, oldValue: string, newValue: string) {
    // 已更新
    if (propName === "value") {
      this.$emit("change", {
        detail: newValue,
      });
    }
  }

  componentWillUnmount() {
    this.parseValue.cache.clear();
  }

  async handleClick(e: PointerEvent, index: number) {
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
                background: `${
                  this.disabled ? "#c8c9cc" : this.activeColor
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
