import { lengthOfLongestSubstring } from '../finished/03-lengthOfLongestSubstring';

// test('03.js', () => {
//   const res1 = lengthOfLongestSubstring2('bbbbb');
//   const res2 = lengthOfLongestSubstring2('pwwkew');
//   const res3 = lengthOfLongestSubstring2('abcabcbb');
//   const res4 = lengthOfLongestSubstring2('abcdjefghjuiokj');
//   const res5 = lengthOfLongestSubstring2('a');
//   const res6 = lengthOfLongestSubstring2('ab');
//   const res7 = lengthOfLongestSubstring2('abcdefg');
//   const res8 = lengthOfLongestSubstring2('ohomm');
//   expect([res1, res2, res3, res4, res5, res6, res7, res8]).toEqual([1, 3, 3, 9, 1, 2, 7, 3]);
// });

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
