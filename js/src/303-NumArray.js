/*
 * @lc app=leetcode.cn id=303 lang=javascript
 * [303] 区域和检索 - 数组不可变
 */
// @lc code=start
/**
 * @param {number[]} nums
 */
// 多次调用函数，那么这个数量级，直接内存溢出
// （每一次是N，那么多次就是N的平方）
// 求一个区间的和[i, j] 那么可以转换成 sum [0, j] - sum [i, j] 注意边界
// 使用动态规划，在初始化的时候，每一个节点存储当前的和，直接做减法就行
// 这就是这个题目的精髓
// 132 ms
// , 在所有 JavaScript 提交中击败了
// 84.20%
var NumArray = function(nums) {
  let len = nums.length;
  if (len === 0) return;
  this.sum = [];
  this.sum[0] = nums[0];
  if (len === 1) return;
  for (let i = 1; i < len; i++) {
    if (nums[i] || nums[i] === 0) {
      this.sum[i] = this.sum[i - 1] + nums[i]; 
    }
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === 0 && j === 0) {
    return this.sum[0];
  }
  let end = this.sum[j];
  let start = (this.sum[i - 1] || this.sum[i - 1] === 0) ? this.sum[i - 1] : 0;
  return end - start;
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end

