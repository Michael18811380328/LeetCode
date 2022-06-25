/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// "选择任意 x 满足 -K <= x <= K，并将 x 加到 A[i] 中"
// 就不能写得明确一点,x是一个整数.将一个x,加入到一个 A[i] ,一个整数加入到另一个整数中???
const smallestRangeI = function(A, K) {
  return Math.max(0, (Math.max(...A) - Math.min(...A) - 2 * K));
};

export { smallestRangeI };
