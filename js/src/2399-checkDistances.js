/*
 * @lc app=leetcode.cn id=2399 lang=javascript
 * Your runtime beats 80.72 % of javascript submissions
 * [2399] 检查相同字母间的距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
const checkDistances = function(s, distance) {
  const dict = {};
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    // 把第一次出现的位置，记录在字典中
    if (!dict[curr] && dict[curr] !== 0) {
      dict[curr] = i;
    } else {
      // 比较字典中的位置和实际距离中的位置
      if (i - dict[curr] - 1 !== distance[curr.charCodeAt(0) - 97]) {
        return false;
      }
    }
  }
  return true;
};

// console.log(checkDistances("abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]) === true)
// console.log(checkDistances("aa", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])=== false)
// @lc code=end
export { checkDistances };
