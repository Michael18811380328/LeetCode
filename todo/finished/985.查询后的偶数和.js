/*
 * @lc app=leetcode.cn id=985 lang=javascript
 *
 * [985] 查询后的偶数和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
// Your runtime beats 43.48 % of javascript submissions
var sumEvenAfterQueries = function(A, queries) {
  // 先求当前偶数的和，然后把当前的数组转换成一个对象
  let sum = 0;
  let dict = {};
  A.forEach((item, index) => {
    if (item % 2 === 0) {
      sum += item;
    }
    dict[index] = item;
  });
  // 然后遍历查询对象，改变对象的值
  let res = [];
  queries.forEach((item, index) => {
    let key = String(item[1]);
    let value = item[0];
    let oldValue = Number(dict[key]) + 0;
    let newValue = Number(oldValue) + value;
    dict[key] = newValue;
    // 分治算法：四种情况
    if (isOdd(oldValue)) {
      // 旧数字是偶数
      if (isOdd(newValue)) {
        // 新数字是偶数
        sum -= oldValue;
        sum += newValue;
      } else {
        // 新数字是奇数
        sum -= oldValue;
      }
    } else {
      // 旧数字是奇数
      if (isOdd(newValue)) {
        // 新数字是偶数
        sum += newValue;
      } else {
        // 新数字是奇数        
      }
    }
    res.push(sum);
  });
  return res;
};

var isOdd = (num) => {
  return num % 2 === 0;
}
// @lc code=end

