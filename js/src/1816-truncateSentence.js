/*
 * [1816] 截断句子：给定一个句子S（字符串，单词加空格）和一个正数K
 * 截取前边几个单词部分
 */

// 难度：简单
// 考点：字符串和数组基本操作

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 思路一：遍历字符串
// 96 ms, 在所有 JavaScript 提交中击败了16.61%
var truncateSentence = function(s, k) {
  const len = s.length;
  let remain = k;
  for (let i = 0; i < len; i++) {
    if (s[i] === ' ') {
      remain--;
    }
    if (remain <= 0) {
      return s.slice(0, i);
    }
  }
  return s;
};

// 改进版本
// 96 ms, 在所有 JavaScript 提交中击败了18.81%，还可以提升很大
var truncateSentence = function(s, k) {
  let K = k;
  let position = 0;
  while (K > 0) {
   let index = s.indexOf(' ', position);
    if (index > 0) {
      position = index + 1;
      K--;
    }
    if (index < 0) {
      return s;
    }
  }
  return s.slice(0, position - 1);
};

// 思路2：转换成数组
// 88 ms, 在所有 JavaScript 提交中击败了40.79%
var truncateSentence2 = function(s, k) {
  let sList = s.split(' ');
  return sList.slice(0, k).join(' ');
};
