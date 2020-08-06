![Build and Deploy to GitHub Pages](https://github.com/Diamondlord/wasm-game-of-life/workflows/Build%20and%20Deploy%20to%20GitHub%20Pages/badge.svg?event=page_build)
## 🚴 Usage
Started from tutorial -  <a href="https://rustwasm.github.io/docs/book/game-of-life/setup.html">Tutorial</a>
### 🛠️ Build with `wasm-pack build`

```
wasm-pack build
```

### 🔬 Test in Headless Browsers with `wasm-pack test`

```
wasm-pack test --headless --firefox
```

## 🔋 Batteries Included

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* [`wee_alloc`](https://github.com/rustwasm/wee_alloc), an allocator optimized
  for small code size.
