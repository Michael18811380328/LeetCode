/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 * [1207] 独一无二的出现次数
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const len = arr.length;
  if (len < 2) {
    return true;
  }
  let dict = {};
  for (let i = 0; i < len; i++) {
    let item = arr[i];
    if (dict[item]) {
      dict[item]++;
    } else {
      dict[item] = 1;
    }
  }
  let tmp = [];
  for (let key in dict) {
    let value = dict[key];
    tmp.push(value);
  }
  return tmp.length === (Array.from(new Set(tmp))).length;
};


