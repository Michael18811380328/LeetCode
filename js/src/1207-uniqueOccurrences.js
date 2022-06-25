/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 * [1207] 独一无二的出现次数
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
  const len = arr.length;
  if (len < 2) {
    return true;
  }
  const dict = {};
  for (let i = 0; i < len; i++) {
    const item = arr[i];
    if (dict[item]) {
      dict[item]++;
    } else {
      dict[item] = 1;
    }
  }
  const tmp = [];
  for (const key in dict) {
    const value = dict[key];
    tmp.push(value);
  }
  return tmp.length === (Array.from(new Set(tmp))).length;
};

export { uniqueOccurrences };
