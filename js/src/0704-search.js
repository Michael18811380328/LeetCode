// 704. 二分查找
// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  return nums.indexOf(target);
};

// 二分法
const search2 = function(nums, target) {
  const len = nums.length;
  if (len === 0 || nums[0] > target || nums[len - 1] < target) {
    return -1;
  }
  // 二分
  let start = 0;
  let end = len - 1;
  if (nums[start] === target) {
    return 0;
  }
  if (nums[end] === target) {
    return len - 1;
  }
  let middle = Math.ceil((start + end) / 2);
  while (start < end - 1) {
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      end = middle;
      middle = Math.floor((start + end) / 2);
    } else if (nums[middle] < target) {
      start = middle;
      middle = Math.floor((start + end) / 2);
    }
  }
  return -1;
};

export { search, search2 };
