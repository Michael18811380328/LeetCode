/*
 * @lc app=leetcode.cn id=970 lang=javascript
 *
 * [970] 强整数
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
// 现在1000都超时???
var powerfulIntegers = function(x, y, bound) {
  // 使用动态规划，反向处理
  // 新建一个长度是 bound 的数组，然后填充false
  let arr = new Array(bound + 1).fill(false);
  // 双重循环，循环的是当前的指数，然后获取对应的情况
  for (let i = 0; i < Math.sqrt(bound, x); i++) {
    for (let j = 0; j < Math.ceil(bound / (i ** x)); j++) {
      let item = x ** i + y ** j;
      if (item <= bound && arr[item] === false) {
        arr[item] = true;
      }
    }
  }
  // 剩余的就是false 
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      res.push(i);
    }
  }
  return res;
};
// @lc code=end

