import { isPowerOfThree } from '../finished2/326-isPowerOfThree.js';

test('isPowerOfThree', () => {
  expect(isPowerOfThree(27)).toEqual(true);
  expect(isPowerOfThree(0)).toEqual(false);
  expect(isPowerOfThree(45)).toEqual(false);
});