/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// 112 ms, 在所有 JavaScript 提交中击败了79.03%
const matrixReshape = function(nums, r, c) {
  // 判断矩阵是否可以重塑，那么就是原始矩阵的元素个数和新变换后的矩阵的个数是否相等
  const L1 = nums.length;
  if (L1 === 0) return nums;
  const L2 = nums[0].length;
  if (L2 === 0) return nums;
  if (L1 * L2 !== r * c) {
    return nums;
  }
  if (L1 === r && L2 === c) {
    return nums;
  }
  // 转换矩阵，使用二重遍历，然后填充数组的方式。
  // 新的矩阵，r行c列
  const matrix = [];
  let tmp = [];
  for (let i = 0; i < L1; i++) {
    for (let j = 0; j < L2; j++) {
      const inner = nums[i][j];
      tmp.push(inner);
      if (tmp.length === c) {
        matrix.push(tmp);
        tmp = [];
      }
    }
  }
  return matrix;
};

export { matrixReshape };
