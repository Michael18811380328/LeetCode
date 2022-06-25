// 476. 数字的补数
// 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。

// 示例 1:
// 输入: 5
// 输出: 2
// 解释: 5 的二进制表示为 101（没有前导零位），其补数为 010。所以你需要输出 2 。
// 示例 2:
// 输入: 1
// 输出: 0
// 解释: 1 的二进制表示为 1（没有前导零位），其补数为 0。所以你需要输出 0 。

// 注意:
// 给定的整数保证在 32 位带符号整数的范围内。
// 你可以假定二进制数不包含前导零位。
// 本题与 1009 https://leetcode-cn.com/problems/complement-of-base-10-integer/ 相同

/**
 * @param {number} num
 * @return {number}
 */
// 通过  96 ms   37.9 MB
const findComplement = function(num) {
  const str = num.toString(2);
  // 可以使用循环
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      res += '1';
    } else {
      res += '0';
    }
  }
  return parseInt(res, 2);
};

// 或者使用正则替换
// 80 ms, 在所有 JavaScript 提交中击败了 80.79%
/**
 * @param {number} num
 * @return {number}
 */
const findComplement2 = function(num) {
  let str = num.toString(2);
  // 可以使用循环，或者使用正则替换
  // let res = '';
  // for (let i = 0; i < str.length; i++) {
  //     if (str[i] === '0') {
  //         res += '1'
  //     } else {
  //         res += '0';
  //     }
  // }
  str = str.replace(/0/g, '2');
  str = str.replace(/1/g, '0');
  str = str.replace(/2/g, '1');
  return parseInt(str, 2);
};

export { findComplement, findComplement2 };
