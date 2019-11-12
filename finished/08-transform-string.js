// 08 字符串转化成数值（特殊情况很多）
// 请你来实现一个 atoi 函数，使其能将字符串转换成整数。

/**
 *
首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。
当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。
该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。
注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。
在任何情况下，若函数不能进行有效的转换时，请返回 0。
假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。
*/

/**
 * @param {string} str
 * @return {number}
 */
// var myAtoi = function(str) {
//   const number = Number(str);
//   if (isNaN(number)) {
//     let result = 0;
//     while (str.length > 0) {
//       if (str.slice(0, 1) === ' ') break;
//       const first = 1 * str.slice(0, 1);
//       if (isNaN(first)) break;
//       result = result * 10 + first;
//       str = str.substring(1);
//     }
//     return result;
//   }
//   // handle number max and min
//   const max = Math.pow(2, 31);
//   const min = Math.pow(-2, 31);
//   return number > max ? max : ( number < min ? min : number);
// };

// 标准答案都会使用正则表达式，直接使用字符串API无法处理复杂情况
// 更快的答案直接把最值计算转化成具体的数值比较
// 尽快巩固常见的正则表达式，日常使用正则表达式不多

function myAtoi(str) {
  str = str.trim();
  // [+|-] 表示一个或者多个字符
  // d+ 表示一个或者多个数值
  const reg = new RegExp(/^[+|-]?\d+/);
  if (!reg.test(str)) {
    return 0;
  }
  const val = parseInt(str.match(reg), 0);
  const min = -(2 ** 31);
  const max = -min - 1;
  return Math.max(Math.min(val, max), min);
}

export { myAtoi };
