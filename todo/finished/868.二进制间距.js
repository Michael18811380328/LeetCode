/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// Your runtime beats 93.22 % of javascript submissions
var binaryGap = function(n) {
  if (n === 1) return 0;
  // 先把十进制转换成二进制
  let bin = (n >>> 0).toString(2);
  // 然后判断其中1的个数
  let start = bin.indexOf('1')
  if (start === bin.lastIndexOf('1')) {
    return 0;
  }
  // 循环一次字符串，使用两个指针，判断最大的间距
  let max = 1;
  for (let i = start + 1; i < bin.length; i++) {
    if (bin[i] === '0') {
      continue;
    } else {
      // 如果是1，那么计算长度，然后归零
      let len = i - start;
      max = max > len ? max : len;
      start = i;
    }
  }
  return max;
};
// @lc code=end

