/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// Your runtime beats 84.33 % of javascript submissions
var mergeAlternately = function(word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;
  const len = Math.min(len1, len2);
  let res = '';
  for (let i = 0; i < len; i++) {
    res = res + word1[i] + word2[i];
  }
  if (len1 === len2) {
    return res;
  }
  else if (len1 > len) {
    res = res + word1.slice(len);
  }
  else if (len2 > len) {
    res = res + word2.slice(len);
  }
  return res;
};
// @lc code=end


// Your runtime beats 84.33 % of javascript submissions
var mergeAlternately = function(word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;
  const len = Math.min(len1, len2);
  let res = '';
  for (let i = 0; i < len; i++) {
    res = res + word1[i] + word2[i];
  }
  if (len1 === len2) {
    return res;
  }
  else if (len1 > len) {
    res = res + word1.slice(len);
  }
  else if (len2 > len) {
    res = res + word2.slice(len);
  }
  return res;
};
