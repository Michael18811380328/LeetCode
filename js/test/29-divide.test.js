import { divide } from '../finished/29-divide.js';

test('divide', () => {
  expect(divide(7, -3)).toEqual(-2);
  expect(divide(10, 3)).toEqual(3);
  // expect(divide(-2147483648, 2)).toEqual(-1073741824);
});
