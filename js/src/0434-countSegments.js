// 434. 字符串中的单词数
// 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。
// 请注意，你可以假定字符串里不包括任何不可打印的字符。

// 示例:
// 输入: "Hello, my name is John"
// 输出: 5
// 解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。
// 80 ms, 在所有 JavaScript 提交中击败了70.48%
/**
 * @param {string} s
 * @return {number}
 */
// 首先把首尾的空格去掉' Mike '
// 把两个连续的空格去掉（循环去掉）‘hello      Mike’
// 然后可以把字符串转换成数组，计算数组的长度，需要过滤空元素
// 或者循环字符串，直接计算空格的字符，然后
const countSegments = function(s) {
  const str = s.trim();
  if (str.length === 0) {
    return 0;
  }
  if (str.indexOf(' ') === -1) {
    return 1;
  }
  const arr = str.split(' ').filter((item) => item !== '');
  return arr.length;
};

export { countSegments };
