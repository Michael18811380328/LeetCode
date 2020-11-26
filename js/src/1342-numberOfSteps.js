/*
 * @lc app=leetcode.cn id=1342 lang=javascript
 *
 * [1342] 将数字变成 0 的操作次数
 */ 
/**
 * @param {number} num
 * @return {number}
 */
// 思路一，直接计算
var numberOfSteps  = function(num) {
  let operate = 0;
  while(num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num--;
    }
    operate++;
  }
  return operate;
};
// 思路二：转换成二进制，然后计算长度和1的数量
