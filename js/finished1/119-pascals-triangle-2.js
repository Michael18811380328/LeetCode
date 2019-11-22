// 119 pascals-triangle 杨辉三角(2)

// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
// 进阶：你可以优化你的算法到 O(k) 空间复杂度吗？
/**
 * @param {number} rowIndex
 * @return {number[][]}
 */
// 56 ms, 在所有 javascript 提交中击败了98.14%
function getRow(rowIndex) {
  // 注意：行数和索引，需要加1
  const index = rowIndex + 1;
  const result = [];
  for (let i = 1; i < index + 1; i++) {
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
  return result[index - 1];
}

export { getRow };
