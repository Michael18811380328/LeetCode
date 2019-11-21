// 977 有序数组的平方
function sortedSquares(A) {
  let index = A.length - 1;
  // 首先把大于0的元素获取平方，这部分是已经排序的
  for (let i = index; i >= 0; i--) {
    if (A[i] >= 0) {
      A[i] **= 2;
    } else {
      break;
    }
  }
  // 然后计算小于0的平方。
  // 从一个开始，并把平方后的数字插入到已经排序的后面的数组中。
  while (A[0] < 0) {
    const item = A[0] ** 2;
    if (item > A[index]) {
      A.push(item);
      // 如果平方比最后一个大，那么直接插入最后的位置
    } else {
      // 否则，依次向前插入
      while (item < A[index]) {
        index--;
      }
      A.splice(index + 1, 0, item);
    }
    A.shift(1);
  }
  return A;
}

// 88 merge two sequence array
// 合并两个有序数组（双指针）
function mergeTwoArray(nums1, m, nums2, n) {
  if (n === 0) return;
  if (m === 0) {
    nums1.splice(0, n, ...nums2);
    return nums1;
  }
  nums1.splice(m, n);
  let index = 0;
  // 两个循环，双指针
  for (let i = 0; i < n; i++) {
    while (nums2[i] > nums1[index]) {
      index++;
    }
    nums1.splice(index, 0, nums2[i]);
  }
  return nums1;
}
