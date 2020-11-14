/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */
// 双指针，分别指向两个字符串的位置
// 难点：输入的重复的可以忽略，但是原来的重复的需要处理
// ttom => tommm 这是不正确的
// 注意：空格也算名字'mike   ' 需要考虑后面的空格，空格当做字符处理就行
// @lc code=start
var isLongPressedName = function(name, typed) {
  if (name === typed) {
    return true;
  }
  if (name.length > typed.length) {
    return false;
  }
  let p1 = 0;
  let p2 = 0;
  const nameLen = name.length;
  while (p1 <= nameLen - 1) {
    // 当前字符串不等于
    if (name[p1] !== typed[p2]) {
        return false;
    }
    else if (name[p1] === typed[p2]) {
        // 当前字符串相等
        // name 重复
        while (name[p1] === name[p1 + 1] && typed[p2] === typed[p2 + 1]) {
            p1++;
            p2++;
        }
        while (name[p1] !== name[p1 + 1] && typed[p2] === typed[p2 + 1]) {
            p2++;
        }
        p1++;
        p2++;
    }
  }
  // 如果typed还有剩余，那么应该都是name[nameLen - 1]的字符
  const lastStr = name[nameLen - 1]
  while (p2 <= typed.length) {
    if (typed[p2] !== lastStr) {
      return false;
    }
    p2++;
  }
  return true;
};

// false
// "alex"
// "alexxr"

// "alex"
// "aaleex"
// true

// @lc code=end
