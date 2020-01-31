// 55-给定一个非负整数数组，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个位置。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 如果数组中没有0，那么一定可以到最后一个元素；
// 从后向前遍历数组：如果遇到某个元素是0，那么判断前面是否有元素的数值大于到0的距离，即跳过这个元素

// 68 ms, 在所有 javascript 提交中击败了 78.33%
function canJump(nums) {
  const len = nums.length;
  // 如果数组的长度是0-1，一定可以
  if (len === 0 || len === 1) {
    return true;
  }
  // 如果数组中不包含0，一定可以
  if (!nums.includes(0)) {
    return true;
  }
  // 从后向前遍历数组，如果是0，那么内循环遍历，是否有值大于0
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      for (let j = i; j >= 0; j--) {
        // 如果0不是最后一位，那么前面的必须跳过0
        if (nums[j] > i - j && i !== len - 1) {
          break;
        } else if (nums[j] >= i - j && i === len - 1) {
          // 如果0是最后一位，只要到达0就行
          break;
        }
        // 内循环中，如果全部都不能跳出，那么就不能跳出
        if (j === 0) {
          return false;
        }
      }
    }
  }
  // 外循环中，必须全部都可以跳出，才能跳出
  return true;
}

export { canJump };
