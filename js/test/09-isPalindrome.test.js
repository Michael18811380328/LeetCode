import { isPalindrome, isPalindrome2 } from '../src/0009-isPalindrome';

test('09-isPalindrome', () => {
  expect(isPalindrome(-123)).toEqual(false);
  expect(isPalindrome(1234321)).toEqual(true);
  expect(isPalindrome(560065)).toEqual(true);
  expect(isPalindrome(123)).toEqual(false);
  expect(isPalindrome(1)).toEqual(true);
  expect(isPalindrome(11)).toEqual(true);
  expect(isPalindrome2(-123)).toEqual(false);
  expect(isPalindrome2(1234321)).toEqual(true);
  expect(isPalindrome2(560065)).toEqual(true);
  expect(isPalindrome2(123)).toEqual(false);
  expect(isPalindrome2(1)).toEqual(true);
  expect(isPalindrome2(11)).toEqual(true);
});
