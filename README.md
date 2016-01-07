# promise-waterfall
Runs an array of promises in series, each passing their results to the next promise in the array.

[![NPM][promise-waterfall-icon]][promise-waterfall-url]

## Install
`npm install promise.waterfall --save`

## `promiseWaterfall(callbacks)` -> `Promise`

### `callbacks: Array<Function>`

Runs the array of callbacks in series. If a callback returns a promise, each callback passes its results to the next function in the array.

Returns a promise that is resolved with the return value of the final item in the array.

### Usage

```javascript
var waterfall = require('promise.waterfall')

waterfall([addOne, addOne, addOne]).then(function (result) {
  console.log(result) // 3
})

function addOne (number) {
  return (number || 0) + 1
}
```
[promise-waterfall-icon]: https://nodei.co/npm/promise.waterfall.png?downloads=true
[promise-waterfall-url]: https://npmjs.org/package/promise.waterfall
