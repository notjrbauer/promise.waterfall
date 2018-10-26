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

test('run array of promises sequentially with an initialization parameter', function (t) {
  t.plan(1)

  return promiseWaterfall([
    addOne,
    addTwo
  ], 10)
    .then(function (sum) {
      t.equals(sum, 13)
    })
})

test('run array consisting of zero promises', function (t) {
  t.plan(1)

  return promiseWaterfall([
  ])
  .then(function (result) {
    t.equals(result, undefined)
  })
})

test('run array consisting of only one promise', function (t) {
  t.plan(1)

  return promiseWaterfall([
    addOne
  ])
  .then(function (sum) {
    t.equals(sum, 1)
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
