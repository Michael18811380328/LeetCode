/*
 * @lc app=leetcode.cn id=1399 lang=javascript
 *
 * [1399] 统计最大组的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// Your runtime beats 100 % of javascript submissions
var countLargestGroup = function(n) {
  if (n < 10) {
    return n;
  }
  let dict = {};
  let getSum = (n) => {
    if (n < 10) {
      return n;
    }
    while (n % 10 === 0) {
      n = n / 10;
    }
    return n % 10 + getSum((n - n % 10) / 10);
  }
  // 先循环，然后求和，把和记录在字典中
  for (let i = 0; i <= n; i++) {
    let sum = getSum(i);
    if (dict[sum]) {
      dict[sum]++;
    } else {
      dict[sum] = 1;
    }
  }
  // console.log(dict);
  // 然后把字典的值转换成数组？求出现次数最多的值
  let dict2 = {};
  let max = 0;
  for (let key in dict) {
    let value = dict[key];
    if (value > max) {
      max = value;
    }
    if (!dict2[value]) {
      dict2[value] = 1;
    } else {
      dict2[value]++
    }
  }
  // console.log(dict2);
  return dict2[max];
};
// @lc code=end

