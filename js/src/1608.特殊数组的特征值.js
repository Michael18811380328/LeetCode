/*
 * @lc app=leetcode.cn id=1608 lang=javascript
 *
 * [1608] 特殊数组的特征值
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// Your runtime beats 49.29 % of javascript submissions
var specialArray = function(nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let pointer = 0;
  let x = 0;
  while (pointer <= len - 1 && x <= 1000) {
    if (
      nums[pointer] >= x && len - pointer === x &&
      (nums[pointer - 1] > -1 && nums[pointer - 1] !== x || pointer === 0)
    ) {
      return x;
    }
    else if (nums[pointer] <= x) {
      pointer++;
    }
    else if (len - pointer > x) {
      x++;
    }
    else {
      x++;
    }
    if (x > nums[len - 1]) return -1;
  }
  return -1;
};
