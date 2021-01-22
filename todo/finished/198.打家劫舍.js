/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// Your runtime beats 54.12 % of javascript submissions
var rob = function(nums) {
  // 动态规划就是求数组的通项公式
  // 然后获取数组的前几项，即可计算需要的参数
  // f(n) = Math.max(f(n - 2) + nums(n), f(n - 1))
  // f(1) = nums(1) f(2) = nums(2)
  // f(3) = Math.max(f(1) + nums(3), f(2))
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  else if (len === 1) {
    return nums[0];
  }
  else if (len === 2) {
    return Math.max(nums[0], nums[1]);
  }
  let res = [];
  res[0] = nums[0];
  res[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    res[i] = Math.max(res[i - 2] + nums[i], res[i - 1]);
  }
  // console.log(res);
  return res[res.length - 1];
};
// [1,2,3,1,2,7,9,3,1]
// @lc code=end

