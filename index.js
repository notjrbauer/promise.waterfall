'use strict'

var assert = require('assert-ok')
var array = require('cast-array')

module.exports = function promiseWaterfall (callbacks) {
  assert(callbacks, 'promiseWaterfall requires an array of callbacks')

  return array(callbacks).reduce(function (accumulator, promise) {
    return accumulator.then(promise)
  }, Promise.resolve())
}
