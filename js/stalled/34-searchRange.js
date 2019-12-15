// 34-给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
// 你的算法时间复杂度必须是 O(log n) 级别。
// 如果数组中不存在目标值，返回 [-1, -1]。

// 示例 1:
// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: [3,4]
// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: [-1,-1]

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

// 思路二：遍历一次数组，获取索引值
// 现在有问题
function searchRange2(nums, target) {
  let start = -1;
  let end = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      start = i - 1;
    }
    if (start !== -1 && nums[i] !== target) {
      end = i - 1;
    }
  }
  if (start !== -1 && end === -1) {
    end = len - 1;
  }
  return [start, end];
}

// 思路三：数组使用二分法获取位置

export { searchRange1, searchRange2 };
