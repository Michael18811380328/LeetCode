/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯算法
// 子集中没有重复元素
// 92 ms, 在所有 JavaScript 提交中击败了46.19%
var subsets = function(nums) {
  const len = nums.length;
  let list = [];
  list.push([]);
  // 处理特殊长度的数组
  if (len === 0) {
    return list;
  }
  else if (len === 1) {
    list.push(nums);
    return list;
  }
  // 回溯子函数
  var backTrack = function(current, target, list) {
    if (current.length === target) {
      list.push([...current]);
      return;
    }
    // nums 这个forEach执行比较好
    nums.forEach((i) => {
      // console.log(i, current);
      if (current.length === 0 ||
        (!current.includes(i) && i > current[current.length - 1])
        ){
        current.push(i);
        backTrack(current, target, list);
        current.pop();
      }
    });
    // for (let i = 1; i <= len; i++) {
    //   if (current.includes(i) || i < current[current.length - 1]) {
    //     continue;
    //   }
    //   current.push(i);
    //   backTrack(current, target, list);
    //   current.pop();
    // }
  }
  // 处理长度大于1的数组的子集
  list.push(nums);
  // 排序，确保正序进入子序列
  nums.sort((a, b) => a - b);
  // 先循环设置子集的长度，然后回溯，满足长度的可以放入目标数组
  for (let i = 1; i < len; i++) {
    let target = i;
    let current = [];
    backTrack(current, target, list);
  }
  return list;
};
