/*
 * @lc app=leetcode.cn id=2194 lang=javascript
 *
 * [2194] Excel 表中某个范围内的单元格
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
//  Your runtime beats 86.88 % of javascript submissions
var cellsInRange = function(s) {
  // 双层循环即可
  let a = s.charCodeAt(0);
  let b = s.charCodeAt(3);
  // a b 是外循环，然后获取对应的 ASCII 码

  let c = Number(s[1]);
  let d = Number(s[4]);
  // cd 是内循环，直接使用数字即可

  let res = [];
  // String.fromCharCode()
  for (let i = a; i <= b; i++) {
    let tmp = String.fromCharCode(i);
    for (let j = c; j <= d; j++) {
      res.push(tmp + j);
    }
  }
  return res;
};

// console.log(cellsInRange("A1:F1"))
// @lc code=end

