// 54-给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 思路一：根据定义计算
// 设置一个计数器，1234 然后求这个数除以4的余数。
// 如果余数是1，那么取出第一行，并直接concat到结果数组
// 如果余数是3，取出最后一行，reverse + concat 到结果数组
// 如果余数是2，0 循环数组，然后取出第一个或者最后一个数字，放入新的数组中
// 循环，直到数组变成空的

// 72 ms, 在所有 javascript 提交中击败了30.19%
function spiralOrder(matrix) {
  if (matrix.length === 0) return [];
  if (matrix.length === 1) return matrix[0];
  let timer = 1;
  const result = [];
  while (matrix.length > 0) {
    const remainder = timer % 4;
    if (remainder === 1) {
      const tmp = matrix.shift(1);
      result.push(...tmp);
      timer++;
    } else if (remainder === 3) {
      const tmp = matrix.pop(1);
      result.push(...tmp.reverse());
      timer++;
    } else if (remainder === 2) {
      for (let i = 0; i < matrix.length; i++) {
        const tmp = matrix[i].pop(1);
        if (tmp) result.push(tmp);
      }
      timer++;
    } else if (remainder === 0) {
      const temResult = [];
      for (let i = 0; i < matrix.length; i++) {
        const tmp = matrix[i].shift(1);
        if (tmp) temResult.push(tmp);
      }
      result.push(...temResult.reverse());
      timer++;
    }
  }
  return result;
}

export { spiralOrder };
