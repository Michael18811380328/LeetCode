/**
 * [2185] 统计包含给定前缀的字符串
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 * Your runtime beats 87.37 % of javascript submissions
 */
const prefixCount = function(words, pref) {
  let nums = 0;
  words.forEach((word) => {
    if (word.indexOf(pref) === 0) {
      nums++;
    }
  });
  return nums;
};

export { prefixCount };
