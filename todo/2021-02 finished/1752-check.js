/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 76 ms, 在所有 JavaScript 提交中击败了91.94%
var check = function(nums) {
    let add = 0;
    const len = nums.length;
    // 长度小于3的数组肯定可以旋转成排序好的数组
    if (len < 3) {
        return true;
    }
    if (nums[len - 1] > nums[0]) {
        add++;
    }
    for (let i = 0; i < len - 1; i++) {
        if (nums[i] > nums[i+1]) {
            add++;
        }
        if (add > 1) {
            return false;
        }
    }
    return true;
};