/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// Your runtime beats 84.8 % of javascript submissions
const topKFrequent = function(words, k) {
  const dict = {};
  const len = words.length;
  for (let i = 0; i < len; i++) {
    const key = words[i];
    dict[key] ? dict[key]++ : dict[key] = 1;
  }
  const arr = [];
  for (const key in dict) {
    const times = dict[key];
    const item = { key, times };
    arr.push(item);
  }
  // console.log(arr);
  arr.sort((a, b) => {
    if (a.times !== b.times) {
      return a.times > b.times ? -1 : 1;
    } else {
      return a.key > b.key ? 1 : -1;
    }
  });
  // console.log(arr);
  return arr.slice(0, k).map((item) => item.key);
};
// @lc code=end

export { topKFrequent };
