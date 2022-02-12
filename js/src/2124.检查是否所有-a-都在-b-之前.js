/*
 * @lc app=leetcode.cn id=2124 lang=javascript
 *
 * [2124] 检查是否所有 A 都在 B 之前
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 找到第一个B，找到最后一个A，比较索引即可
// Your runtime beats 6.01 % of javascript submissions
const checkString = function(s) {
  const indexA = s.lastIndexOf('a');
  const indexB = s.indexOf('b');
  if (indexA === -1 || indexB === -1) {
    return true;
  }
  return indexA < indexB;
};

// 可能 index 的性能不太好，可以改成遍历全部字符串，找到AB
// 这样时间复杂度就是 O(n)
// @lc code=end
export { checkString };
