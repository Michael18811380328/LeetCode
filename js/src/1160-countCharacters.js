/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// 
// 256 ms
// , 在所有 JavaScript 提交中击败了
// 36.70%
// 的用户
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
// 全局定义字典，存放字符和出现的数量
// 全局定义字典，存放字符和出现的数量
var countCharacters = function(words, chars) {
  if (words.length === 0 || chars.length === 0) {
    return 0;
  }
  let dict = {};
  // 获取目标字典和数量
  for (let i = 0; i < chars.length; i++) {
    let key = chars[i];
    if (dict[key]) {
      dict[key]++;
    } else {
      dict[key] = 1;
    }
  }
  // 获取一个单词的长度
  var getLen = (word) => {
    let obj = {};
    for (let j = 0; j < word.length; j++) {
      let key = word[j];
      // 如果当前字符存在于索引中
      if (dict[key]) {
        if (!obj[key]) {
          obj[key] = 1;
        }
        else if (obj[key] >= dict[key]) {
          // 如果当前的出现的次数大于字典中的次数，直接返回0
          return 0
        }
        else {
          obj[key]++;
        }
      } else {
        // 如果不存在与索引中，直接返回0
        return 0;
      }
    }
    return word.length;
  }
  // 遍历每一个单词，看是否满足条件，然后计算结果
  let result = 0;
  let len = words.length
  for (let i = 0; i < len; i++) {
    result += getLen(words[i]);
  }
  return result;
};
