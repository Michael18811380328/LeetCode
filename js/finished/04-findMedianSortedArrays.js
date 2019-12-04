// 04
// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
// 你可以假设 nums1 和 nums2 不会同时为空。(如果有一个是空的情况)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 尝试用双指针解决:bug
function findMedianSortedArrays(nums1, nums2) {
  const len1 = nums1.length, len2 = nums2.length;
  const middle = (len1 + len2) / 2;
  let index1 = null, index2 = null;
  // 这里判断奇数还是偶数
  if (middle % 1 !== 0) {
    index1 = middle - 0.5;
  } else {
    index1 = middle - 1;
    index2 = middle;
  }
  // len 是长度，index 是数组下标，需要减一
  // 先处理1个数组是0的情况
  if (len1 === 0) {
    if (index2) {
      return (nums2[index1] + nums2[index2]) / 2;
    } else {
      return nums2[index1];
    }
  }
  if (len2 === 0) {
    if (index2) {
      return (nums1[index1] + nums1[index2]) / 2;
    } else {
      return nums1[index1];
    }
  }
  if (len1 === 1 && len2 === 1) {
    return (nums1[0] + nums2[0]) / 2;
  }
  // 处理两个数组都不是空的情况，使用第三个数组和双指针
  if (index2) {
    // 偶数，需要获取两个数并计算平均数
    let i = 0, j = 0, sum = [];
    // 能否改成一个变量？这里不需要数组，直接使用一个临时变量，记录上一个参数是多少就行
    while (i + j <= index2) {
      if (nums1[i] <= nums2[j] && nums1[i] !== undefined) {
        sum.push(nums1[i]);
        i++;
      } else if (nums2[j] !== undefined) {
        sum.push(nums2[j]);
        j++;
      } else {
        // console.log(i, j, index2);
        if (i + 1 === len1) {
          // 第一个数列结束了，第二个剩余
          let tmp = index2 - i;
          return ((nums2[tmp] + nums2[tmp - 1]) / 2);
        } else {
          // 第二个结束了，第一个剩余
          let tmp = index2 - j;
          return ((nums1[tmp] + nums1[tmp - 1]) / 2);
        }
      }
      if (i + j - 1 === index2) {
        return ((sum[i + j - 1] + sum[i + j - 2]) / 2);
      }
    }
  } else {
    // 奇数，计算当时的那个中位数即可
    let i = 0, j = 0;
    while (i + j <= index1) {
      if (nums1[i] <= nums2[j] && nums1[i] !== undefined) {
        i++;
      } else if (nums2[j] !== undefined) {
        j++;
      } else {
        if (i + 1 === len1) {
          return nums2[index1 - i];
        } else {
          return nums1[index1 - j];
        }
        // console.log(i, j, index1)
        // 一个已经结束，另一个还有很多
        // i + j < index1 其中一个已经循环结束了
        // 那么直接返回剩余的一个数组的 index1 - i 即可
      }
      if (i + j === index1) {
        if (nums1[i] === undefined) return nums2[j];
        if (nums2[j] === undefined) return nums1[i];
        return nums1[i] < nums2[j] ? nums1[i] : nums2[j];
      }
    }
  }
}

// 现在情况比较多：使用基础方法先完成
// 把排序后的数组合并到一起，然后重新排序，获取中位数即可
// 156 ms, 在所有 javascript 提交中击败了48.38%
function findMedianSortedArrays2(nums1, nums2) {
  let arr = nums1.concat(nums2);
  arr.sort((a, b) => {
    return a - b;
  });
  const len = arr.length;
  const middle = len / 2;
  let index1 = null, index2 = null;
  if (middle % 1 !== 0) {
    index1 = middle - 0.5;
  } else {
    index1 = middle - 1;
    index2 = middle;
  }
  if (index2) {
    return (arr[index1] + arr[index2]) / 2;
  } else {
    return arr[index1];
  }
}

// 思路：还是双指针：把排序数组的最小的一个放在第三个数组中，如果一个是空，那么就放另一个，如果结果数组的长度大于index2，那么返回结果数组的最后两项

export { findMedianSortedArrays, findMedianSortedArrays2 };





