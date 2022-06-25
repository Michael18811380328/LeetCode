/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// Your runtime beats 59.8 % of javascript submissions
const gcdOfStrings = function(str1, str2) {
  // 辅助函数，判断某个子串是否是另一个字符串的公因子
  const check = function(strs, prefix) {
    // 如果长度不能整除，肯定不是公因子
    const len = strs.length;
    if (len % prefix.length !== 0) {
      return false;
    }
    return strs === prefix.padEnd(len, prefix);
  };

  const len = Math.min(str1.length, str2.length);
  for (let i = len; i >= 1; i--) {
    const prefix = str1.slice(0, i);
    if (check(str1, prefix) && check(str2, prefix)) {
      return prefix;
    }
  }
  return '';
};
// @lc code=end

export { gcdOfStrings };
