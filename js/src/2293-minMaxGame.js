/**
 * [2293] 极大极小游戏
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

export { minMaxGame };
