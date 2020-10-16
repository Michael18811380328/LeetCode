/**
 * @param {number} n
 * @return {number}
 */

// 思路1：从1循环到这个数；每个数通过辅助函数计算内部多少个1
// 辅助函数：计算这个数中多少个1
// 数字很大就堆栈溢出 824883294
// 暴力求解不行（这里需要归纳法）
// 这样的问题是：每一个都重新计算一次，最好可以放在对象中存储计算的结果；
// 对于上亿的数字，一次循环都不能使用
// function countOne(num) {
//   let result = 0;
//   while (num > 0) {
//     if (num % 10 === 1) {
//       result++;
//     }
//     num = (num - num % 10) / 10;
//   }
//   return result;
// }

// var countDigitOne = function(n) {
//   if (n <= 0) {
//     return 0;
//   }
//   if (n <= 9) {
//     return 1;
//   }
//   let result = 0;
//   for (let i = 0; i <= n; i++) {
//     result += countOne(i)
//   }
//   return result;
// };

// 思路二：把这些数全部相加成一个字符串，然后计算内部1字符串的个数（这个性能怎么样）
// 结果字符串是否很长？循环这个字符串，如果等于1，那么返回结果
// 数字较小可以实现，数字很大就堆栈溢出 824883294
// var countDigitOne = function(n) {
//   if (n <= 0) {
//     return 0;
//   }
//   if (n <= 9) {
//     return 1;
//   }
//   let str = '';
//   for (let i = 0; i <= n; i++) {
//     str = str + i;
//   }
//   let arr = str.split('');
//   let result = 0;
//   for (let i = 0, len = arr.length; i < len; i++) {
//     if (arr[i] === '1') {
//       result++;
//     }
//   }
//   return result;
// };

// 思路二改进版本(还是堆栈溢出) 824883294
// var countDigitOne = function(n) {
//   // 0或者负数直接返回0
//   if (n <= 0) {
//     return 0;
//   }
//   if (n <= 9) {
//     return 1;
//   }
//   let result = 0;
//   for (let i = 0; i <= n; i++) {
//     let str = '' + i;
//     let arr = str.split('');
//     for (let i = 0, len = arr.length; i < len; i++) {
//       if (arr[i] === '1') {
//         result++;
//       }
//     }
//   }
//   return result;
// };
