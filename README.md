# promise-waterfall
> Runs an array of promises in series, each passing their results to the next promise in the array.

[![NPM][promise-waterfall-icon]][promise-waterfall-url]

## Install

```sh
$ npm install promise.waterfall --save
```

## Usage

```js
var promiseWaterfall = require('promise.waterfall')

function makeAdder (a) {
  return function (b) {
    b = b || 0
    return Promise.resolve(a + b)
  }
}

var addOne = makeAdder(1)

promiseWaterfall([
  addOne  // 1
  addOne, // 2
  addOne  // 3
])
.then(console.log)
.catch(console.error)
```

## API

#### `promiseWaterfall(functions)` -> `promise`

Runs the array of functions in series, waiting for each to resolve and passing each result to the next function in the array.

##### functions

*Required*
Type: `array[function]`


[promise-waterfall-icon]: https://nodei.co/npm/promise.waterfall.png?downloads=true
[promise-waterfall-url]: https://npmjs.org/package/promise.waterfall
