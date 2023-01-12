/**
 * [2124] 检查是否所有 A 都在 B 之前
 * 找到第一个B，找到最后一个A，比较索引即可
 * Your runtime beats 6.01 % of javascript submissions
 * @param {string} s
 * @return {boolean}
 */
const checkString = function(s) {
  const indexA = s.lastIndexOf('a');
  if (indexA === -1) {
    return true;
  }
  const indexB = s.indexOf('b');
  if (indexB === -1) {
    return true;
  }
  return indexA < indexB;
};

export { checkString };
