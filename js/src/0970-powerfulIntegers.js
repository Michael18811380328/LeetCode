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
// 264 ms
// , 在所有 JavaScript 提交中击败了
// 16.67%
// 的用户
const powerfulIntegers = function(x, y, bound) {
  // 使用动态规划，反向处理
  // 新建一个长度是 bound 的数组，然后填充false
  const arr = new Array(bound + 1).fill(false);
  // 双重循环，循环的是当前的指数，然后获取对应的情况
  const end1 = Math.ceil(Math.sqrt(bound, x));
  for (let i = 0; i < end1; i++) {
    const end2 = Math.ceil(Math.sqrt(bound - x ** i, y));
    for (let j = 0; j < end2; j++) {
      const item = x ** i + y ** j;
      if (item <= bound) {
        arr[item] = true;
        // 这里循环比较多，能否优化
      }
    }
  }
  // 剩余的就是false
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      res.push(i);
    }
  }
  return res;
};

// @lc code=end
