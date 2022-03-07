/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 * [1021] 删除最外层的括号
 * 考点：字符串匹配
 */

/**
 * @param {string} S
 * @return {string}
 */

// 1、常规思路实现：
// 92 ms, 在所有 JavaScript 提交中击败了53.46%
const removeOuterParentheses = function(S) {
  // 遍历字符串，然后把字符放在数组中，记录开始和结束的位置
  let start = 0;
  const arr = [];
  let res = '';
  // 这个可以直接放在循环里
  // 也不需要 arr 数组，直接记录个数就行
  arr.push(S[0]);
  for (let i = 1; i < S.length; i++) {
    if (S[i] === '(') {
      arr.push(S[i]);
    } else {
      arr.pop();
      // 如果开始不等于结束，但是数组是空的，那么可以提取这个部分
      if (arr.length === 0) {
        const end = i;
        // 然后去掉括号加起来即可
        const inner = S.slice(start + 1, end);
        res += inner;
        start = i + 1;
      }
    }
  }
  return res;
};

// 2、优化后，减少循环中数组的操作，只进行一次字符串循环
// 68 ms, 在所有 JavaScript 提交中击败了94.66%
const removeOuterParentheses = function(S) {
  let start = 0; // 记录字符串开始的位置
  let timer = 0; // 记录左括号的个数
  let res = ''; // 存储临时的结果
  timer = 1;
  for (let i = 1; i < S.length; i++) {
    if (S[i] === '(') {
      timer++;
    } else {
      timer--;
      if (timer === 0) {
        const end = i;
        const inner = S.slice(start + 1, end);
        res += inner;
        start = i + 1;
      }
    }
  }
  return res;
};
