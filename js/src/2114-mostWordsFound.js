/**
 * @param {string[]} sentences
 * @return {number}
 */
// [2114] 句子中的最多单词数
// 判断字符串中最多的空格，然后加1
// Your runtime beats 48.14 % of javascript submissions
const mostWordsFound = function(sentences) {
  const getLen = (str) => {
    let num = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        num++;
      }
    }
    return num + 1;
  };
  let max = 1;
  for (let i = 0; i < sentences.length; i++) {
    const curr = getLen(sentences[i]);
    max = curr > max ? curr : max;
  }
  return max;
};

export { mostWordsFound };
