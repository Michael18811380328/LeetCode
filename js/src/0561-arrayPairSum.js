/**
 * @param {number[]} nums
 * @return {number}
 */
// 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。
// 示例 1:
// 输入: [1,4,3,2]
// 输出: 4
// 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
// 提示:
// n 是正整数,范围在 [1, 10000].
// 数组中的元素范围在 [-10000, 10000].

// 思路1
// 数组首先排序，然后获取奇数序号的值的总和
// 168 ms, 在所有 JavaScript 提交中击败了24.32%
const arrayPairSum = function(nums) {
  const len = nums.length;
  // 现在这种思路，排序执行了一次，然后再次循环
  // 实际执行两次循环，性能一般
  if (len === 0) return 0;
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < len; i += 2) {
    sum += nums[i];
  }
  return sum;
};

export { arrayPairSum };
