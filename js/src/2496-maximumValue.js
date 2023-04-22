/**
 * @param {string[]} strs
 * @return {number}
 */
// 一个由字母和数字组成的字符串的 值 定义如下：
// 如果字符串 只 包含数字，那么值为该字符串在 10 进制下的所表示的数字。
// 否则，值为字符串的 长度 。
// 给你一个字符串数组 strs ，每个字符串都只由字母和数字组成，请你返回 strs 中字符串的 最大值 。
const maximumValue = function(strs) {
  let max = 0;
  for (let i = 0; i < strs.length; i++) {
    if (Number.isNaN(strs[i])) {
      const len = strs[i].length;
      max = Math.max(max, len);
    } else {
      const res = parseInt(strs[i], 10);
      max = Math.max(max, res);
    }
  }
  return max;
};

export { maximumValue };
