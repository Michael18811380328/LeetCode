/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
// Your runtime beats 85.71 % of javascript submissions
var numEquivDominoPairs = function(dominoes) {
  // 一般的思路：遍历两次数组，时间复杂度较差
  // 遍历一次数组，然后获取键值对，最后遍历一次独享数组，求组合即可
  let dict = {};
  let len = dominoes.length;
  for (let i = 0; i < len ; i++) {
    let item = dominoes[i];
    let min = item[0] > item[1] ? item[1] : item[0];
    let max = item[0] < item[1] ? item[1] : item[0];
    let key = `${min}+${max}`;
    if (dict[key]) {
      dict[key] = dict[key] + 1;
    } else {
      dict[key] = 1;
    }
  }
  let res = 0;
  for (let key in dict) {
    let value = dict[key];
    if (value === 1) continue;
    let times = value * (value - 1) / 2;
    res += times;
  }
  return res;
};
// @lc code=end

