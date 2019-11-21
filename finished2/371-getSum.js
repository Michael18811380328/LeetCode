// 371 不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// 思路一：使用加减号
// 64 ms
function getSum1(a, b) {
  return a + b;
}

// 思路二：使用位运算符（实现加减法）
// http://zouyang1230.com/blog/archives/805
// 60 ms, 在所有 javascript 提交中击败了89.60%
// 这种方法很偏
function getSum2(a, b) {
  if (a == 0 || b == 0) {
    return a || b;
  }
  let ntempNum;
  while (b != 0) {
    ntempNum = a ^ b;
    b = (a & b) << 1;
    a = ntempNum;
  }
  return a;
}

export {  getSum1, getSum2 };