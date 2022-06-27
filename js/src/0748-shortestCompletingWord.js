/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
// 116 ms
// , 在所有 JavaScript 提交中击败了
// 36.96%
// 的用户
const shortestCompletingWord = function(licensePlate, words) {
  // 标准化字典
  // 去掉数字和空格，全部变成小写，然后转换成一个数组
  const license = licensePlate.replace(/\s/g, '').replace(/[0-9]/g, '').toLowerCase();
  const len = license.length;
  // 这里应该是一个字典
  const Dict = {};
  for (let i = 0; i < len; i++) {
    const key = license[i];
    if (!Dict[key]) {
      Dict[key] = 1;
    } else {
      Dict[key]++;
    }
  }
  // 然后循环words(先从长度过滤)
  // 然后返回目标的字符串
  let res;
  for (let i = 0; i < words.length; i++) {
    const item = words[i];
    // 如果当前单词的长度小于字典，那么继续循环
    if (item.length < len || (res && item.length >= res.length)) {
      continue;
    }
    if (judge(item, Dict)) {
      // return item;
      // 这里需要获取长度最短的
      if (!res) {
        res = item;
      } else {
        res = item.length < res.length ? item : res;
      }
    }
  }
  return res;
};

const judge = function(str, Dict) {
  const dict = { ...Dict };
  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    if (dict[s] === 1) {
      delete (dict[s]);
    } else if (dict[s]) {
      dict[s] = dict[s] - 1;
    }
  }
  return Object.keys(dict).length === 0;
};
// @lc code=end
