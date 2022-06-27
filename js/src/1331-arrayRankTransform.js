/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = function(arr) {
  const len = arr.length;
  if (len === 0) {
    return [];
  }
  const arr2 = arr.slice(0);
  arr2.sort((a, b) => a - b);
  const dict = {};
  let index = 1;
  for (let i = 0; i < arr2.length; i++) {
    const key = arr2[i];
    if (!dict[key]) {
      dict[key] = index;
      index++;
    }
  }
  const result = [];
  for (let i = 0; i < len; i++) {
    const item = arr[i];
    const value = dict[item];
    result.push(value);
  }
  return result;
};

export { arrayRankTransform };
