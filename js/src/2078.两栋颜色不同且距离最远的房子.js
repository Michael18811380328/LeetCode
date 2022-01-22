/*
 * @lc app=leetcode.cn id=2078 lang=javascript
 *
 * [2078] 两栋颜色不同且距离最远的房子
 */

// @lc code=start
/**
 * @param {number[]} colors
 * @return {number}
 */
// 思路一：双重循环（设置开始和结束）
// 数组长度是100，复杂度可以接受
// 性能有点差，或者满足什么条件可以终止？
// Your runtime beats 58.99 % of javascript submissions
var maxDistance = function(colors) {
  let res = 0;
  const len = colors.length;
  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j > i; j--) {
      if (colors[i] !== colors[j]) {
        let diff = j - i;
        if (diff > res) {
          res = diff;
        }
      }
    }
  }
  return res;
};
// 能否使用双指针优化？
// @lc code=end

