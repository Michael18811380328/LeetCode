/*
 * @lc app=leetcode.cn id=2068 lang=javascript
 *
 * [2068] 检查两个字符串是否几乎相等
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
// 思路：循环字符串，获取出现的次数。然后遍历两个字典即可
// Your runtime beats 29.03 % of javascript submissions
const checkAlmostEquivalent = function(word1, word2) {
  const len = word1.length;
  const dict1 = {};
  const dict2 = {};
  // 遍历字符串
  for (let i = 0; i < len; i++) {
    // 计算第一个的次数
    const key1 = word1[i];
    if (!dict1[key1]) {
      dict1[key1] = 0;
    }
    dict1[key1] = dict1[key1] + 1;

    // 计算第二个的次数
    const key2 = word2[i];
    if (!dict2[key2]) {
      dict2[key2] = 0;
    }
    dict2[key2] = dict2[key2] + 1;

    // 这样保证两个对象中键全部都有
    if (!dict2[key1]) {
      dict2[key1] = 0;
    }
    if (!dict1[key2]) {
      dict1[key2] = 0;
    }
  }
  // 比较出现的概率
  for (const key in dict1) {
    const value1 = dict1[key];
    const value2 = dict2[key];
    if (Math.abs(value1 - value2) > 3) {
      return false;
    }
  }
  return true;
};
// @lc code=end
