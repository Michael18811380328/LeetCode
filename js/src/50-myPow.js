// 50-实现 pow(x, n) ，即计算 x 的 n 次幂函数。
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// -100.0 < x < 100.0
// 思路一：根据定义：68 ms, 在所有 javascript 提交中击败了 78.82%
// 注意：x ** n 可能计算不精确，先使用 toFix 去掉后面的小数
function myPow(x, n) {
  return parseFloat((x ** n).toFixed(5));
}

// 进阶：如果自己实现pow函数，怎么处理？可以for循环
function myPow2(x, n) {
  if (x === 0) return 0;
  if (n === 0) return 1;
  let res = 1;
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      res *= x;
    }
  } else {
    const m = -n;
    for (let i = 1; i <= m; i++) {
      res *= x;
    }
    res = 1 / res;
  }
  return parseFloat((res).toFixed(5));
}

export { myPow, myPow2 };
