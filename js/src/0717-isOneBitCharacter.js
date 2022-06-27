/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
// Your runtime beats 62.74 % of javascript submissions
const isOneBitCharacter = function(bits) {
  while (bits.length > 0) {
    if (bits.length === 1) {
      return true;
    }
    if (bits[0] === 1) {
      bits.shift();
      bits.shift();
    } else if (bits[0] === 0) {
      bits.shift();
    }
  }
  return false;
};
// @lc code=end

export { isOneBitCharacter };
