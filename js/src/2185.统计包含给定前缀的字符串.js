/*
 * @lc app=leetcode.cn id=2185 lang=javascript
 *
 * [2185] 统计包含给定前缀的字符串
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 * Your runtime beats 87.37 % of javascript submissions
 */
var prefixCount = function(words, pref) {
  let nums = 0;
  words.forEach(word => {
    if (word.indexOf(pref) === 0) {
      nums++;
    }
  });
  return nums;
};
// @lc code=end

