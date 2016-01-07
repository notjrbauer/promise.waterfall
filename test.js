'use strict'

var test = require('blue-tape')
var partial = require('ap').partial
var promiseWaterfall = require('./')

var addOne = makeAdder(1)
var addTwo = makeAdder(2)

function makeAdder (a) {
  return function (b) {
    b = b || 0
    return Promise.resolve(a + b)
  }
}

function increment (b) {
  return ++b
}

function rejection () {
  return Promise.reject(new Error('andrew joslin'))
}

test('run array of promises sequentially', function (t) {
  t.plan(1)

  return promiseWaterfall([
    addOne,
    addTwo
  ])
  .then(function (sum) {
    t.equals(sum, 3)
  })
})

test('reject array', function (t) {
  t.plan(1)

  return promiseWaterfall([
    addOne,
    addTwo,
    rejection
  ])
  .catch(partial(t.pass, 'error caught'))
})

test('non-promise return', function (t) {
  t.plan(1)

  return promiseWaterfall([
    addOne,
    addTwo,
    increment
  ])
  .then(function (sum) {
    t.equals(sum, 4)
  })
})
