/*
 * @lc app=leetcode.cn id=1422 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 92 ms
// , 在所有 JavaScript 提交中击败了
// 72.46%

const maxScore = function(s) {
  if (s.length === 2) {
    return (s[0] === '0' ? 1 : 0) + (s[1] === '1' ? 1 : 0);
  }
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    const left = s.slice(0, i);
    const right = s.slice(i);
    const score = getValue(left, right);
    max = max > score ? max : score;
  }
  return max;
};

const getValue = function(str1, str2) {
  let res = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === '0') res++;
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === '1') res++;
  }
  return res;
};
// @lc code=end

export { maxScore };
