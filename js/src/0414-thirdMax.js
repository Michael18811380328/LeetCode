// 414
// 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路一：首先数组去重（set）判断长度是否大于2，返回最大值还是第三大的值
// 然后使用内部函数获取最大值或者第三大的值
// 92 ms, 在所有 javascript 提交中击败了33.11%
function thirdMax(nums) {
  const tmpNums = Array.from(new Set(nums));
  if (tmpNums.length === 1) {
    return tmpNums[0];
  }
  if (tmpNums.length === 2) {
    return Math.max(...tmpNums);
  }
  tmpNums.sort((a, b) => b - a);
  return tmpNums[2];
}

// 第二种，不使用去重，排序后，手动循环，获取当前第三大的数字。
// 128 ms, 在所有 javascript 提交中击败了11.82% 这样的性能更差
function thirdMax2(nums) {
  nums.sort((a, b) => b - a);
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  let index = 1;
  for (let i = 1; i < len; i++) {
    if (nums[i] < nums[i - 1]) {
      index++;
      if (index === 3) {
        return nums[i];
      }
    }
  }
  return nums[0];
}

export { thirdMax, thirdMax2 };
