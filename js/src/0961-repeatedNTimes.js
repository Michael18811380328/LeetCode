/**
 * @param {number[]} A
 * @return {number}
 */
// 92 ms, 在所有 JavaScript 提交中击败了70.56%
var repeatedNTimes = function(A) {
  let hash = {};
  const len = A.length;
  for (let i = 0; i < len; i++) {
    let key = A[i];
    if (hash[key]) {
      return key;
    } else {
      hash[key] = 1;
    }
  }
};
