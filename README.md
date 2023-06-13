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
Rate component is fully **controlled**, it only reacts to passed-down attribute changes.

First import it in your main JS entry:

```js
import "quark-ui-rate";
```

## Vue

First create an attribute（vue2）in your .vue SFC script:

```js
export default {
  data() {
    return {
      // create attribute to bind
      rateValue: 4.7,
    };
  },
  methods: {
    handleInput(event) {
      this.rateValue = event.detail;
    },
    handleChange(event) {
      console.log("value changed", event.detail);
    },
  },
};
```

or writable ref（vue3）:

```js
import { ref } from "vue";
const rateValue = ref(4.7);
const handleInput = (event) => {
  // set ref's value
  rateValue.value = event.detail;
};
const handleChange = (event) => {
  console.log("value changed", event.detail);
};
```

Then in your .vue SFC template, bind it to value attribute:

```html
<quark-ui-rate
  size="1.5rem"
  :value="rateValue"
  space="0.5rem"
  color="#ddd"
  active-color="linear-gradient(to right, #a8f, #8af)"
  @input="handleInput"
  @change="handleChange"
></quark-ui-rate>
```

### fix console warning

By default, Vue will try to resolve any non-native HTML tag as a registered Vue component before falling back to rendering it as custom element. This will cause Vue to emit a "failed to resolve component" warning during development. Your should tell Vue to ignore element with name "quark-ui-rate" or just ignore any element prefixed with "quark-". Please refer to Vue's [official document](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue) for resolution and detailed explanation.

## React

in your function component:

```js
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(4.7);
  const handleInput = (event) => {
    setValue(event.detail);
  };
  const handleChange = (event) => {
    console.log("value changed", event.detail);
  };
  return (
    <div>
      <quark-ui-rate
        size="1.5rem"
        value={value}
        space="0.5rem"
        color="#ddd"
        activeColor="linear-gradient(to right, #a8f, #8af)"
        onInput={handleInput}
        onChange={handleChange}
      ></quark-ui-rate>
    </div>
  );
}
```

## Vanilla JS

```js
document.addEventListener("DOMContentLoaded", () => {
  const rate = document.getElementById("rate");
  rate.addEventListener("input", (event) => {
    rate.setAttribute("value", event.detail);
  });
  rate.addEventListener("change", (event) => {
    console.log("value changed", event.detail);
  });
});
```

Then use it as a normal web component in your .html files:

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

Examples above show a 4.7 stars rating out of 5 (top rating stars' count can be customized by the component property [count](#attributes), which is default to `5`).

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
