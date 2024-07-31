// https://leetcode.cn/problems/snail-traversal/
/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  // 和其他题目类似，把一维数组转换成 Z 自行二维数组输出
  // 注意点：转换前后的 index 怎么处理；计数列反向填充
  // 1、处理特殊情况
  const arrLen = this.length;
  if (arrLen !== rowsCount * colsCount) {
    return [];
  }
  // 2、新建目标空数组
  let matrix = new Array(rowsCount).fill(1);
  matrix = matrix.map(() => new Array(colsCount));
  // 3、循环原始数组，根据 index 计算出新的 matrix 的 xy 值，然后填入即可
  for (let i = 0; i < arrLen; i++) {
    const colIndex = Math.floor(i / rowsCount);
    const rowIndex = (i - colIndex * rowsCount);
    // 偶数列正向填充，奇数列反向填充
    if (colIndex % 2 === 1) {
      // 反向
      matrix[rowsCount - 1 - rowIndex][colIndex] = this[i];
    } else {
      // 正向
      matrix[rowIndex][colIndex] = this[i];
    }
  }
  return matrix;
};

/**
* const arr = [1,2,3,4];
* arr.snail(1,4); // [[1,2,3,4]]
*/
