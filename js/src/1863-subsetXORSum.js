/**
 * @param {number[]} nums
 * @return {number}
 */
// 考点：回溯算法（性能需要提升）
// 第一版：性能不好，第一个子函数是递归，性能太差
// 180 ms 9.62%
const subsetXORSum1 = function(nums) {
  // 辅助函数：求异或 a ^ b; 位运算
  let res = 0;
  getXOR = (arr) => {
    if (arr.length === 0) {
      return arr[0];
    }
    const curr = arr.pop();
    // 递归一下
    return curr ^ getXOR(arr);
  };
  // 思路：求出全部的子集(回溯算法)
  const len = nums.length;
  // i 表示子集元素的个数
  var backTrace = (arr, target, list, index) => {
    if (arr.length === target) {
      // console.log(arr);
      const res1 = getXOR([...arr]);
      res += res1;
      return;
    }
    if (arr.length > target) {
      return;
    }
    for (let i = index; i < list.length; i++) {
      const curr = list[i];
      arr.push(curr);
      backTrace(arr, target, [...list.slice(0, i), ...list.slice(i + 1)], i);
      arr.pop();
    }
  };
  for (let i = 1; i <= len; i++) {
    backTrace([], i, nums, 0);
  }
  return res;
};

// 168 ms, 在所有 JavaScript 提交中击败了9.94%
// 第二版：优化了辅助函数，但是性能仍然很差
const subsetXORSum2 = function(nums) {
  let res = 0;
  // 辅助函数：求异或 a ^ b; 位运算
  getXOR = (arr) => {
    const len = arr.length;
    if (len === 0) {
      return arr[0];
    }
    if (len === 1) {
      return arr[0] ^ arr[1];
    }
    let result = arr[0] ^ arr[1];
    for (let i = 2; i < len; i++) {
      result = result ^ arr[i];
    }
    return result;
  };
  // 辅助函数：回溯（优化）
  var backTrace = (arr, target, list, index) => {
    if (arr.length === target) {
      const res1 = getXOR([...arr]);
      res += res1;
      return;
    }
    if (arr.length > target) {
      return;
    }
    for (let i = index; i < list.length; i++) {
      const curr = list[i];
      arr.push(curr);
      backTrace(arr, target, [...list.slice(0, i), ...list.slice(i + 1)], i);
      arr.pop();
    }
  };
  const len = nums.length;
  // i 表示子集元素的个数
  for (let i = 1; i <= len; i++) {
    backTrace([], i, nums, 0);
  }
  return res;
};
