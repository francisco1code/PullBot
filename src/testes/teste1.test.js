import getFactorial from './teste1'

test('getFactorial should be a function', () => {
    expect(getFactorial).toBeInstanceOf(Function)
})

test('getFactorial return 6', () => {
    const atual = getFactorial(3)
    const expected = 6
    expect(atual).toBe(expected)
})