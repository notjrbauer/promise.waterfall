'use strict'

module.exports = function promiseWaterfall (callbacks) {
  // Don't assume we're running in an environment with promises
  return callbacks.reduce(function (accumulator, callback) {
    return accumulator.then(callback)
  }, Promise.resolve())
}
