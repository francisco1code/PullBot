const getFactorial = require('./factorial');

test('getFactorial should be a function', () => {
    expect(getFactorial).toBeInstanceOf(Function)
})

test('getFactorial return 3', () => {
    expect(getFactorial()).toBe(3)
})