/**
 * @param {number[]} nums
 * @return {number}
 */
// 80 ms , 在所有 JavaScript 提交中击败了99.05%

// 485. 最大连续1的个数
// 给定一个二进制数组， 计算其中最大连续1的个数。

// 示例 1:
// 输入: [1,1,0,1,1,1]
// 输出: 3
// 解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
// 注意：
// 输入的数组只包含 0 和1。
// 输入数组的长度是正整数，且不超过 10,000。

var findMaxConsecutiveOnes = function(nums) {
    const len = nums.length;
    if (len === 0 || nums.indexOf(1) === -1) {
        return 0;
    }
    let max = 1;
    let tmp = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 1) {
            tmp++;
            max = tmp > max ? tmp : max;
        } else {
            tmp = 0;
        }
    }
    return max;
};