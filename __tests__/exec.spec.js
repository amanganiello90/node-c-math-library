var math = require('../index')
var result = null;

test('adds 5 + 2 to equal 7', () => {
  expect(math.add(5, 2)).toBe(7);
});

test('minus 5 - 2 to equal 3', () => {
  expect(math.minus(5, 2)).toBe(3);
});

test('multiply 5 * 2 to equal 10', () => {
  expect(math.multiply(5, 2)).toBe(10);
});
