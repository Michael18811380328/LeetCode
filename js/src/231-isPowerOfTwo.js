// 231 判断2的幂
// 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
// 76 ms, 在所有 javascript 提交中击败了95.83%
function isPowerOfTwo(n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  while (n > 0) {
    if (n === 1) return true;
    if ((n % 2) !== 0) return false;
    n /= 2;
  }
  return null;
}

export { isPowerOfTwo };
