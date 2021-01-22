/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 276/289 cases passed (N/A)
var removeDuplicateLetters = function(s) {
  // 从后向前遍历字符串
  // 把遍历到的放在字典中
  // 如果有重复的，那么比较这两个重复的，看去除哪个后，字典序比较小
  // 然后继续放置
  let dict = {};
  let stack = [];
  while (s.length > 0) {
    let last = s[s.length - 1];
    // console.log(dict);
    if (!dict[last]) {
      dict[last] = true;
      stack.unshift(last);
    } else {
      // 已经有，那么判断和第一个比是哪个大
      // 如果当前的小于第一个，那么删除原来第一个，增加到栈中
      // 判断条件不正确
      let front = s.substring(0, s.length - 1);
      if ((front + last) < (front + stack[0])) {
        let index = stack.indexOf(last);
        stack.splice(index, 1);
        stack.unshift(last);
      }
    }
    s = s.substring(0, s.length - 1);
  }
  return stack.join('');
};
// 现在是局部最优解，不是全局最优解
// 需要优化一下，变成全局最优解
// @lc code=end

