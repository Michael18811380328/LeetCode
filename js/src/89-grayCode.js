/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// 自己基本思路：第一项是确定的，然后向前和向后，分别进行动态规划计算
// 设置两个数组
// 这样可以全部获取，然后把第二个数组倒序一下，然后拼接到第一个数组上
// 关键是如何写递推式，怎样使用位运算优化？（有一位不同，明显位运算）
// N 最大可以取16，所以每一位取反都是可以的
// let length = 2 ** (n - 1);
// let arr1 = new Array(length);
// let arr2 = new Array(length);
// arr1[0] = 0;
// arr2[0] = 0;
// let dict = {};

// @lc code=start
// 官方思路，位运算了解一下
// 动态规划思路不难，主要是位运算不熟
// https://leetcode.cn/problems/gray-code/solution/ge-lei-bian-ma-by-leetcode-solution-cqi7/
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const result = [0];
  for (let i = 1; i <= n; i++) {
    const len = result.length;
    for (let j = len - 1; j >= 0; j--) {
      // 对称翻转
      result.push(result[j] | (1 << (i - 1)));
    }
  }
  return result;
};
// @lc code=end

