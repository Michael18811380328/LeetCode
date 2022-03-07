/*
 * @lc app=leetcode.cn id=890 lang=javascript
 *
 * [890] 查找和替换模式
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
// 思路一：根据定义暴力法
// Your runtime beats 23.81 % of javascript submissions
const findAndReplacePattern = function(words, pattern) {
  // 先把 pattern 转换成一个字典
  // 然后看每一个字符串是否满足字典即可
  const dict = {};
  const len = pattern.length;
  for (let i = 0; i < len; i++) {
    const key = pattern[i];
    if (!dict[key]) dict[key] = [];
    dict[key].push(i);
  }
  const keyLen = Object.keys(dict).length;
  const keyTimes = [];
  for (const key in dict) {
    const value = dict[key];
    keyTimes.push(value);
  }
  keyTimes.sort((a, b) => a - b);
  // console.log(keyTimes);

  // 辅助函数：判断是否相同模式
  // 现在这样需要获取全部的长度，性能不好
  const judge = function(str) {
    const dict1 = {};
    for (let i = 0; i < len; i++) {
      const key = str[i];
      if (!dict1[key]) dict1[key] = [];
      dict1[key].push(i);
    }
    if (Object.keys(dict1).length !== keyLen) {
      return false;
    }
    const keyTimes1 = [];
    for (const key in dict1) {
      const value = dict1[key];
      keyTimes1.push(value);
    }
    keyTimes1.sort((a, b) => a - b);
    // 这样可以实现，但是性能不好（获取key再排序等等）
    // console.log(keyTimes1);
    for (let i = 0; i < keyLen; i++) {
      if (String(keyTimes1[i]) !== String(keyTimes[i])) {
        return false;
      }
    }
    return true;
  };
  // 循环字符串
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const item = words[i];
    if (item.length !== len) {
      continue;
    }
    if (judge(item)) {
      result.push(item);
    }
  }
  return result;
};

// 思路二：先获取模式，然后循环判断每一个字符，如果相同位置是相同的字符，那么就满足要求
// [[0], [1,2,3]]

// @lc code=end
