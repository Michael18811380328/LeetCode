/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
// 216 ms
// , 在所有 JavaScript 提交中击败了
// 26.72%
// 的用户
const minimumAbsDifference = function(arr) {
  // 处理一下数组是0或者1长度的情况
  const len = arr.length;
  if (len === 0 || len === 1) {
    return [];
  }
  // 先把数组排序
  arr.sort((a, b) => a - b);

  let min = arr[1] - arr[0];
  let res = [];
  res.push([arr[0], arr[1]]);
  if (len === 2) {
    return res;
  }
  // console.log(arr);
  // 然后循环数组，判断当前元素和前一个元素的绝对值
  for (let i = 2; i < len; i++) {
    const curr = arr[i];
    const before = arr[i - 1];
    // console.log(before, curr);
    if ((curr - before) < min) {
      min = curr - before;
      const item = [before, curr];
      res = [];
      res.push(item);
    } else if ((curr - before) === min) {
      const item = [before, curr];
      res.push(item);
    } else {
      continue;
    }
  }
  // console.log(min);
  return res;
  // 然后设置一个最小值，设置一个存放的数组
};
// @lc code=end

export { minimumAbsDifference };
