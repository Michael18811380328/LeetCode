/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
// 96 ms
// , 在所有 JavaScript 提交中击败了
// 70.50%
// 的用户
var shortestToChar = function(S, C) {
  // indexOf(item, start)
  let res = new Array(S.length);
  let arr = [];
  // 开始获取C的位置
  let start = 0;
  let index = S.indexOf(C, start);
  res[index] = 0;
  arr.push(index);
  // 把全部的index找到并设置成0
  while (index > -1) {
    start = index;
    index = S.indexOf(C, start + 1);
    if (index !== -1) {
      res[index] = 0;
      arr.push(index);
    }
  }
  // let arr = []; 这里充填的就是C的位置，然后依次循环处理其他的边界条件
  if (arr[0] !== 0) {
    for (let i = 0; i < arr[0]; i++) {
      res[i] = arr[0] - i;
    }
  }
  if (arr[arr.length - 1] !== S.length - 1) {
    let tmp = 1; 
    for (let i = arr[arr.length - 1] + 1; i < S.length; i++) {
      res[i] = tmp;
      tmp++;
    }
  }
  // 下面处理中间的情况
  for (let i = 0; i < arr.length - 1; i++) {
    let start = arr[i];
    let end = arr[i + 1];
    if (start === end - 1) continue;
    let tmp = 1;
    while (start < end - 1) {
      start++;
      end--;
      res[start] = tmp;
      res[end] = tmp;
      tmp++;
    }
  }
  return res;
};
// @lc code=end

