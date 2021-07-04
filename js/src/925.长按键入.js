/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
// Your runtime beats 80.59 % of javascript submissions
var isLongPressedName = function(name, typed) {
  if (name === typed) {
    return true;
  } else if (name.length >= typed.length) {
    return false;
  }
  let pointer = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === name[pointer]) {
      pointer++;
    } else {
      // 如果不等于的话
      if (i === 0) return false;
      if (typed[i] === name[pointer - 1]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return (pointer === name.length);
};
// @lc code=end

