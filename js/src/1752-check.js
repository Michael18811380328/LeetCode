/**
 * 检查数组是否经排序和轮转得到
 * @param {number[]} nums
 * @return {boolean}
 */
// 给你一个数组 nums 。nums 的源数组中，所有元素与 nums 相同，但按非递减顺序排列。
// 如果 nums 能够由源数组轮转若干位置（包括 0 个位置）得到，则返回 true ；否则，返回 false 。
// 源数组中可能存在 重复项 。
// 注意：我们称数组 A 在轮转 x 个位置后得到长度相同的数组 B ，当它们满足 A[i] == B[(i+x) % A.length] ，其中 % 为取余运算。
// 76 ms, 在所有 JavaScript 提交中击败了91.94%
function check (nums) {
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
        if (nums[i] > nums[i + 1]) {
            add++;
        }
        if (add > 1) {
            return false;
        }
    }
    return true;
}

export { check };
