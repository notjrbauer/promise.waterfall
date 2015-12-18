'use strict'

var Promise = require('bluebird')
var assert = require('assert')

module.exports = promiseWaterfall

function promiseWaterfall (callbacks) {
  assert(callbacks, 'missing argument promiseWaterfall.callbacks')
  if (!Array.isArray(callbacks)) return promiseWaterfall([callbacks])

  return callbacks.reduce(waterfall, Promise.resolve())
}

function waterfall (promise, callback) {
  return promise.then(callback)
}
