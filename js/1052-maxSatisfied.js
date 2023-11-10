/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 * [1052] 爱生气的书店老板-滑动窗口
 */
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 * 最大顾客数 = 各种情况下都不生气的顾客（staticValue） + 老板心情好时不生气的顾客（slide window, max）
 */
var maxSatisfied = function(customers, grumpy, minutes) {
  const len = customers.length;
  // 各种情况下都不生气的顾客（固定值）
  let staticValue = 0;
  for (let i = 0; i < len; i++) {
    // 不生气 0 时，有效的顾客
    if (grumpy[i] === 0) {
      staticValue += (customers[i]);
    }
  }

  // 计算窗口初始化的最大值
  let max = 0;
  let curr = 0;
  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) {
      curr += customers[i];
    }
  }

  // 这是窗口初始化的最大值
  max = curr;
  // 滑动窗口开始
  for (let i = minutes; i < len; i++) {
    if (grumpy[i] === 1) {
      curr += customers[i];
    }
    if (grumpy[i - minutes] === 1) {
      curr -= customers[i - minutes];
    }
    if (curr > max) {
      max = curr;
    }
  }
  return staticValue + max;
};

// console.log(maxSatisfied([1,0,1,2,1,1,2,5,2,2,2,1], [0,1,0,1,0,1,0,1,0,0,1,1], 5) === 17);
// console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3) === 16);
// console.log(maxSatisfied([3], [1], 1) === 3);
// console.log(maxSatisfied([1], [1], 1) === 1);
// console.log(maxSatisfied([4,10,10], [1,1,0], 2) === 24);
// console.log(maxSatisfied([2,6,6,9], [0,0,1,1], 1) === 17);
