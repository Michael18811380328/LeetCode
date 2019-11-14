// 118 pascals-triangle 杨辉三角

// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 方法一：按照杨辉三角的定义循环两次，性能不好
// 68 ms, 在所有 javascript 提交中击败了 64.87%
function generate(numRows) {
  const result = [];
  for (let i = 1; i <= numRows; i++) {
    if (i === 1) {
      result.push([1]);
    } else if (i === 2) {
      result.push([1, 1]);
    } else {
      // i 行，使用两个for循环
      const innerArr = [1];
      for (let j = 1; j < Math.ceil(i / 2); j++) {
        innerArr[j] = result[i - 2][j - 1] + result[i - 2][j];
      }
      for (let j = Math.ceil(i / 2); j < i; j++) {
        innerArr[j] = innerArr[i - j - 1];
      }
      result.push(innerArr);
    }
  }
  return result;
}

export { generate };
