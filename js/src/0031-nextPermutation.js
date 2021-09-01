// 31-nextPermutation
// 获取这个数组中比这个大的一个数字
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
  const len = nums.length;
  let index = -1;
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i + 1] > nums[i]) {
      // 找到后一个数比前一个数大的index
      index = i;
      break;
    }
  }
  if (index === -1) {
    nums.reverse(); // 数组倒序排列，直接倒序返回最小值
    return;
  }
  // 获取比这个数大的数字
  let tmp;
  let tmpIndex;
  for (let j = index + 1; j < len; j++) {
    if (nums[j] > nums[index] && (!tmp || nums[j] <= tmp)) {
      tmp = nums[j];
      tmpIndex = j;
    }
  }
  // 交换两个数的位置
  nums[tmpIndex] = nums[index];
  nums[index] = tmp;
  // 后面的重新排序(index + 1 到 len - 1)
  const arr = nums.splice(index + 1, len - index - 1);
  arr.sort((a, b) => a - b);
  nums.push(...arr);
}

export { nextPermutation };
