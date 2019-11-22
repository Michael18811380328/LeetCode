// 判断回文数
// 如果是0，是回文数
// 如果是0结尾，一定不是回文数；如果是负数，一定不是回文数
// 如果是小数，一定不是回文数（输入整数，不考虑这个情况）
function isPalindrome(x) {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;
  // 其他的进入循环判断
  const arr = String(x).split('');
  for (let i = 0, len = arr.length; i < len / 2; i++) {
    if (arr[i] !== arr[len - i - 1]) {
      return false;
    }
  }
  return true;
}

// 执行用时: 220 ms 45.2 MB
// console.log(isPalindrome(-123));
export { isPalindrome };
