/*
 * @lc app=leetcode.cn id=1394 lang=javascript
 * [1394] 找出数组中的幸运数
 */
// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function(arr) {
  const len = arr.length;
  const dict = {};
  for (let i = 0; i < len; i++) {
    const key = arr[i];
    if (dict[key]) {
      dict[key] += 1;
    } else {
      dict[key] = 1;
    }
  }
  const list = [];
  // 获取幸运数字
  for (const key in dict) {
    const value = dict[key];
    if (value == key) {
      list.push(key);
    }
  }
  if (list.length === 0) return -1;
  if (list.length === 1) return list[0];
  return Math.max(...list);
};
// @lc code=end

export { findLucky };
