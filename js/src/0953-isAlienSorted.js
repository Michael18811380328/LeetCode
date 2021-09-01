/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
// 88 ms
// , 在所有 JavaScript 提交中击败了
// 50.72%
// 的用户
var isAlienSorted = function(words, order) {
  // 写一个辅助函数，判断两个单词是否符合顺序
  var checkOrder = function(a, b) {
    // console.log(a, b);
    const aLen = a.length;
    for (let i = 0; i < aLen; i++) {
      // 其中 '∅' 是空白字符
      if (!b[i]) return false;      
      let orderB = order.indexOf(b[i]);
      let orderA = order.indexOf(a[i]);
      if (orderA < orderB) {
        return true;
      }
      else if (orderA > orderB) {
        return false;
      }
      else {
        // orderA === orderB
        continue;
      }
    }
    return true;
  }
  // 循环数组，遍历每一个元素和后一个元素
  let len = words.length;
  if (len < 2) return true;
  for (let i = 1; i < len; i++) {
    let current = words[i];
    let before = words[i - 1];
    let res = checkOrder(before, current);
    if (res === false) {
      return false;
    }
  }
  return true;
};
// @lc code=end

