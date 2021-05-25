// 35. 搜索插入位置
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。你可以假设数组中无重复元素。
// 输入: [1,3,5,6], 5 输出: 2

// 44 ms , 在所有 javascript 提交中击败了 99.95%
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  const index = nums.indexOf(target);
  if (index > -1) return index;
  if (target < nums[0]) {
    return 0;
  }
  const len = nums.length - 1;
  if (target > nums[len]) {
    return len + 1;
  }
  let min = 0;
  let max = len;
  while (max > min) {
    const middle = Math.ceil((max + min) / 2);
    if (nums[middle] > target) {
      if (middle === max) return middle;
      max = middle;
    } else {
      min = middle;
    }
  }
}

export { searchInsert };
