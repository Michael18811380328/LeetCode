/*
 * @lc app=leetcode.cn id=941 lang=javascript
 * [941] 有效的山脉数组
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  let len = A.length;
  if (len < 3) return false;
  if (A[0] > A[1]) return false;
  // [1,2,3,4,5] false
  // [9,8,7,6,5,4,3,2,1,0] false
  // [1,2,3,2,3,2,1] false
  // [1,2,3,3,2,1]
  let reach = false;
  for (let i = 0; i < len - 1; i++) {
    if (A[i] < A[i + 1]) {
      if (reach) {
        return false;
      }
      continue;
    }
    else if (A[i] === A[i + 1]) {
      return false;
    }
    else if (A[i] > A[i + 1]) {
      if (!reach) reach = true;
    }
  }
  return reach;
};
