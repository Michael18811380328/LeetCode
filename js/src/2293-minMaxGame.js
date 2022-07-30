/*
 * @lc app=leetcode.cn id=2293 lang=javascript
 *
 * [2293] 极大极小游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * Your runtime beats 90.21 % of javascript submissions
 */
const minMaxGame = function(nums) {
  const getArray = function(arr) {
    const len = arr.length / 2;
    const result = [];
    for (let i = 0; i < len; i++) {
      result[i] = i % 2 === 0 ? Math.min(arr[i * 2], arr[i * 2 + 1]) : Math.max(arr[i * 2], arr[i * 2 + 1]);
    }
    return result;
  };
  while (nums.length !== 1) {
    nums = getArray(nums);
  }
  return nums[0];
};

// console.log(minMaxGame([1,3,5,2,4,8,2,2])) // 1
// console.log(minMaxGame([3])) // 3
// @lc code=end
export { minMaxGame };
