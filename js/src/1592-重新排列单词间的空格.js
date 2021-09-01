/*
 * @lc app=leetcode.cn id=1592 lang=javascript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
// 76 ms
// , 在所有 JavaScript 提交中击败了
// 83.41%
// 的用户
var reorderSpaces = function(text) {
  if (text.indexOf(' ') === -1) return text;
  const len = text.length;
  let spaceLen = 0;
  for (let i = 0; i < len; i++) {
    if (text[i] === ' ') spaceLen++;
  }
  let arr = text.split(' ').filter(item => item.length > 0);
  if (arr.length === 1) {
    let finalStr = '';
    for (let i = 0; i < spaceLen; i++) {
      finalStr += ' ';
    }
    return arr[0] + finalStr;
  }
  const len2 = arr.length - 1;
  const finalNum = spaceLen % len2;
  let finalStr = '';
  for (let i = 0; i < finalNum; i++) {
    finalStr += ' ';
  }
  const midNum = (spaceLen - finalNum) / len2;
  let midStr = '';
  for (let i = 0; i < midNum; i++) {
    midStr += ' ';
  }
  return arr.join(midStr) + finalStr;
};
// @lc code=end

