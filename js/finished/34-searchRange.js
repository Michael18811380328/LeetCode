// searchRange
// 搜索一个排序数组中，某个值的开始位置和结束位置
// 如果没有这个数，返回[-1,-1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 思路一：使用 includes indexOf lastIndexOf 函数获取位置
function searchRange1(nums, target) {
  const startIndex = nums.indexOf(target);
  if (startIndex === -1) return [-1, -1];
  const endIndex = nums.lastIndexOf(target);
  return [startIndex, endIndex];
}

// 思路二：遍历一次数组，获取开始的位置和结束的位置
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange2(nums, target) {
  const len = nums.length;
  let start = -1;
  let end = -1;
  for (let i = 0; i <= len; i++) {
    if (nums[i] === target && (nums[i - 1] === undefined || nums[i - 1] !== target)) {
      start = i;
    }
    if (nums[i - 1] === target && (nums[i] === undefined || nums[i] !== target)) {
      end = i - 1;
    }
  }
  return [start, end];
}

// 思路三：数组使用二分法获取位置

export { searchRange1, searchRange2 };
