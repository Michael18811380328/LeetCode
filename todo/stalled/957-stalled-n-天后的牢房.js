/*
 * @lc app=leetcode.cn id=957 lang=javascript
 *
 * [957] N 天后的牢房
 */

// @lc code=start
/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
// N可能出现极大值，那么不能使用循环暴力解决
// 可能M次后出现一次循环，那么就把这个情况记录在哈希表中
// 然后N求余数，计算满足的情况
var prisonAfterNDays = function(cells, N) {
  let hash = [];
  let index = 0;
  // hash[index] = cells.join('');
  // 这是初始化的情况；
  let circle;
  while (index < N) {
    // 获取下一个情况
    let tmp = new Array(8);
    for (let i = 1; i < 7; i++) {
      tmp[i] = cells[i - 1] === cells[i + 1] ? 1 : 0;
    }
    tmp[0] = 0;
    tmp[7] = 0;
    index++;
    let key = tmp.join('');
      // console.log(key === hash[1]);
    if (key === hash[1]) {
      circle = index - 1;
      break;
    }
    hash[index] = key;
    cells = tmp;
  }
  // N小于一个周期
  // N小于一个周期
  if (index === N) {
    return hash[index].split('');
  }
  // 这里不正确
  // N大于一个周期
  let n = N % circle;
  // console.log(hash);
  // console.log(n);
  return hash[n].split('');
};

// 现在不正确
// [0,1,0,1,1,0,0,1]
// 7
// [0,0,1,1,1,1,0,0]
// 8
// @lc code=end

