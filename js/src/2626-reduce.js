/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
// 调用库函数实现 reduce 效果
const reduce1 = function(nums, fn, init) {
  return nums.reduce(fn, init);
};

// 手动实现 reduce 函数
const reduce2 = function(nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};

export { reduce1, reduce2 };
