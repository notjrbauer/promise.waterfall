'use strict'

module.exports = promiseWaterfall

function promiseWaterfall (callbacks) {
  return callbacks.slice(1).reduce(function (accumulator, promise) {
    return accumulator.then(promise)
  }, callbacks[0]())
}
