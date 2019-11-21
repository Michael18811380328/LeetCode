import { isPalindrome } from '../finished/125-isPalindrome';

test('125-isPalindrome', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
  expect(isPalindrome('afg')).toEqual(false);
});
