import { isPowerOfThree } from '../src/0326-isPowerOfThree';

test('isPowerOfThree', () => {
  expect(isPowerOfThree(27)).toEqual(true);
  expect(isPowerOfThree(0)).toEqual(false);
  expect(isPowerOfThree(45)).toEqual(false);
});
