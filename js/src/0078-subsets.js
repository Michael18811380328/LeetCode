/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// [78] 子集
// 回溯算法
// 子集中没有重复元素
// 92 ms, 在所有 JavaScript 提交中击败了46.19%
const subsets = function(nums) {
  const len = nums.length;
  const list = [];
  list.push([]);
  // 处理特殊长度的数组
  if (len === 0) {
    return list;
  } else if (len === 1) {
    list.push(nums);
    return list;
  }
  // 回溯子函数
  const backTrack = function(current, target, list) {
    const currLen = current.length;
    if (currLen === target) {
      list.push([...current]);
      return;
    }
    // nums 这个forEach执行比较好
    nums.forEach((i) => {
      if (currLen === 0 || (!current.includes(i) && i > current[currLen - 1])) {
        current.push(i);
        backTrack(current, target, list);
        current.pop();
      }
    });
  };
  // 处理长度大于1的数组的子集
  list.push(nums);
  // 排序，确保正序进入子序列
  nums.sort((a, b) => a - b);
  // 先循环设置子集的长度，然后回溯，满足长度的可以放入目标数组
  for (let i = 1; i < len; i++) {
    const target = i;
    const current = [];
    backTrack(current, target, list);
  }
  return list;
};
