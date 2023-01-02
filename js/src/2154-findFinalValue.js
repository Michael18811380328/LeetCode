/**
 * [2154] 将找到的值乘以 2
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 * Your runtime beats 59.5 % of javascript submissions
 */
const findFinalValue = function(nums, original) {
  const set = new Set(nums);
  // set.has 的时间复杂度也是查找数组
  while (set.has(original)) {
    original *= 2;
  }
  return original;
};

// 56 ms, 在所有 JavaScript 提交中击败了90.28%
const findFinalValue2 = function(nums, original) {
  while (nums.includes(original)) {
    original *= 2;
  }
  return original;
};

// 优化后 N * N 变成了 N
// 52 ms, 在所有 JavaScript 提交中击败了97.22%
const findFinalValue3 = function(nums, original) {
  const dict = {};
  nums.forEach((item) => {
    dict[item] = true;
  });
  while (dict[original]) {
    original *= 2;
  }
  return original;
};

export { findFinalValue, findFinalValue2, findFinalValue3 };
