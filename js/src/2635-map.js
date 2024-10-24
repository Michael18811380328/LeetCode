/**
 * https://leetcode.cn/problems/apply-transform-over-each-element-in-array/description/
 * 简单，手动实现 map 函数
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // fn() have 0, 1, 2 parameters
    result[i] = fn(arr[i], i);
  }
  return result;
};

export { map };
