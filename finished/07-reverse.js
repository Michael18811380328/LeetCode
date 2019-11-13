// 方法1：使用数组和字符串反转数字
// 难点：没有看清楚整数溢出说明，前两次调试错误
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
// 时间复杂度不好，128 ms 35.8 MB weak
/**
 * @param {number[]} x
 * @return {number[]}
 */
function reverse1(x) {
  const isMinus = x < 0;
  const arr = String(Math.abs(x)).split('').reverse();
  const result = Number(arr.join(''));
  if (result >= (2 ** 31) - 1 || result <= ((-2) ** 31) + 1) {
    return 0;
  }
  return isMinus ? -result : result;
}

// 算法二：遍历这个数字，依次获取个位数并放在新的数中。96 ms 较好
function reverse(x) {
  if (x === 0) return x;
  const isMinus = x < 0;
  let result = 0;
  x = Math.abs(x);
  while (x > 0) {
    const a = x % 10;
    result = result * 10 + a;
    x = (x - a) / 10;
  }
  if (result >= (2 ** 31) - 1 || result <= ((-2) ** 31) + 1) {
    return 0;
  }
  return isMinus ? -result : result;
}

export { reverse, reverse1 };
