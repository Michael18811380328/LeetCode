/*
 * @lc app=leetcode.cn id=2103 lang=javascript
 *
 * [2103] 环和杆
 */

// @lc code=start
/**
 * @param {string} rings
 * @return {number}
 */
// 思路
// 1 新建一个空数组，表示初始的10个杆
// 2 遍历字符串，然后增加杆子的属性（这个需要分三种情况）
// 3 遍历数组，如果都有环，那么就是正确的
// Your runtime beats 96.15 % of javascript submissions
var countPoints = function(rings) {
  if (rings.length < 5) {
    return 0;
  }
  let poles = new Array(10);
  for (let i = 0; i < 10; i++) {
    poles[i] = {
      'R': null,
      'G': null,
      'B': null,
    };
  }
  for (let i = 0; i < rings.length; i += 2) {
    let key = rings[i];
    let index = parseInt(rings[i + 1]);
    poles[index][key] = true;
  }
  let result = 0;
  poles.forEach(pole => {
    if (pole['R'] && pole['G'] && pole['B']) {
      result++;
    }
  });
  return result;
};

// console.log(countPoints("B0B6G0R6R0R6G9") === 1)
// console.log(countPoints("B0R0G0R9R0B0G0") === 1)
// console.log(countPoints("G4") === 0)

// @lc code=end

