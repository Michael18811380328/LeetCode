/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  const len = arr.length;
  if (len === 0) {
    return [];
  }
  let arr2 = arr.slice(0);
  arr2.sort((a, b) => a - b);
  let dict = {};
  let index = 1;
  for (let i = 0; i < arr2.length; i++) {
    let key = arr2[i];
    if (!dict[key]) {
      dict[key] = index;
      index++;
    }
  }
  let result = [];
  for (let i = 0; i < len; i++) {
    let item = arr[i];
    let value = dict[item];
    result.push(value);
  }
  return result;
};
// @lc code=end

