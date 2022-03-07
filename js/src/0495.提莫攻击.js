/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// 思路1：全部的时间-重复的时间=中毒的时间
// 全部的时间：数组长度 * 持续时间
// 重复的时间：间隔 - （后一个 - 前一个）
// 存在的问题：如果第一个攻击，影响了后面的多个攻击（持续时间较长）
// 那么这个就不好计算（不能一次循环实现）

// 思路2：直接循环数组，每次循环，设置已经持续的时间，更新结束的时间
// 这样可以处理多个重复的情况，时间复杂度可以接受
// Your runtime beats 74.74 % of javascript submissions

// 思路3：一维时间点准换成二维时间区间，然后求并集，这样也可以实现
// 这个适合持续时间不同的情况，这里使用性能不好

// 综上所述，使用思路2较好
// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = function(timeSeries, duration) {
  let total = 0;
  let end = 0;
  // 如果第一项是0，那么需要从0开始求和（这个刚开始忽略了）
  if (timeSeries[0] === 0) {
    total = 1;
  }
  const len = timeSeries.length;
  for (let i = 0; i < len; i++) {
    // 如果当前的和上一个没有交集，那么直接求 total
    if (end < timeSeries[i]) {
      total += duration;
    } else {
      total += (timeSeries[i] + duration - 1 - end);
    }
    end = timeSeries[i] + duration - 1;
  }
  return total;
};

// console.log(findPoisonedDuration([1,2], 2) === 3);
// console.log(findPoisonedDuration([1,4], 2) === 4);
// console.log(findPoisonedDuration([1,2,5,6,7,12,20,22,23,50,200,300,345], 100) === 394);
// @lc code=end
