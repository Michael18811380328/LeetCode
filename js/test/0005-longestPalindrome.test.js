import { longestPalindrome } from '../src/0005-longestPalindrome';

describe('longestPalindrome', () => {
  it('should return the longest palindrome substring', () => {
    expect(longestPalindrome('babad')).toBe('bab');
    expect(longestPalindrome('cbbd')).toBe('bb');
    expect(longestPalindrome('a')).toBe('a');
    expect(longestPalindrome('ac')).toBe('a');
  });
});
