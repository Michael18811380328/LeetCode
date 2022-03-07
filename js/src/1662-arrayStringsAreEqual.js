/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
// 72 ms
// , 在所有 JavaScript 提交中击败了
// 94.90%
// 的用户
const arrayStringsAreEqual = function(word1, word2) {
  if (word1[0][0] !== word2[0][0]) return false;
  return word1.join('') === word2.join('');
};
