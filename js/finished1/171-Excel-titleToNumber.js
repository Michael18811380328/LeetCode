// 171 给定一个Excel表格中的列名称，返回其相应的列序号。
// 命名原理：如果是一个字符，那么直接返回对应的字母表的位置
// 字符串需要考虑大于2的情况，循环实现
// 76ms, 97.83%
/**
 * @param {string} s
 * @return {number}
 */
function titleToNumber(s) {
  let result = 0;
  while (s.length > 0) {
    result = result * 26 + (s.charCodeAt(0) - 64);
    s = s.slice(1, s.length);
  }
  return result;
}

export { titleToNumber };
