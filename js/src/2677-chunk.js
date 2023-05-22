/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
// 分块数组，简单
const chunk = function(arr, size) {
  if (arr.length === 0) return [];
  const matrix = [];
  while (arr.length > 0) {
    const tmp = arr.splice(0, size);
    matrix.push(tmp);
  }
  return matrix;
};

export { chunk };
