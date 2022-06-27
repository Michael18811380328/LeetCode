/*
 * @lc app=leetcode.cn id=1790 lang=javascript
 *
 * [1790] 仅执行一次字符串交换能否使两个字符串相等
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 思路：这两个字符串中，只有某两个字符调换位置，其他都相同
// 那么把这两个找出来，然后调换比较即可
// Your runtime beats 91.85 % of javascript submissions
const areAlmostEqual = function(s1, s2) {
  // 0 处理边缘情况
  if (s1 === s2) {
    return true;
  }
  if (s1.length !== s2.length) {
    return false;
  }
  // 默认设置两个指针都是-1
  let p1 = -1; let
    p2 = -1;
  for (let i = 0; i < s1.length; i++) {
    // 如果某个字符不相等，分三种情况
    if (s1[i] !== s2[i]) {
      // 是第一个不同的字符
      if (p1 === -1) {
        p1 = i;
      }
      // 是第二个不同的字符
      else if (p2 === -1) {
        p2 = i;
      }
      // 是第三个不同的字符（直接返回false，不满足）
      else {
        return false;
      }
    }
  }
  // 如果只有一个不同，那么直接返回 false
  if (p2 === -1) {
    return false;
  }
  // 如果两个交换后相同，那么就满足条件
  if (s1[p1] === s2[p2] && s1[p2] === s2[p1]) {
    return true;
  }
  // 否则不满足
  return false;
};
// @lc code=end
export { areAlmostEqual };
