// 268 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
// 输入: [3,0,1] 输出: 2
// 输入: [9,6,4,2,3,5,7,0,1] 输出: 8
// 说明: 你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?
/**
 * @param {number[]} nums
 * @return {number}
 */
// 80 ms, 在所有 javascript 提交中击败了71.45%
// 计算一个实际的和，和理论上的总和，那么相减就是缺少的数字
function missingNumber(nums) {
  const len = nums.length;
  const defaultSum = (1 + len) * len / 2;
  let sum = 0;
  nums.forEach((num) => sum += num);
  return defaultSum - sum;
}

export { missingNumber };
