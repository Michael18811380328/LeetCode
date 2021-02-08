// 258 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
// 输入: 38 输出: 2 解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
// 进阶: 你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？

// 辅助函数：计算各个位数的和
function getSum(num) {
  let result = 0;
  while (num > 0) {
    const remainder = num % 10;
    result += remainder;
    num = (num - remainder) / 10;
  }
  return result;
}

// 96 ms, 在所有 javascript 提交中击败了41.59%
function addDigits(num) {
  if (num < 10) {
    return num;
  }
  do {
    num = getSum(num);
  } while (num >= 10);
  return num;
}

export { getSum, addDigits };
