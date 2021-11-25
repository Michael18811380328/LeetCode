/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 */

// 思路1：滑动窗口，因为X是固定的，那么一次滑动区间，遍历一次数组
// 求出最大值，时间复杂度O(n) 数组长度20000可以实现
// 思路2：给出的提示是贪心算法和排序，这个连续的X分钟怎么解？
// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
  const cusLen = customers.length;
  let max = 0;
  let maxIndex = 0;
  if (cusLen === minutes) {
    return customers.reduce((a, b) => a + b, 0);
  }
  // 先计算第一个情况下的数量
  // 这里应该计算差值
  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) {
      max += customers[i];
    }
  }
  // console.log(max, maxIndex);
  let before = max;
  // 应该把这个index记下来，然后求和（index这部分直接加）
  // 开始滑动窗口，每次增加前面，减去后面，求出当前的值
  // 这里应该计算差值
  // 这里滑动窗口，边界值需要处理
  for (let j = 0; j <= cusLen - minutes; j++) {
    if (grumpy[j] === 1) {
      before = before - customers[j];
    }
    if (grumpy[j + minutes] === 1) {
      before = before + customers[j + minutes];
    }
    if (before > max) {
      max = before;
      maxIndex = j;
    }
    console.log(before)
  }
  console.log(max, maxIndex);
  let result = 0;
  // 看一下这里的 maxIndex 的情况，不能直接加
  for (let i = 0; i < cusLen; i++) {
    if (i >= maxIndex && i <= maxIndex + minutes) {
      result += customers[i];
    } else {
      if (grumpy[i] === 0) {
        result += customers[i];
      }
    }
    // console.log(result);
  }
  return result;
};

// [1,0,1,2,1,1,7,5,1,0,1,2,1,1,7,5,1,0,1,2,1,1,7,5]
// [0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1]
// 6
// 38
// console.log(maxSatisfied([1,0,1,2,1,1,2,5,2,2,2,1], [0,1,0,1,0,1,0,1,0,0,1,1], 5) === 17);
// console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3) === 16);
// console.log(maxSatisfied([3], [1], 1) === 3);
// console.log(maxSatisfied([1], [1], 1) === 1);
// console.log(maxSatisfied([4,10,10], [1,1,0], 2) === 24);
console.log(maxSatisfied([2,6,6,9], [0,0,1,1], 1) === 17);

// @lc code=end

