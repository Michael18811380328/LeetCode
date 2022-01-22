/*
 * @lc app=leetcode.cn id=2047 lang=javascript
 *
 * [2047] 句子中的有效单词数
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {number}
 */
// 辅助函数（判断字符串是否是token）
// Your runtime beats 33.48 % of javascript submissions
let checkStr = (str) => {
  if (str.length === 0) {
    return false;
  }
  // 1 仅由小写字母、连字符和/或标点（不含数字）。如果有数字，不满足
  const number_reg = new RegExp(/[0-9]/, 'g');
  if (number_reg.test(str)) {
    return false;
  }

  // 2. 如果存在连字符
  if (str.indexOf('-') > -1) {
    // 2.1 如果存在多个连字符，不满足
    if (str.indexOf('-') !== str.lastIndexOf('-')) {
      return false;
    }
    // 2.2 如果存在一个连字符，连字符两侧应当都存在小写字母（"a-b" 是一个有效单词，但 "-ab" 和 "ab-" 不是有效单词）。
    const index = str.indexOf('-');
    // 2.3 如果连字符是第一个或者最后一个，都不是有效的
    if (index === 0 || index === str.length - 1) {
      return false;
    }
    // const small_str_reg = new RegExp(/[a-z]/, 'g');
    // 这里不能提取公共变量
    if (!new RegExp(/[a-z]/, 'g').test(str[index - 1]) || !new RegExp(/[a-z]/, 'g').test(str[index + 1])) {
      return false;
    }
  }

  // 3 判断标点符号：至多一个 标点符号。'!'、'.' 和 ','
  // 如果存在，标点符号应当位于 token 的末尾。
  // 如果结尾是标点符号，那么直接删除，然后判断剩余部分是否有标点符号
  const last = str[str.length - 1];
  if (last === '!' || last === '.' || last === ',') {
    str = str.slice(0, str.length - 1);
  }
  const comma_reg = new RegExp(/[\!\.\,]/, 'g');
  if (comma_reg.test(str)) {
    return false;
  }
  return true;
}

// 思路：把句子转换成字符串数组，然后判断每一个字符串是否满足
var countValidWords = function(sentence) {
  let arr = sentence.split(' ');
  let times = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i], checkStr(arr[i]));
    if (checkStr(arr[i])) {
      // console.log(arr[i]);
      times++;
    }
  }
  return times;
};

// console.log(countValidWords("-") === 0)
// console.log(countValidWords('pencil-sharpener.') === 1)
// console.log(countValidWords('cat and  dog') === 3)
// console.log(countValidWords('!this  1-s b8d!') === 0)
// console.log(countValidWords('alice and  bob are playing stone-game10') === 5)
// @lc code=end

