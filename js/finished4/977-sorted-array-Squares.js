// 977. 有序数组的平方
// 给定一个按非递减顺序排序的整数数组A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
// 输入：[-4,-1,0,3,10]
// 输出：[0,1,9,16,100]

/**
 * @param {number[]} A
 * @return {number[]}
 */
// 168 ms , 在所有 javascript 提交中击败了 76.05%
// 思路1：计算每个数的平方，然后重新排序。但是这样已经排序条件就没用了
function sortedSquares(A) {
  // 1. 从右侧开始循环，计算右侧的大于0的数的平方；
  let index = A.length - 1;
  for (let i = index; i >= 0; i--) {
    if (A[i] >= 0) {
      A[i] **= 2;
    } else {
      break;
    }
  }
  // 2. while 第一个数小于0，把第一个数取出来，计算第一个数的平方，然后遍历，splice插入，记录当前的index。
  while (A[0] < 0) {
    const item = A[0] ** 2;
    if (item > A[index]) {
      A.push(item);
    } else {
      while (item < A[index]) {
        index--;
      }
      A.splice(index + 1, 0, item);
    }
    A.shift(1);
  }
  return A;
}

// 思路二: 有序数组，使用双指针实现（性能也不太好）
function sortedSquares2(A) {
  const res = [];
  let left = 0;
  let right = A.length - 1;
  while (left <= right) {
    let current;
    if (Math.abs(A[left]) < Math.abs(A[right])) {
      current = A[right];
      right--;
    } else {
      current = A[left];
      left++;
    }
    res.unshift(current * current);
  }
  return res;
}

function sortedSquares3(A) {
  for (let i = 0, len = A.length; i <= len - 1; i++) {
    A[i] *= A[i];
  }
  A.sort((a, b) => a - b);
  return A;
}

// 思路2：
// 1. 从右侧开始循环，计算右侧的大于0的数的平方；
// 2. while 第一个数小于0，把第一个数取出来，计算第一个数的平方，然后遍历，splice插入，记录当前的index。

export { sortedSquares, sortedSquares2, sortedSquares3 };
