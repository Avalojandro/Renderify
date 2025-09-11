# Renderify-js

Render React components easily and elegantly based on conditions ✨

[![npm
version](https://img.shields.io/npm/v/renderify-js.svg)](https://www.npmjs.com/package/renderify-js)

[![license](https://img.shields.io/npm/l/renderify-js.svg)](LICENSE)

------------------------------------------------------------------------

## 📦 Installation

``` bash
npm install renderify-js
```

------------------------------------------------------------------------

## 🚀 Usage

Renderify lets you dynamically render elements based on a condition in a
clean and easy-to-control way.\
Simply import `Renderify` into your file, provide a boolean condition,
and place the content you want to render inside its children.

``` tsx
import { Renderify } from "renderify-js";

export default function App() {
  const isTrue = true;

  return (
    <Renderify condition={isTrue}>
      <MyComponent />
    </Renderify>
  );
}
```

------------------------------------------------------------------------

## ⚡ Props

### `condition`

The boolean expression that controls whether children should render.

``` tsx
<Renderify condition={isTrue}>
  <MyComponent />
</Renderify>
```

### `elseShow`

Render an alternative element if the condition is false.

``` tsx
<Renderify condition={isTrue} elseShow={<AnotherComponent />}>
  <MyComponent />
</Renderify>
```

### `delay`

Postpone rendering by a number of milliseconds.

``` tsx
<Renderify condition={isTrue} delay={500}>
  <MyComponent />
</Renderify>
```

### `noDestroy`

Keep the non-rendered element in the DOM but hidden (avoids re-mount).

``` tsx
<Renderify condition={isTrue} elseShow={<AnotherComponent />} noDestroy>
  <MyComponent />
</Renderify>
```

### `onShow` / `onHide`

Callbacks triggered when the element is shown or hidden.

``` tsx
<Renderify
  condition={isTrue}
  onShow={() => console.log("shown")}
  onHide={() => console.log("hidden")}
>
  <MyComponent />
</Renderify>
```

------------------------------------------------------------------------

## 📜 License

MIT © 2025 --- Made with ❤️ by Avalojandro
