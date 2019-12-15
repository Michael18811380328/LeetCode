// 172-给定一个整数 n，返回 n! 结果尾数中零的数量。

// 输入: 3 输出: 0 解释: 3! = 6, 尾数中没有零。
// 输入: 5 输出: 1 解释: 5! = 120, 尾数中有 1 个零.
// 你算法的时间复杂度应为 O(log n) 。

// 思路0：获取阶乘，然后计算0的数量，这样不满足时间复杂度; 如果数值较大，例如30，结果不正确
function trailingZeroesError(n) {
  if (n === 0) return 0;
  let multi = 1;
  for (let i = 1; i < n + 1; i++) {
    multi *= i;
  }
  let result = 0;
  while (multi > 9 && multi % 10 === 0) {
    multi /= 10;
    result++;
  }
  return result;
}

// 思路1：直接获取阶乘的数量（时间复杂度还是不满足）
// 2147483647 会超时
// 这样写，本地可以运行（大约10秒），但是LeetCode界面还是超时
function trailingZeroes1(n) {
  // 小于5直接返回0
  if (n < 5) return 0;
  let result = 0;
  // 循环一次
  for (let i = 1; i < n + 1; i++) {
    // 结尾是12346789直接返回(还是会超时)
    if (i % 10 === 5 || i % 10 === 0) {
      let item = i;
      // 判断整除10或者整除5
      while (item % 10 === 0) {
        item /= 10;
        result++;
      }
      while (item % 5 === 0) {
        item /= 5;
        result++;
      }
    }
  }
  return result;
}

// 思路2：分析
// 如果一个数的阶乘的结果中有n, 那么有5-10两种情况。10 = 5 * 2。那么只要计算5出现了多少次即可计算多个少0（因为2的数量远远大于5）
// 那么对于25 100 等数字，就除以两次5（直到不能除以5），即可计算是5的多少倍
// 60 ms, 在所有 javascript 提交中击败了98.92%

function trailingZeroes2(n) {
  let result = 0;
  if (n < 5) {
    return result;
  }
  while (n >= 5) {
    const reminder = n % 5;
    const quotient = (n - reminder) / 5;
    result += quotient;
    n = quotient;
  }
  return result;
}

export { trailingZeroesError, trailingZeroes1, trailingZeroes2 };
