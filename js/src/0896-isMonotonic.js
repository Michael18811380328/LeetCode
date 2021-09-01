// 896. 单调数列
// 如果数组是单调递增或单调递减的，那么它是单调的。
// 如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。
// 当给定的数组 A 是单调数组时返回 true，否则返回 false。
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  // 处理空数组或者长度是12的情况
  const len = A.length;
  if (len < 3) {
    return true
  }
  // 设置默认的是 undefined
  let flag = null;
  // 循环数组，如果出现一次大于，那么变成true，出现小于变成false，等于就是continue
  // 如果再次出现相反的值，那么就返回false
  for (let i = 1; i < len; i++) {
    if (A[i] === A[i - 1]) {
      continue;
    }
    else if (A[i] < A[i - 1]) {
      if (flag === true) {
        continue;
      } else if (flag === false) {
        return false;
      } else if (flag === null) {
        flag = true;
      }
    }
     else if (A[i] > A[i - 1]) {
      if (flag === false) {
        continue;
      } else if (flag === true) {
        return false;
      } else if (flag === null) {
        flag = false;
      }
    }
  }
  return true;
};

// 思路二：先数组去重，然后计算长度，这样可以不需要比较重复的部分
