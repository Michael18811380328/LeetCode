// 给定一个整数，写一个函数来判断它是否是 3 的幂次方。

// 输入: 27
// 输出: true

// 输入: 0
// 输出: false

// 输入: 9
// 输出: true


// 你能不使用循环或者递归来完成本题吗？

/**
 * @param {number} n
 * @return {boolean}
 */
// 224 ms, 在所有 javascript 提交中击败了99.51%
// 思路1：根据定义求
var isPowerOfThree = function(n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  do {
    let remainder = n % 3;
    if (remainder !== 0) {
      return false;
    }
    n = n / 3;
  } while (n > 1);
  return true;
};

export { isPowerOfThree };