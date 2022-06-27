/*
 * @lc app=leetcode.cn id=1967 lang=javascript
 *
 * [1967] 作为子字符串出现在单词中的字符串数目
 */

// @lc code=start
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
// 思路1：循环数组，判断字符串中是否包含子字符串
// 字符串长度比较短，性能可以满足
// Your runtime beats 33.82 % of javascript submissions
// const numOfStrings = function(patterns, word) {
//   let result = 0;
//   for (let i = 0; i < patterns.length; i++) {
//     if (word.includes(patterns[i])) {
//       result++;
//     }
//   }
//   return result;
// };

// 思路二：优化内部查找
// 优化，因为字符串中可能存在重复的，那么遍历时，可以把重复的记录下
// 这样可以避免每一个都查找
// Your runtime beats 92.65 % of javascript submissions
const numOfStrings = function(patterns, word) {
  let result = 0;
  const dict = {};
  for (let i = 0; i < patterns.length; i++) {
    // 先拿到当前的字符串
    const key = patterns[i];
    // 先判断缓冲中是否存在
    if (dict[key] === true) {
      result++;
    } else if (dict[key] === false) {
      continue;
    }
    // 如果缓存没有，再查找是否是子串，并放在缓存中
    else if (word.includes(key)) {
      dict[key] = true;
      result++;
    } else {
      dict[key] = false;
    }
  }
  return result;
};
// @lc code=end
