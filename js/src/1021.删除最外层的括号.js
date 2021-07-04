/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
// 92 ms
// , 在所有 JavaScript 提交中击败了
// 53.46%
// 的用户
var removeOuterParentheses = function(S) {
  // 遍历字符串，然后把字符放在数组中，记录开始和结束的位置
  let start = 0;
  let arr = [];
  let res = '';
  arr.push(S[0]);
  for (let i = 1; i < S.length; i++) {
    if (S[i] === '(') {
      arr.push(S[i])
    } else {
      arr.pop();
      // 如果开始不等于结束，但是数组是空的，那么可以提取这个部分
      if (arr.length === 0) {
        let end = i;
        // 然后去掉括号加起来即可
        let inner = S.slice(start + 1, end);
        console.log(inner);
        res += inner;
        start = i + 1;
      }
    }
  }
  return res;
};
// @lc code=end

