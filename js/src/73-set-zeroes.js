// 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 116 ms，39.7 MB
function setZeroes(matrix) {
  // 数组不存在的情况
  if (!matrix || !matrix[0]) return;
  // 获取矩阵的宽度和高度
  const A = matrix.length;
  const B = matrix[0].length;
  // 设置两个临时数组存放位置
  const arr1 = [];
  const arr2 = [];
  // 第一次遍历，获取0的位置
  for (let i = 0; i < A; i++) {
    for (let j = 0; j < B; j++) {
      if (matrix[i][j] === 0) {
        arr1.push(i);
        arr2.push(j);
      }
    }
  }
  // 第二次遍历，设置0的位置
  for (let i = 0; i < A; i++) {
    for (let j = 0; j < B; j++) {
      if (arr1.includes(i) || arr2.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}

// 一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
// 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
// 你能想出一个常数空间的解决方案吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/set-matrix-zeroes
// 下面是提示方法
// If any cell of the matrix has a zero we can record its row and column number using additional memory. But if you don't want to use extra memory then you can manipulate the array instead. i.e. simulating exactly what the question says.
// Setting cell values to zero on the fly while iterating might lead to discrepancies. What if you use some other integer value as your marker? There is still a better approach for this problem with 0(1) space.
// We could have used 2 sets to keep a record of rows/columns which need to be set to zero. But for an O(1) space solution, you can use one of the rows and and one of the columns to keep track of this information.
// We can use the first cell of every row and column as a flag. This flag would determine whether a row or column has been set to zero.

export { setZeroes };
