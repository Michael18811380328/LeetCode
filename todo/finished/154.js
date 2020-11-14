/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function(nums) {
//     return Math.min(...nums);
// };
var findMin = function(nums) {
    let len = nums.length;
    if (len === 1) return nums[0];
    for (let i = 1; i < len; i++) {
        if (nums[i] < nums[i - 1]) {
            return nums[i];
        }
    }
    return nums[0];
};