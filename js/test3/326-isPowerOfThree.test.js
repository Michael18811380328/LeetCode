import { isPowerOfThree } from '../finished3/326-isPowerOfThree';

test('isPowerOfThree', () => {
  expect(isPowerOfThree(27)).toEqual(true);
  expect(isPowerOfThree(0)).toEqual(false);
  expect(isPowerOfThree(45)).toEqual(false);
});
