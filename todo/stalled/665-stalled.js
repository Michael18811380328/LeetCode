/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  const len = nums.length;
  if (len <= 2) {
    return true;
  }
  let flag = true;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (flag === false) {
        return false;
      }

      if (nums[i - 1] && nums[i + 1] && nums[i - 1] )

      // 这里分两种情况去掉
      // 去掉前面或者去掉后面
      nums.splice(i, 1);
      if (nums[i - 1] && nums[i - 1] > nums[i]) return false;


      i--;
      flag = false;
    }
  }
  return true;
};
// [3,4,2,3] false
// [5,7,1,8] true

// @lc code=end

