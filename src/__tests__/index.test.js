import test from 'ava'
import is from 'is_js'

test('is an array of numbers', t => {
  t.true(
    [ 1, 2, 3 ].every(item => typeof item === 'number')
  )
})

test('1 is in the array', t => {
  t.true(
    is.inArray(1, [ 1, 2, 3 ])
  )
})
