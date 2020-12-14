/*
 * @lc app=leetcode.cn id=1640 lang=javascript
 *
 * [1640] 能否连接形成数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
// 100 ms, 在所有 JavaScript 提交中击败了12.59%
var canFormArray = function(arr, pieces) {
  // 如果两个数组长度不同，那么一定不能组成
  const len1 = arr.length;
  let len2 = 0;
  for (let i = 0; i < pieces.length; i++) {
    len2 += pieces[i].length;
  }
  if (len1 !== len2) {
    return false;
  }
  // 如果子数组长度是1，并且可以index到，那么继续找
  // 如果不可以index，那么就找不到
  for (let i = 0; i < pieces.length; i++) {
    let inner = pieces[i];
    if (inner.length === 0) {
      continue;
    }
    else if (inner.length === 1) {
      if (arr.indexOf(inner[0]) === -1) return false;
    }
    else {
      let index = arr.indexOf(inner[0]);
      if (index === -1) return false;
      // 如果子数组长度超过1，那么不同之间index应该是连接的
      for (let i = 1; i < inner.length; i++) {
        if (inner[i] !== arr[index + i]) {
          return false;
        }
      }
    }
  }
  return true;
};

// 现在算法太差了，未来需要优化一下
// 改进版本
// 84 ms
var canFormArray = function(arr, pieces) {
  // 如果子数组长度是1，并且可以index到，那么继续找
  // 如果不可以index，那么就找不到
  for (let i = 0; i < pieces.length; i++) {
    let inner = pieces[i];
    if (inner.length === 1) {
      if (arr.indexOf(inner[0]) === -1) return false;
    }
    else if (inner.length > 1) {
      let index = arr.indexOf(inner[0]);
      if (index === -1) return false;
      // 如果子数组长度超过1，那么不同之间index应该是连接的
      for (let i = 1; i < inner.length; i++) {
        if (inner[i] !== arr[index + i]) {
          return false;
        }
      }
    }
  }
  return true;
};

// 改进3
// 80 ms
// , 在所有 JavaScript 提交中击败了
// 79.63%
var canFormArray = function(arr, pieces) {
  // 如果子数组长度是1，并且可以index到，那么继续找
  // 如果不可以index，那么就找不到
  for (let i = 0; i < pieces.length; i++) {
    let inner = pieces[i];
    let index = arr.indexOf(inner[0]);
    if (index === -1) return false;
    if (inner.length > 1) {
      // 如果子数组长度超过1，那么不同之间index应该是连接的
      for (let i = 1; i < inner.length; i++) {
        if (inner[i] !== arr[index + i]) {
          return false;
        }
      }
    }    
  }
  return true;
};

// @lc code=end

