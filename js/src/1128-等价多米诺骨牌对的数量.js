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
const numEquivDominoPairs = function(dominoes) {
  // 一般的思路：遍历两次数组，时间复杂度较差
  // 遍历一次数组，然后获取键值对，最后遍历一次独享数组，求组合即可
  const dict = {};
  const len = dominoes.length;
  for (let i = 0; i < len; i++) {
    const item = dominoes[i];
    const min = item[0] > item[1] ? item[1] : item[0];
    const max = item[0] < item[1] ? item[1] : item[0];
    const key = `${min}+${max}`;
    if (dict[key]) {
      dict[key] = dict[key] + 1;
    } else {
      dict[key] = 1;
    }
  }
  let res = 0;
  for (const key in dict) {
    const value = dict[key];
    if (value === 1) continue;
    const times = value * (value - 1) / 2;
    res += times;
  }
  return res;
};
// @lc code=end
