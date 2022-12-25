/*
 * @lc app=leetcode.cn id=2399 lang=javascript
 * Your runtime beats 80.72 % of javascript submissions
 * [2399] 检查相同字母间的距离
 */
/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
const checkDistances = function(s, distance) {
  const dict = {};
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (!dict[curr] && dict[curr] !== 0) {
      dict[curr] = i;
    } else {
      if (i - dict[curr] - 1 !== distance[curr.charCodeAt(0) - 97]) {
        return false;
      }
    }
  }
  return true;
};

export { checkDistances };
