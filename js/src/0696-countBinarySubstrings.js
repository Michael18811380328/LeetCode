/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 108 ms
// , 在所有 JavaScript 提交中击败了
// 53.97%
// 的用户
const countBinarySubstrings = function(s) {
  // 获取第一个进制的次数
  // 获取第二个进制的次数
  // 然后取最小值
  let time1 = 0;
  let current1 = null;
  let time2 = 0;
  let current2 = null;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (current1 === null) {
      current1 = item;
      time1++;
    } else if (item === current1 && current2 === null) {
      time1++;
    } else if (current1 !== null && current2 === null) {
      current2 = item;
      time2++;
    } else if (item === current2) {
      time2++;
    } else {
      // item === current1 && time1 > 0 && time2 > 0
      const min = Math.min(time1, time2);
      res += min;
      current1 = current2;
      time1 = time2;
      current2 = item;
      time2 = 1;
    }
    console.log(current1, time1, current2, time2, res);
  }
  if (current2) {
    const min = Math.min(time1, time2);
    res += min;
  }
  return res;
};
// @lc code=end
