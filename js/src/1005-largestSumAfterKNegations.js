/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var getSum = (a) => {
  let res = 0;
  a.forEach(item => res += item);
  return res;
}

var largestSumAfterKNegations = function(A, K) {
  let len = A.length;
  if (len === 0) return 0;
  if (K === 0) {
    // 直接计算当前的和
    return getSum(A);
  }
  // 先给当前的数组排序
  A = A.sort((a, b) => a - b);
  // 如果有负值，那么直接取反处理
  while(A[0] < 0 && K > 0) {
    let tmp = -A[0];
    A.shift();
    A.push(tmp);
    K--;
  }
  // 如果K计算完了，直接计算结果
  if (K === 0) {
    return getSum(A);
  }
  // 如果第一个是0， 直接返回结果
  else if (A[0] === 0) {
    return getSum(A);
  }
  // 如果第一个是正数，而且K没有计算完
  if (A[0] > 0 && A[len - 1] > 0) {
    if (K % 2 === 1) {
      let min = Math.min(A[0], A[len - 1]);
      min === A[0] ? A[0] = -A[0] : A[len - 1] = -A[len - 1];
    }
    return getSum(A);
  }
};
