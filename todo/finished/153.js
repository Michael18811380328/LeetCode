/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路1：直接使用已有API（耗时）
var findMin = function(nums) {
    return Math.min(...nums);
};

// 思路二：循环一次
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


// 思路三：二分法查找排序的数组