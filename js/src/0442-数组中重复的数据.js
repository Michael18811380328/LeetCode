/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 思路1：借助数组的存储功能（数组是对象），空间不满足
// Your runtime beats 17.76 % of javascript submissions
var findDuplicates = function(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let key = '-' + nums[i];
    if (!nums[key]) {
      nums[key] = 1;
    }
    else if (nums[key] === 1) {
      nums[key] = 2;
      res.push(nums[i]);
    }
  }
  return res;
};

// 思路2：数组排序后，获取重复元素（时间不满足）
// Your runtime beats 24.64 % of javascript submissions
var findDuplicates2 = function(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  let last = null;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] && nums[i] !== last) {
      res.push(nums[i]);
      last = nums[i];
    }
  }
  return res;
};

// 思路3：复制一个数组，然后使用set去重，然后求差集（效果也不好）

// 思路4：参考其他人的答案
// 遍历到数字 i 时，直接把数组索引 i 的数字变成负数
// 如果再次遍历到数字 i 时，那么就出现了两次
// 利用了数字全部是正数，且出现次数只有两次实现的 
// Your runtime beats 63.61 % of javascript submissions
var findDuplicates3 = function(nums) {
  let res = [];
  const len = nums.length;
  for (let i = 0; i < len + 1; i++) {
    let item = Math.abs(nums[i]);
    if (nums[item] < 0) {
      res.push(item);
    } else {
      // 如果当前的值超过了数组的长度，那么需要开辟临时的数字存放
      // 这里选择较大的数字，避免冲突
      if (nums[item] > 0) {
        nums[item] = - nums[item];
      } else {
        nums[item] = -1000000;
      }
    }
  }
  return res;
};
// @lc code=end

