import { isPalindrome } from '../finished/09-isPalindrome';

test('09-isPalindrome', () => {
  expect(isPalindrome(-123)).toEqual(false);
  expect(isPalindrome(1234321)).toEqual(true);
  expect(isPalindrome(560065)).toEqual(true);
});
