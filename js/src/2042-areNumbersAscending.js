/*
 * @lc app=leetcode.cn id=2042 lang=javascript
 *
 * [2042] 检查句子中的数字是否递增
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 思路：把字符串转换成数组，然后提取出数字，判断是否递增
// Your runtime beats 57.94 % of javascript submissions
const areNumbersAscending = function(s) {
  // 1 把字符串转换成数组
  let arr = s.split(' ');
  // 2 过滤数组中的字符串，把数字部分转换成数值类型
  arr = arr.filter((item) => {
    return !Number.isNaN(parseInt(item, 10));
  });
  for (let i = 1; i < arr.length; i++) {
    if (parseInt(arr[i], 10) <= parseInt(arr[i - 1], 10)) {
      return false;
    }
  }
  return true;
};
// @lc code=end
export { areNumbersAscending };
