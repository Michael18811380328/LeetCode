// 66. 加一
/**
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
 */

// 思路一，把原始的数组转化成数值，然后数值加一，再把加一后的数值转化成数组（这样复杂性很差）
// 如果数字太大，这样的结果是错误的（获取数组转化成的数值是错误的）
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//   const len = digits.length;
//   let sum = 0;
//   for (let i = 0; i < len; i++) {
//     sum = sum * 10 + digits[i];
//   }
//   sum++;
//   console.log(sum);
//   let result = [];
//   while (sum > 0) {
//     let item = sum % 10;
//     result.unshift(item);
//     sum = (sum - item) / 10;
//   }
//   return result;
// };

// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));

// 思路二：直接在原数组最后一位加一。然后遍历原始数组，如果某一个是10， 那么这一个变成1，前一个加一；这样性能好一点。
// 60 ms , 在所有 javascript 提交中击败了 94.99%
function plusOne(digits) {
  const len = digits.length;
  digits[len - 1]++;
  for (let i = len - 1; i > -1; i--) {
    if (digits[i] === 10) {
      digits[i] = 0;
      if (digits[i - 1]) {
        digits[i - 1]++;
      } else {
        digits.unshift(1);
      }
    }
  }
  return digits;
}

// console.log(plusOne([4, 3, 2, 1]));

export default plusOne;
