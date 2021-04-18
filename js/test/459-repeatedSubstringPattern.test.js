import { repeatedSubstringPattern } from '../src/459-repeatedSubstringPattern';

test('459', () => {
  expect(repeatedSubstringPattern('abab')).toEqual(true);
  expect(repeatedSubstringPattern('abcabcabcabc')).toEqual(true);
  expect(repeatedSubstringPattern('aba')).toEqual(false);
});
