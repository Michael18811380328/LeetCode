const isUgly = function (num) {
  // if (num <= 0) {
  //   return false;
  // }
  // if (num < 7) {
  //   return true;
  // }
  while (num % 5 === 0 && num > 1) {
    num /= 5;
  }
  while (num % 3 === 0 && num > 1) {
    num /= 3;
  }
  while (num % 2 === 0 && num > 1) {
    num /= 2;
  }
  if (num > 1) {
    return false;
  }
  return true;
};
/**
 * @param {number} n
 * @return {number}
 */
// var nthUglyNumber = function(n) {
//   let array = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12];
//   if (array.length >= n) {
//     return array[n - 1];
//   }
//   for (let i = 13; array.length < 1690; i++) {
//     if (isUgly(i)) {
//       array.push(i);
//       if (array.length === n) {
//         return array[n - 1];
//       }
//     }
//   }
// };
// 这样超出时间限制

// 思路二：计算训练集
// 10 0000 0000  1529 目标是1690
// let array6 = [];
// for (let i = 2000000000; i < 3000000000; i++) {
//   if (isUgly(i)) {
//     array6.push(i);
//     if (array6.length > 20) {
//       break;
//     }
//   }
// }
// console.log(array6);

// 现在已经20亿了
// 1676 1690

// 72 ms
// , 在所有 JavaScript 提交中击败了
// 94.42%
// 的用户
// 内存消耗 :
// 33.6 MB


export default { isUgly };
