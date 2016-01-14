'use strict'

module.exports = function promiseWaterfall (callbacks) {
  // Don't assume we're running in an environment with promises
  var first = callbacks[0]()
  return callbacks.slice(1).reduce(function (accumulator, callback) {
    return accumulator.then(callback)
  }, first)
}
