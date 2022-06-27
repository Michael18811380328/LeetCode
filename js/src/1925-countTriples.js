/*
 * @lc app=leetcode.cn id=1925 lang=javascript
 *
 * [1925] 统计平方和三元组的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 两个思路
// 1、枚举法
// 因为数字范围是250，使用三层循环的算法复杂度可以接受 N * 3
// 直接循环三层，然后判断 abc 三个数是否满足需求
// 注意：a b 两个数字可以调换顺序，最后结果需要X2
// Your runtime beats 31.03 % of javascript submissions
const countTriples = function(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      for (let k = j + 1; k <= n; k++) {
        if (i * i + j * j === k * k) {
          count++;
        }
      }
    }
  }
  return count * 2;
};

// 思路2：既然是判断相等，那么可以使用字典优化一层循环 N * 2
// Your runtime beats 44.83 % of javascript submissions
const countTriples = function(n) {
  const dict = {};
  const max = n * n;
  for (let i = 1; i <= n; i++) {
    const curr = i * i;
    dict[curr] = true;
  }
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const sum = i * i + j * j;
      if (dict[sum]) {
        count++;
      }
      if (sum > max) {
        break;
      }
    }
  }
  return count * 2;
};

// @lc code=end
