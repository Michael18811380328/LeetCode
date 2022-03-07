/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
// 144 ms, 在所有 JavaScript 提交中击败了19.00%
// 方法不好（频繁操作栈）
// var removeDuplicates = function(S) {
//   if (S.length < 2) return S;
//   let stack = [];
//   for (let i = 0; i < S.length; i++) {
//     let item = S[i];
//     if (stack[stack.length - 1] === item) {
//       stack.pop();
//     } else {
//       stack.push(item);
//     }
//   }
//   return stack.join('');
// };

// 改进1，比较当前情况
// 140 ms , 在所有 JavaScript 提交中击败了 19.61%
// var removeDuplicates = function(S) {
//   if (S.length < 2) return S;
//   let stack = [];
//   for (let i = 0; i < S.length; i++) {
//     let item = S[i];
//     let itemNext = S[i + 1];
//     if (item === itemNext) {
//       i++;
//       continue;
//     }
//     if (stack[stack.length - 1] === item) {
//       stack.pop();
//     } else {
//       stack.push(item);
//     }
//   }
//   return stack.join('');
// };

// 改进2：不使用数组，直接使用字符串模拟栈
// 256 ms, 在所有 JavaScript 提交中击败了12.37%
// 还不如之前的时间呢
const removeDuplicates = function(S) {
  if (S.length < 2) return S;
  let stack = '';
  for (let i = 0; i < S.length; i++) {
    const item = S[i];
    const itemNext = S[i + 1];
    if (item === itemNext) {
      i++;
      continue;
    }
    if (stack[stack.length - 1] === item) {
      stack = stack.slice(0, stack.length - 1);
    } else {
      stack = stack + item;
    }
  }
  return stack;
};

// @lc code=end
