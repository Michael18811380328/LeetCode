/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
// 100 ms
// , 在所有 JavaScript 提交中击败了
// 38.28%
// 的用户
var mostCommonWord = function(paragraph, banned) {
  // 字母、空格和下列标点符号!?',;.
  // 使用正则将特殊符号变成空格
  let para = paragraph.replace(/[\!\?\'\,\;\.]/g, ' ').trim();
  // 把大写转换成小写
  para = para.toLowerCase();
  // 然后拆分成数组
  let paraArr = para.split(' ');
  let dict = {};
  // 然后统计不同单词出现的数量（哈希表记录）
  for (let i = 0; i < paraArr.length; i++) {
    let key = paraArr[i];
    if (key === '') continue;
    if (dict[key]) {
      dict[key]++;
    } else {
      dict[key] = 1;
    }
  }
  // 遍历禁用表，去掉哈希表禁止单词
  for (let j = 0; j < banned.length; j++) {
    let item = banned[j];
    if (dict[item]) {
      delete dict[item];
    }
  }
  // 遍历哈希表返回当前出现最多的单词
  let time = Math.max(...Object.values(dict));
  for (let key in dict) {
    if (dict[key] === time) {
      return key;
    }
  }
};
// @lc code=end

