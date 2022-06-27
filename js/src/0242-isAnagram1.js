/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Your runtime beats 82.75 % of javascript submissions
// 思路一：使用哈希表
const isAnagram1 = function(s, t) {
  if (s.length !== t.length) return false;
  const dict = {};
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const key = s[i];
    if (!dict[key]) {
      dict[key] = 0;
    }
    dict[key]++;
  }
  for (let i = 0; i < len; i++) {
    const key = t[i];
    if (!dict[key] || dict[key] === 0) return false;
    dict[key]--;
  }
  return true;
};
// 思路二：使用数组排序
// Your runtime beats 36.98 % of javascript submissions
const isAnagram2 = function(s, t) {
  const sLen = s.length;
  if (sLen !== t.length) return false;
  const arr1 = s.split('');
  const arr2 = t.split('');
  arr1.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  arr2.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  for (let i = 0; i < sLen; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// @lc code=end
