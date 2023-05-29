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
```
Then use it as a normal web component:
```html
<quark-ui-rate
  size="1.5rem"
  value="3.7"
  space="0.5rem"
  color="#ddd"
  activeColor="linear-gradient(to right, #a8f, #8af)"
></quark-ui-rate>
```
which shows a 3.7 stars rating out of 5 (top rating stars' count can be customized by the component property [count](#attributes), which is default to `5`).

# API

## Attributes

| Attribute   | Description                                      | Type             | Default |
| ----------- | ------------------------------------------------ | ---------------- | ------- |
| value       | current rating                                   | number           | 0       |
| count       | icon count                                       | number           | 5       |
| size        | icon size, if unit part omitted, default to 'px' | number \| string | 20px    |
| space       | space between icons                              | number \| string | 4px     |
| icon        | icon's url                                       | string           |         |
| color       | default color of icon                            | string           | #F0F3F5 |
| activeColor | active color of icon                             | string           |         |

