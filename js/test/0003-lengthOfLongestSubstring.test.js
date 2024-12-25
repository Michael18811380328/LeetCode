import { lengthOfLongestSubstring } from '../src/0003-lengthOfLongestSubstring';

test('03.js', () => {
  const res1 = lengthOfLongestSubstring('bbbbb');
  const res2 = lengthOfLongestSubstring('pwwkew');
  const res3 = lengthOfLongestSubstring('abcabcbb');
  const res4 = lengthOfLongestSubstring('abcdjefghjuiokj');
  const res5 = lengthOfLongestSubstring('a');
  const res6 = lengthOfLongestSubstring('ab');
  const res7 = lengthOfLongestSubstring('abcdefg');
  const res8 = lengthOfLongestSubstring('ohomm');
  expect([res1, res2, res3, res4, res5, res6, res7, res8]).toEqual([1, 3, 3, 9, 1, 2, 7, 3]);
});

describe('lengthOfLongestSubstring', () => {
  it('should return 3 when s is "abc"', () => {
    expect(lengthOfLongestSubstring('abc')).toEqual(3);
  });
  it('should return 1 when s is "bbbbb"', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
  });
  it('should return 3 when s is "pwwkew"', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });
  it('should return 0 when s is ""', () => {
    expect(lengthOfLongestSubstring('')).toEqual(0);
  });
});
