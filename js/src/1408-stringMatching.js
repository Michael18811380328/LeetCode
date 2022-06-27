/*
 * @lc app=leetcode.cn id=1408 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
// Your runtime beats 62.5 % of javascript submissions
const stringMatching = function(words) {
  words.sort((a, b) => {
    return a.length > b.length ? -1 : 1;
  });
  const res = [];
  const dict = {};
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < i; j++) {
      if (words[j].includes(words[i])) {
        const key = words[i];
        if (!dict[key]) {
          dict[key] = true;
          res.push(words[i]);
        }
        continue;
      }
    }
  }
  return res;
};
// @lc code=end

export { stringMatching };
