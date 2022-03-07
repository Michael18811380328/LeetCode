// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
// 示例:
// 输入: n = 4, k = 2
// 输出:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */
// 120 ms, 在所有 JavaScript 提交中击败了93.50%
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
  // 没有满足的组合
  if (n < k) {
    return [];
  }
  // 这里设置一个全局的数组N，然后填充内容
  const LIST = [];
  for (let i = 0; i < n; i++) {
    LIST.push(i + 1);
  }
  // 如果N和K相等，只有这一种情况
  if (n === k) {
    return [LIST];
  }
  // 下面深拷贝LIST数组
  // 执行回溯
  var backTrack = function(list, tmp, num) {
    // 回溯结束的条件：临时数组的长度等于预定的长度
    if (tmp.length === num) {
      list.push([...tmp]);
      return;
    }
    // 这里过滤剩余的情况
    // list filter tmp 的元素，然后循环的时候，从大于 tmp 中最大元素开始循环
    const start = tmp.length > 0 ? tmp[tmp.length - 1] + 1 : 1;
    for (let i = start; i <= n; i++) {
      tmp.push(i);
      backTrack(list, tmp, num);
      tmp.pop();
    }
  };
  // 创建回溯的初始条件
  const list = [];
  const tmp = [];
  backTrack(list, tmp, k);
  return list;
};
