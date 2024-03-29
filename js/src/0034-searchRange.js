// 34-searchRange
// 搜索一个排序数组中，某个值的开始位置和结束位置
// 如果没有这个数，返回[-1,-1]
// 思路一：使用 includes indexOf lastIndexOf 函数获取位置
// 64 ms, 在所有 JavaScript 提交中击败了81.62%
function searchRange1(nums, target) {
  const startIndex = nums.indexOf(target);
  if (startIndex === -1) return [-1, -1];
  const endIndex = nums.lastIndexOf(target);
  return [startIndex, endIndex];
}

// 思路二：遍历一次数组，获取开始的位置和结束的位置
// 92 ms, 在所有 JavaScript 提交中击败了9.25%
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

// 思路二改进后,性能提升
// 60 ms, 在所有 JavaScript 提交中击败了90.05%
function searchRange3(nums, target) {
  const len = nums.length;
  let start = -1;
  let end = -1;
  for (let i = 0; i <= len; i++) {
    if (start === -1 && nums[i] === target && (nums[i - 1] === undefined || nums[i - 1] !== target)) {
      start = i;
    }
    if (nums[i - 1] === target && (nums[i] === undefined || nums[i] !== target)) {
      end = i - 1;
    }
    if (start !== -1 && end !== -1) {
      break;
    }
  }
  return [start, end];
}

// 思路三：数组使用二分法获取位置
export { searchRange1, searchRange2, searchRange3 };
