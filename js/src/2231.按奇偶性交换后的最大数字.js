/*
 * @lc app=leetcode.cn id=2231 lang=javascript
 *
 * [2231] 按奇偶性交换后的最大数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 * Your runtime beats 89.75 % of javascript submissions
 */
const largestInteger = function(num) {
  const arr = String(num).split('');
  const len = arr.length;
  const arr1 = [];
  const arr2 = [];
  const dict = [];

  arr.forEach((item, index) => {
    // item % 2 === 0
    // 然后 index 放在一个对象中，记录是奇数还是偶数
    if (item % 2 === 0) {
      arr1.push(item);
      dict[index] = true;
    } else {
      arr2.push(item);
      dict[index] = false;
    }
  });

  arr1.sort((a, b) => a > b ? 1 : -1);
  arr2.sort((a, b) => a > b ? 1 : -1);

  const resArr = [];
  for (let i = 0; i < len; i++) {
    if (dict[i]) {
      // arr1
      resArr[i] = arr1.pop();
    } else {
      // arr2
      resArr[i] = arr2.pop();
    }
  }
  return parseInt(resArr.join(''));
};
// @lc code=end

export { largestInteger };
