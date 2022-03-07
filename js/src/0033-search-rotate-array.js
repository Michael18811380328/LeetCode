// 33 寻找数组中的数字
// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
// 数组中不存在重复的元素，时间复杂度必须是 O(log n) 级别。

// 示例 1:
// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4
// 示例 2:
// 输入: nums = [4,5,6,7,0,1,2], target = 3
// 输出: -1

// 方法一：使用数组的API
// 68 ms, 在所有 JavaScript 提交中击败了69.46%
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search1(nums, target) {
  return nums.indexOf(target);
}

// 方法二：使用一次循环，时间复杂度可以实现
// Your runtime beats 13.6 % of javascript submissions
function search2(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}

// 方法三：使用二分法找到这个数字
// 如果是logN，必须直接二分，那么就需要判断二分的条件
// 任何一个数组，都能划分成两个子数组，可以找到开头，中间，结尾三个节点
// 如果这个目标数存在，那么一定在这差最大的两个数之间
// Your runtime beats 40.56 % of javascript submissions
const search3 = function(nums, target) {
  const len = nums.length;
  if (len === 1) {
    return nums[0] === target ? 0 : -1;
  } else if (len === 2) {
    return nums[0] === target ? 0 : (nums[1] === target ? 1 : -1);
  }
  // 使用二分法处理
  let start = 0;
  let end = len - 1;
  if (nums[start] === target) {
    return start;
  }
  if (nums[end] === target) {
    return end;
  }
  while (start < end - 1) {
    if (nums[start] === target) {
      return start;
    }
    if (nums[end] === target) {
      return end;
    }
    const mid = Math.floor((end - start) / 2) + start;
    if (nums[mid] === target) {
      return mid;
    }
    // 如果在两个数之间，优先在这两个数中间寻找
    if (nums[start] < target && target < nums[mid]) {
      end = mid;
    } else if (nums[mid] < target && target < nums[end]) {
      start = mid;
    } else {
      // 如果都不在的情况下，那就在绝对值较大的一个中
      const left = Math.abs(nums[mid] - nums[start]);
      const right = Math.abs(nums[mid] - nums[end]);
      if (left > right) {
        end = mid;
      } else if (left < right) {
        start = mid;
      }
      // 如果前后的绝对值相等，那么证明已经是升序了，然后这个数又不在其中，就没有
      else {
        return -1;
      }
    }
  }
  return -1;
};

console.log(search3([4, 5, 6, 7, 0, 1, 2], 0) === 4);
console.log(search3([4, 5, 6, 7, 0, 1, 2], 3) === -1);
console.log(search3([4, 5, 6, 7, 0, 1, 2], 100) === -1);
console.log(search3([4, 5, 6, 7, 0, 1, 2], 2) === 6);

export { search1, search2 };
