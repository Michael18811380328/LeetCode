/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路一：使用ON复杂度，直接计算一次
var findPeakElement = function(nums) {
    let len = nums.length;
    if (len === 1 || len === 0) {
        return 0;
    }
    if (len === 2) {
        return nums[0] > nums[1] ? 0 : 1;
    }
    for (let i = 1; i < len - 1; i++) {
        if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
            return i;
        }
    }
    return nums[0] > nums[len - 1] ? 0 : len - 1;
};

// 思路二：使用logN复杂度，获取峰值