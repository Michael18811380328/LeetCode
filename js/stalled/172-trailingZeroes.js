// 172-给定一个整数 n，返回 n! 结果尾数中零的数量。

// 输入: 3
// 输出: 0
// 解释: 3! = 6, 尾数中没有零。

// 输入: 5
// 输出: 1
// 解释: 5! = 120, 尾数中有 1 个零.

// 你算法的时间复杂度应为 O(log n) 。

/**
 * @param {number} n
 * @return {number}
 */
// 思路一：分段函数：判断5和10的，最后增加0；但是当数很大时，那么100 1000 2000 计算就不方便了。
// 思路二：直接计算阶乘，然后求10的余数，看结果有多少个0；
// 思路三：计算阶乘过程中，每次都求10的余数，这样结果值会小一点

// 思路0：获取阶乘，然后计算0的数量，这样不满足时间复杂度
// 如果数值较大，例如30，结果不正确
function trailingZeroesError(n) {
  if (n === 0) return 0;
  let multi = 1;
  for (let i = 1; i < n + 1; i++) {
    multi *= i;
  }
  let result = 0;
  while (multi > 9 && multi % 10 === 0) {
    multi = multi / 10;
    result++;
  }
  return result;
}

// 思路二：直接获取阶乘的数量（时间复杂度还是不满足）
// 2147483647 会超时
// 这样写，本地可以运行（大约10秒），但是LeetCode界面还是超时
function trailingZeroes(n) {
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
        item = item / 10;
        result++;
      }
      while (item % 5 === 0) {
        item = item / 5;
        result++;
      }
    }
  }
  return result;
}

// 思路二：直接求n的余数，递归
// 20 / 10 = 2
// 2 * 2 = 4
// 500 就是 5 * 100内部的0的个数
// 逻辑正确，算法需要考虑细节
function trailingZeroes(n) {
  // 小于5直接返回0
  if (n < 5) return 0;
  let result = 0;
  let byte = 1;
  while (n > 9) {
    let tmp = n % 10;
    n = (n - tem) / 10;
    if (item > 5) {
      result++;
    }
    result = result + byte * 2;
    byte++;
  }
}

export { trailingZeroes };
