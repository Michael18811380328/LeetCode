function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false;
  if (n === 1) return true;
  while (n > 0) {
    if (n === 1) return true;
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return false;
}
// 96 ms, 在所有 typescript 提交中击败了95.65%
