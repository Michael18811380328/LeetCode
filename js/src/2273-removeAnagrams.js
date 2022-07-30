/*
 * @lc app=leetcode.cn id=2273 lang=javascript
 *
 * [2273] 移除字母异位词后的结果数组
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 * Your runtime beats 69.72 % of javascript submissions
 */
const removeAnagrams = function(words) {
  const getStr = (str) => {
    return str.split('').sort().join('');
  };
  const words2 = words.map((word) => getStr(word));
  const dict = {};
  for (let i = 1; i < words2.length; i++) {
    if (words2[i] === words2[i - 1]) {
      dict[i] = true;
    }
  }
  return words.filter((item, index) => {
    return !dict[index];
  });
};
// console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"])) // ["abba","cd"]
// @lc code=end

export { removeAnagrams };
