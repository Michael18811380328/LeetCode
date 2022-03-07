/*
 * @lc app=leetcode.cn id=1455 lang=javascript
 *
 * [1455] 检查单词是否为句中其他单词的前缀
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
// 80 ms
// , 在所有 JavaScript 提交中击败了
// 72.88%

const isPrefixOfWord = function(sentence, searchWord) {
  if (sentence.length < searchWord.length) {
    return -1;
  }
  const index = sentence.indexOf(searchWord);
  // 没有找到单词，或者找到的是第一个单词
  if (index === -1) {
    return -1;
  } else if (index === 0) {
    return 1;
  }
  // 找到的不是第一个单词，那么变成数组计算
  const arr = sentence.split(' ');
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i].length + 1;
    if (sum > index && searchWord === arr[i].slice(0, searchWord.length)) {
      return i + 1;
    }
  }
  return -1;
};
// @lc code=end
