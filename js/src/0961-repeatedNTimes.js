/**
 * @param {number[]} A
 * @return {number}
 */
// 92 ms, 在所有 JavaScript 提交中击败了70.56%
const repeatedNTimes = function(A) {
  const hash = {};
  const len = A.length;
  for (let i = 0; i < len; i++) {
    const key = A[i];
    if (hash[key]) {
      return key;
    } else {
      hash[key] = 1;
    }
  }
};

export { repeatedNTimes };
