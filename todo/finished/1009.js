/*
 * @lc app=leetcode.cn id=1009 lang=javascript
 *
 * [1009] 十进制整数的反码
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// Your runtime beats 81.05 % of javascript submissions
var bitwiseComplement = function(N) {
  if (N === 0) return 1;
  // 第一种思路：把这个数字转换成二进制字符串，然后循环，转换01，然后转换成数字输出。
  // 如果遇到很大的数字，这样可能性能不好
  // 第二种思路：直接把这个数依次整除，余数求反，然后再加回去，这样做很多乘法加法运算即可
  let timer = 0;
  let result = 0;
  while (N > 0) {
    let remain = N % 2;
    if (remain === 0) {
      result += 2 ** timer;
    }
    timer++;
    N = (N - remain) / 2;
  }
  return result;
};
// @lc code=end

