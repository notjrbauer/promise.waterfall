# promise-waterfall
Runs an array of promises in series, each passing their results to the next promise in the array.

[![NPM][promise-waterfall-icon]][promise-waterfall-url]

## Install
`npm install promise.waterfall --save`

## `promiseWaterfall([arrayOfPromises])` -> `new Promise`

Runs the array of promises in series, each passing their results to the next function in the array.

Returns a promise

### Arguments
- `arrayOfPromises` - an array of promises

### Usage

```javascript
var promiseWaterfall = require('promise.waterfall')

promiseWaterfall([
  addOne  // 1
  addOne, // 2
  addOne  // 3
]).then(function (result) {
  console.log(result) // 3
})
.catch(console.error)
```
[promise-waterfall-icon]: https://nodei.co/npm/promise.waterfall.png?downloads=true
[promise-waterfall-url]: https://npmjs.org/package/promise.waterfall
