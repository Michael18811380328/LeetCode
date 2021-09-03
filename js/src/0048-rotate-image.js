// 48 旋转图像：把一个n*n的矩阵顺时针旋转90度。在原始矩阵上变化，不能使用新的矩阵。

// 思路0：实际上把矩阵分成多层,，然后每一层移动原来的边长的位置
// 递归遍历数组内部，然后获取当前边长减去递归的层数的旋转的index。然后换顺序。
// 这样需要多次遍历数组，然后不在原始数组操作，性能不好

// 思路一：更换数组中元素的顺序。如果变成是n,那么依次调换这个n个元素的位置，这样就很节省性能。然后遍历四分之一的数组，就可以旋转数组。这个需要处理一个辅助函数处理n个元素换位置
// 52 ms, 在所有 javascript 提交中击败了98.09%
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotateImage(matrix) {
  // 辅助函数：移动四个数字，这个函数能否直接原原位移动？
  function moveFour(a, b, c, d) {
    return [d, a, b, c];
  }
  const len = matrix.length;
  for (let i = 0; i < len / 2; i++) {
    for (let j = len - i - 2; j >= i; j--) {
      const result = moveFour(matrix[i][j], matrix[j][len - i - 1], matrix[len - i - 1][len - j - 1], matrix[len - j - 1][i]);
      matrix[i][j] = result[0];
      matrix[j][len - i - 1] = result[1];
      matrix[len - i - 1][len - j - 1] = result[2];
      matrix[len - j - 1][i] = result[3];
    }
  }
  return matrix;
}

export { rotateImage };
