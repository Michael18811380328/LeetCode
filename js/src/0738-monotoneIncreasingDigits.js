/**
 * @param {number} n
 * @return {number}
 */
// 两个思路
// 1、枚举法，直接遍历这个数字，性能较差(963153657 会超时)
// var monotoneIncreasingDigits = function(n) {
//     if (n < 10) return n;
//     // 辅助函数：判断一个数字是否单调递增的
//     let check = (num) => {
//         if (num < 10) return true;
//         while (num >= 10) {
//             let tmp1 = num % 10;
//             let tmp2 = (num - tmp1) / 10 % 10;
//             if (tmp2 > tmp1) return false;
//             num = (num - tmp1) / 10;
//         }
//         return true;
//     };
//     // 枚举计算
//     for (let i = n; i > 0; i--) {
//         if (check(i)) {
//             return i;
//         }
//     }
// };

// 2、贪心算法：如果某一个数字满足，那么返回真；如果不满足，从前向后遍历数字，然后把相差的直接变成9，然后再测试，这样可以减少循环次数
// 这个可以做出来，但是性能还可以提升
// 同一个代码，在不同时间提交，执行时间差异较大，所以还是从代码角度分析时间复杂度，这个结果仅供参考
// 92 ms, 在所有 JavaScript 提交中击败了5.25%
// 52 ms, 在所有 JavaScript 提交中击败了96.79%
const monotoneIncreasingDigits = function(n) {
  if (n < 10) return n;
  // 辅助函数：判断一个数字是否单调递增的
  const check = (num) => {
    if (num < 10) return true;
    while (num >= 10) {
      const tmp1 = num % 10;
      const tmp2 = (num - tmp1) / 10 % 10;
      if (tmp2 > tmp1) return false;
      num = (num - tmp1) / 10;
    }
    return true;
  };

  // 辅助函数：把不满足的数字，差距大的直接变成9
  const calculateNum = (num) => {
    const arr = String(num).split('');
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        // 当前这一位减一
        arr[i - 1] = arr[i - 1] - 1;
        // 后面的全部变成9
        for (let j = i; j < arr.length; j++) {
          arr[j] = 9;
        }
        break;
      }
    }
    return Number(arr.join(''));
  };

  while (!check(n)) {
    // 重新计算 n
    n = calculateNum(n);
  }
  return n;
};

// console.log(monotoneIncreasingDigits(10), 9);
// console.log(monotoneIncreasingDigits(1234), 1234);
// console.log(monotoneIncreasingDigits(332), 299);
// console.log(monotoneIncreasingDigits(963153657), 299);
export { monotoneIncreasingDigits };
