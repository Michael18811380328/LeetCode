/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
//  68 ms, 在所有 JavaScript 提交中击败了 99.31%
var freqAlphabets = function(s) {
  let res = '', cur, curStr;
  // 基本思路，通过API计算出对应的字符，或者使用一个字典存储对应的字符
  // 'a' === String.fromCharCode(97);
  while (s.length > 0) {
    if (s[2] === '#') {
      // 第二个规则
      cur = Number(s[0] + s[1]);
      curStr = String.fromCharCode(cur + 96);
      // console.log(curStr);
      res += curStr;
      s = s.slice(3);
    }
    else {
      // 第一个规则
      cur = Number(s[0]);
      curStr = String.fromCharCode(cur + 96);
      res += curStr;
      // console.log(curStr);
      s = s.slice(1);
    }
    // console.log(s);
  }
  return res;
};
// @lc code=end

