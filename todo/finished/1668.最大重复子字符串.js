/*
 * @lc app=leetcode.cn id=1668 lang=javascript
 *
 * [1668] 最大重复子字符串
 */

// @lc code=start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
// var maxRepeating = function(sequence, word) {
//   const index = sequence.indexOf(word);
//   if (index === -1) {
//     return 0;
//   }
//   let res = [];
//   const wordLen = word.length;
//   for (let i = index; i < sequence.length; i++) {
//     if (sequence[i] === word[0]) {
//       if (sequence.slice(i, i + wordLen) === word) {
//         res.push(i);
//         i--;
//         i += wordLen;
//       }
//       // 如果从前向后遍历
//       // 然后加一个 wordLen
//       // 那么可能会出现后面的无法匹配
//     }
//   }
//   // 这里看一下多少个连续的
//   let max = 1;
//   let current = 1;
//   for (let i = 1; i < res.length; i++) {
//     if (res[i] - res[i - 1] === wordLen) {
//       current++;
//       max = current > max ? current : max;
//     } else {
//       current = 1;
//     }
//   }
//   return max;
// };
// 200/211 cases passed (N/A)
// "aaaaaa" "aa" 3
// "aaabaaaabaaabaaaabaaaabaaaabaaaaba"
// "aaaba"
// 5 4

// 换一个思路
// Your runtime beats 36.25 % of javascript submissions
var maxRepeating = function(sequence, word) {
  const index = sequence.indexOf(word);
  if (index === -1) {
    return 0;
  }
  const wordLen = word.length;
  const max = Math.floor(sequence.length / wordLen);
  for (let i = 0; i <= max; i++) {
    let cur = '';
    for (let j = 0; j <= i; j++) {
      cur += word;
    }
    if (sequence.indexOf(cur) === -1) {
      return i;
    }
  }
  return max;
};
// @lc code=end

