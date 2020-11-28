/**
 * @param {number[]} nums
 * @return {number}
 */
// 132 ms , 在所有 JavaScript 提交中击败了80.73%
var maximumProduct = function(nums) {
    const len = nums.length;
    if (len === 3) return nums[0] * nums[1] * nums[2];
    // 直接排序
    nums.sort((a, b) => a - b);
    // 结果无非是几种
    // 三个正数
    // 一个正数和两个负数
    let num1 = nums[0] * nums[1] * nums[len - 1];
    let num2 = nums[len - 3] * nums[len - 2] * nums[len - 1];
    return Math.max(num1, num2);
};