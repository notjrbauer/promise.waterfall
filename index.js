'use strict'

var Promise = require('bluebird')
var assertOk = require('assert-ok')

module.exports = promiseWaterfall

function promiseWaterfall (callbacks) {
  assertOk(callbacks, 'missing argument promiseWaterfall.callbacks')
  if (!Array.isArray(callbacks)) return promiseWaterfall([callbacks])

  return callbacks.reduce(waterfall, Promise.resolve())
}

function waterfall (promise, callback) {
  return promise.then(callback)
}
