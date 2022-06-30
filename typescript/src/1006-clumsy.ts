/*
 * @lc app=leetcode.cn id=1006 lang=javascript
 *
 * [1006] 笨阶乘
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 76 ms
function clumsy(n: number): number {
  // 第一次特殊，其他的直接算即可
  const innerFn = (n: number): number => {
    // - 6 * 5 / 4 + 3
    if (n >= 4) {
      return -Math.floor((n * (n - 1)) / (n - 2)) + (n - 3) + innerFn(n - 4);
    }
    if (n === 3) {
      return -3 * 2;
    }
    if (n === 2) {
      return -2 * 1;
    }
    if (n === 1) {
      return -1;
    }
    if (n === 0) {
      return 0;
    }
    return 0;
  };
  // 首次是正数，然后使用上面的公式动态规划计算
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2 * 1;
  }
  if (n === 3) {
    return (3 * 2) / 1;
  }
  if (n === 4) {
    return 7; //4 * 3 / 2 + 1
  }
  if (n > 4) {
    return Math.floor((n * (n - 1)) / (n - 2)) + (n - 3) + innerFn(n - 4);
  }
  return 0;
}

export {clumsy};
