/*
 * @lc app=leetcode.cn id=2000 lang=javascript
 *
 * [2000] 反转单词前缀
 */

// 给你一个下标从 0 开始的字符串 word 和一个字符 ch 。找出 ch 第一次出现的下标 i ，反转 word 中从下标 0 开始、直到下标 i 结束（含下标 i ）的那段字符。如果 word 中不存在字符 ch ，则无需进行任何操作。

// 例如，如果 word = "abcdefd" 且 ch = "d" ，那么你应该 反转 从下标 0 开始、直到下标 3 结束（含下标 3 ）。结果字符串将会是 "dcbaefd" 。
// 返回 结果字符串 。
// @lc code=start
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
// 题目简单，主要是字符串遍历和反转
const reversePrefix = function(word, ch) {
  // Your runtime beats 55.32 % of javascript submissions
  const index = word.indexOf(ch);
  if (index <= 0) return word;
  const len = index + ch.length;
  let left = word.slice(0, len);
  // 易错点是字符串的反转（转换成数组后反转）
  left = left.split('').reverse().join('');
  const right = word.slice(len);
  return left + right;
};
// @lc code=end
