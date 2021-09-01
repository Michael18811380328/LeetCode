// 191-
// 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）。
// 考点：位运算

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
  // 首先转化为字符串，然后计算字符串中的1的个数
  const str = n.toString(2);
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      result++;
    }
  }
  return result;
}

// 改进版性能更好
function hammingWeight2(n) {
  return n.toString(2).split('1').length - 1;
}

// 位运算实现-仅参考
// function hammingWeight3(n) {
//   let count = 0;
//   while(n) {
//     n & 1 && count ++;
//     n = n >>> 1;
//   }
//   return count;
// };

export { hammingWeight, hammingWeight2 };
