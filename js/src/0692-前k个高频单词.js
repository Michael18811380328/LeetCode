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
var topKFrequent = function(words, k) {
  let dict = {};
  const len = words.length;
  for (let i = 0; i < len; i++) {
    let key = words[i];
    dict[key] ? dict[key]++ : dict[key] = 1;
  }
  let arr = [];
  for (let key in dict) {
    let times = dict[key];
    let item = {key, times};
    arr.push(item);
  }
  // console.log(arr);
  arr.sort((a, b) => {
    if (a.times !== b.times) {
      return a.times > b.times ? -1 : 1;
    }
    else {
      return a.key > b.key ? 1 : -1;
    }
  });
  // console.log(arr);
  return arr.slice(0, k).map(item => item.key);
};
// @lc code=end

