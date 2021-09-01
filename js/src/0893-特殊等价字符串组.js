/*
 * @lc app=leetcode.cn id=893 lang=javascript
 *
 * [893] 特殊等价字符串组
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {number}
 */
// Your runtime beats 73.53 % of javascript submissions
var numSpecialEquivGroups = function(A) {
  let dict = {};
  let num = 0;
  const len = A.length;
  for (let i = 0; i < len; i++) {
    let item = A[i];
    let key = getKey(item);
    // console.log(key);
    dict[key] ? dict[key]++ : dict[key] = 1;
    num = num > dict[key] ? num : dict[key];
  }
  return Object.keys(dict).length;
};

let getKey = (str) => {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      arr1.push(str[i]);
    } else {
      arr2.push(str[i]);
    }
  }
  arr1.sort((a, b) => a > b ? 1 : -1);
  arr2.sort((a, b) => a > b ? 1 : -1);
  return arr1.join('') + '+' + arr2.join('');
};
// ["abc","acb","bac","bca","cab","cba"] 这个为什么不对
// 是否考虑原始数组中完全相同的子串？
// @lc code=end

