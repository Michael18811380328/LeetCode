/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = function(A) {
  // 对于这个矩阵，首先循环一次，将子数组取反
  // 然后计算每一个值的相反数
  // 返回原始的数组
  const len = A.length;
  for (let i = 0; i < len; i++) {
    const item = A[i].reverse();
    const len2 = item.length;
    for (let j = 0; j < len2; j++) {
      A[i][j] = A[i][j] === 1 ? 0 : 1;
    }
  }
  return A;
};

export { flipAndInvertImage };
