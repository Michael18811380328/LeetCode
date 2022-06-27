/*
 *[661] 图片平滑器
 */
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
// 思路1：
// 直接新建一个数组，然后计算每个节点的灰度
// 这样需要完全遍历一次新数组，性能一般，消耗内存
// 暂时没有更好的思路
const imageSmoother = function(M) {
  const getGray = function(i, j) {
    // 获取当前节点
    // 获取周边节点
    // 然后返回平均值
    let sum = M[i][j];
    let index = 1;
    if (M[i]) {
      if (M[i][j - 1] > -1) {
        sum += M[i][j - 1];
        index++;
      }
      if (M[i][j + 1] > -1) {
        sum += M[i][j + 1];
        index++;
      }
    }
    if (M[i - 1]) {
      sum += M[i - 1][j];
      index++;
      if (M[i - 1][j - 1] > -1) {
        sum += M[i - 1][j - 1];
        index++;
      }
      if (M[i - 1][j + 1] > -1) {
        sum += M[i - 1][j + 1];
        index++;
      }
    }
    if (M[i + 1]) {
      sum += M[i + 1][j];
      index++;
      if (M[i + 1][j - 1] > -1) {
        sum += M[i + 1][j - 1];
        index++;
      }
      if (M[i + 1][j + 1] > -1) {
        sum += M[i + 1][j + 1];
        index++;
      }
    }
    return Math.floor(sum / index);
  };
  // 计算M的情况
  const matrix = [];
  for (let i = 0; i < M.length; i++) {
    const arr = [];
    const len = M[i].length;
    for (let j = 0; j < len; j++) {
      const current = getGray(i, j);
      arr.push(current);
    }
    matrix.push(arr);
  }
  return matrix;
};

export { imageSmoother };
