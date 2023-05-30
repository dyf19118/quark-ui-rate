# Introduction
Give rate to something.

It's a **cross-framework** component enpowered by [quarkc](https://quark.hellobike.com/#/en-US/docs/introduce).

# Installation

```
npm i quark-ui-rate
```

Use whatever package manager you like.

# Usage
Since it's cross-framework, you can use it in popular javascript frameworks like `Vue`, `React`, `Angular` and `jQuery`.

First import it in your JS entry:
```js
import 'quark-ui-rate'

// since rate component is fully controlled
// it only reacts to passed-down attribute changes
// for vanilla js
// register input callback to receive value changes
// and set value attribute to update the component's internal representation
document.addEventListener("DOMContentLoaded", () => {
  const rate = document.getElementById("rate");
  rate.addEventListener("input", (value) => {
    if (value.detail < 3) {
      console.log("at least 3 stars required");
      return;
    }
    rate.setAttribute("value", value.detail);
  });
  rate.addEventListener("change", (value) => {
    console.log("value changed", value.detail);
  });
});
```
Then use it as a normal web component:
```html
<quark-ui-rate
  id="rate"
  size="1.5rem"
  value="4.7"
  space="0.5rem"
  color="#ddd"
  activeColor="linear-gradient(to right, #a8f, #8af)"
></quark-ui-rate>
```
which shows a 4.7 stars rating out of 5 (top rating stars' count can be customized by the component property [count](#attributes), which is default to `5`).

![demo](https://m.hellobike.com/resource/helloyun/18121/VznpvxD0Zr.png?x-oss-process=image/quality,q_80)

# API

## Attributes

| Attribute   | Description                     | Type             | Default |
| ----------- | ------------------------------- | ---------------- | ------- |
| value       | current rating                  | number           | 0       |
| count       | icon count                      | number           | 5       |
| size        | icon size, unit default to 'px' | number \| string | 20px    |
| space       | space between icons             | number \| string | 4px     |
| icon        | icon's url                      | string           |         |
| color       | default color of icon           | string           | #F0F3F5 |
| activeColor | active color of icon            | string           |         |
| allowHalf   | is half select allowed          | boolean          | false   |
| readonly    | is readonly                     | boolean          | false   |
| disabled    | is disabled                     | boolean          | false   |

## Events
| Event  | Description                        | Parameters         |
| ------ | ---------------------------------- | ------------------ |
| input  | called when new rating value given | { detail: number } |
| change | called when rating value changed   | { detail: number } |
