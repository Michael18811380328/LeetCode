/*
 * @lc app=leetcode.cn id=1447 lang=javascript
 *
 * [1447] 最简分数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */

// 基本思路：分母一次遍历N，分子一次遍历n
// 二重循环内部，然后获取分子和分母
// 如果没有最大公约数，那么就是真的，否则不反悔
// 处理特殊的1和2等情况
// （如果是100，那么是否考虑缓存和性能问题，求最大公约数的性能问题）
// Your runtime beats 23.53 % of javascript submissions
var simplifiedFractions = function(n) {
  if (n === 1) {
    return [];
  }
  if (n === 2) {
    return ["1/2"];
  }
  const list = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  // 辅助函数，判断两个数最大公约数
  // 默认a大于b
  let check = (a, b) => {
    // 从2到b一直除，判断两个是否有公约数
    if (b === 1) {
      return true;
    }
    if (a % b === 0) {
      return false;
    }
    // 最好是质数数组，不需要遍历全部的数字
    for (let i = 0; i < list.length; i++) {
      if (b < list[i]) {
        break;
      }
      if (a % list[i] === 0 && b % list[i] === 0) {
        return false;
      }
    }
    return true;
  };

  let res = [];
  // 外层循环是分母，内层循环是分子
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (check(i, j)) {
        const item = '' + j + '/' + i;
        res.push(item);
      }
    }
  }
  return res;
};
// @lc code=end

