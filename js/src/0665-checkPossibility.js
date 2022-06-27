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
// Your runtime beats 75.05 % of javascript submissions
const checkPossibility = function(nums) {
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
      // 两种情况（一个是删除当前元素）
      // 另一个是删除后面的元素
      // 只要是一个可以， 那么就继续
      if (
        (i > 0 && nums[i + 1] >= nums[i - 1])
        || i === 0
      ) {
        nums.splice(i, 1);
        i--;
        flag = false;
      } else if (
        (nums[i + 2] >= nums[i])
        || (!nums[i + 2] && nums[i + 2] !== 0)
      ) {
        // 删除i + 1
        nums.splice(i + 1, 1);
        i--;
        flag = false;
      } else {
        return false;
      }
    }
  }
  return true;
};
// [3,4,2,3] false
// [5,7,1,8] true
// [1,4,1,2] true
// [1,2,4,5,3] true

// @lc code=end
