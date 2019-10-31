// 67. 二进制求和
// 给定两个二进制字符串，返回他们的和（用二进制表示）。
// 输入为非空字符串且只包含数字 1 和 0。

// 输入: a = "1010", b = "1011"
// 输出: "10101"


// 思路一：把两个字符串转化成十进制数值，然后相加，再还原成二进制数值，然后转化成字符串输出
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function(a, b) {
//   // handle 0
//   if (a === '0') {
//     return b;
//   }
//   if (b === '0') {
//     return a;
//   }
//   const arr1 = a.split(''), arr2 = b.split('');
//   let sum1 = 0, sum2 = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum1 = sum1 * 2 + 1 * arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     sum2 = sum2 * 2 + 1 * arr2[i];
//   }
//   let sum = sum1 + sum2;
//   let result = [];
//   while (sum > 0) {
//     let item = sum % 2;
//     result.unshift(item);
//     sum = (sum - item) / 2;
//   }
//   return result.join('');
// };

// 问题1：如果输入0，那么可以优化计算
// 问题2：如果输入数字特别大，那么计算的和是错误的
// "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
// "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
// 结果 "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"

// 思路二：类似人类的加法：把字符串转化成数组，两个数组相加；如果结果是2或者3，那么进1；然后把数组转化成字符串输出
// 76 ms , 在所有 javascript 提交中击败了85.88%

var addBinary = function(a, b) {
  if (a === '0') return b;
  if (b === '0') return a;
  let arr1, arr2;
  if (a.length > b.length) {
    arr1 = a.split('');
    arr2 = b.split('');
  } else {
    arr2 = a.split('');
    arr1 = b.split('');
  }
  // 现在 arr 1 是长的；
  // 获取一个小的数和一个大的数，然后把小的数加到大的数上面；然后把结果是2或者3的加到前一个，然后转化成字符串输出
  // 把 arr2 加到 arr1 上面
  const arr2Len = arr2.length, arr1Len = arr1.length;
  for (let i = 0; i < arr2Len; i++) {
    arr1[arr1Len - 1 - i] = 1 * arr1[arr1Len - 1 - i] + 1 * arr2[arr2Len - 1 - i];
  }
  for (let i = 0; i < arr1Len; i++) {
    const index = arr1Len - 1 - i;
    if (arr1[index] === 2) {
      arr1[index] = 0;
      if (arr1[index - 1] > -1) {
        arr1[index - 1]++;
      } else {
        arr1.unshift(1);
      }
    }
    else if (arr1[index] === 3) {
      arr1[index] = 1;
      if (arr1[index - 1] > -1) {
        arr1[index - 1]++;
      } else {
        arr1.unshift(1);
      }
    }
  }
  return arr1.join('');
};

// const a = "1010", b = "1011";
// const a = "11", b = "1";
// const a = "0", b = "1";
const a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
const b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
console.log(addBinary(a, b));