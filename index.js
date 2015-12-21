'use strict'

var curry = require('ap').curry
var assert = require('assert')

module.exports = promiseWaterfall

var waterfall = function waterfall (promise, callback) {
  return promise.then(callback)
}

var reduce = curry(function reduce (fn, value) {
  return value.reduce(fn, Promise.resolve())
})

var reduceWaterfall = reduce(waterfall)

function promiseWaterfall (callbacks) {
  assert(callbacks, 'missing argument promiseWaterfall.callbacks')

  if (!Array.isArray(callbacks)) return promiseWaterfall([callbacks])
  return reduceWaterfall(callbacks)
}
