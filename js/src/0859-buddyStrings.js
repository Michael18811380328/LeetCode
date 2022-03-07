/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

//
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
// 88 ms
// , 在所有 JavaScript 提交中击败了
// 89.20%
// 的用户
const buddyStrings = function(A, B) {
  const len = A.length;
  // len === 0?
  if (len !== B.length) {
    return false;
  }
  const arr = [];
  const dict = {};
  // 是否有相同的键
  let hasSame = false;
  for (let i = 0; i < len; i++) {
    // if (A[i] === B[i]) continue
    if (A[i] !== B[i]) {
      arr.push(i);
      if (arr.length > 2) return false;
    }
    if (!hasSame) {
      const key = A[i];
      if (!dict[key]) {
        dict[key] = true;
      } else {
        hasSame = true;
      }
    }
  }
  // 如果是1的话，一定是不能的
  if (arr.length === 1) return false;
  // 如果是0的话，那么看是否有重复的元素
  if (arr.length === 0) return hasSame;
  const start = arr[0]; const
    end = arr[1];
  if (A[start] === B[end] && A[end] === B[start]) {
    return true;
  } else {
    return false;
  }
};

// 输入： A = "aa", B = "aa"
// 输出： true
