/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
// Your runtime beats 19.77 % of javascript submissions
var canThreePartsEqualSum = function(A) {
  let dict = {};
  let current = 0;
  const len = A.length;
  for (let i = 0; i < len; i++) {
    current += A[i];
    if (!dict[current]) {
      dict[current] = [i];
    } else {
      dict[current].push(i);
    }
  }
  // console.log(current);
  let key = current / 3;
  // console.log(dict[key], dict[key * 2]);
  // 第一个出现必须小于第二个出现
  if (key === 0) {
    if (dict[0].length >= 3 && dict[0][0] < dict[0][1] && dict[0][1] < dict[0][2]) {
      return true;
    } else {
      return false;
    }
  }
  if (
    current % 3 === 0 &&
    dict[key] &&
    dict[key * 2] &&
    dict[key][0] < dict[key * 2].pop()
  ) {
    return true;
  }
  return false;
};
// @lc code=end

