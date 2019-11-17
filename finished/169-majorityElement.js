// 169 求众数 majorityElement

// 获取一个数组中的众数（大于数组长度一半的数）
// 我们假设数组一定有众数
/**
 * @param {number[]} nums
 * @return {number}
 */

// 80 ms , 在所有 javascript 提交中击败了 73.67%
function majorityElement(nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  const times = {};
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (!times[item]) {
      times[item] = 1;
    } else {
      times[item] += 1;
    }
    if (times[item] > len / 2) {
      return item;
    }
  }
}

// 60 ms , 在所有 javascript 提交中击败了 99.22%
function majorityElement2(nums) {
  const len = nums.length;
  const halfLen = len / 2;
  if (len === 1) {
    return nums[0];
  }
  const times = {};
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (!times[item]) {
      times[item] = 1;
    } else {
      times[item] += 1;
      if (times[item] > halfLen) {
        return item;
      }
    }
  }
}

export { majorityElement, majorityElement2 };