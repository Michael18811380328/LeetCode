// 58. 最后一个单词的长度
// 如果不存在最后一个单词，请返回 0
// 一个单词是指由字母组成，但不包含任何空格的字符串。
// 特殊的可能是一串数字

/**
 * @param {string} s
 * @return {number}
 */
// 60 ms , 在所有 javascript 提交中击败了 90.44%
function lengthOfLastWord(s) {
  s = s.trim();
  const pos = s.lastIndexOf(' ');
  return pos === -1 ? s.length : s.length - pos - 1;
}

export { lengthOfLastWord };
