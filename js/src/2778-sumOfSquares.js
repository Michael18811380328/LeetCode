/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfSquares = function(nums) {
  const len = nums.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    if (len % (i + 1) === 0) {
      result += (nums[i] * nums[i]);
    }
  }
  return result;
};

export { sumOfSquares };
