# react-use-quicklink

[![Support me on Patreon](https://badgen.net/badge/become/a%20patron/F96854)](https://sdx.im/patreon)
![License MIT](https://badgen.net/github/license/sergiodxa/react-use-quicklink)

Quicklink hook for React. Run [quicklink](https://github.com/GoogleChromeLabs/quicklink) in your React application using a simple hook and prefetch all your links.

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Installation

Install using yarn

```bash
yarn add react-use-quicklink
```

Or using npm

```bash
npm install --save react-use-quicklink
```

## Usage

Import it as use it inside any React function component.

```js
import useQuicklink from "react-use-quicklink";

function App() {
  useQuicklink(); // this is all you need

  return <UI />; // render some UI here with anchor tags to prefetch
}
```

That's all, now it will run quicklink. Aditionally you can pass a custom configuration as an object to the `useQuicklink` hook.

```js
import useQuicklink from "react-use-quicklink";

function App() {
  useQuicklink({
    origins: [
      // add mine
      "my-website.com",
      "api.my-website.com",
      // add third-parties
      "other-website.com",
      "example.com"
      // ...
    ]
  });

  return <UI />;
}
```
