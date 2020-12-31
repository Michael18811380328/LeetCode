/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  // 分治法处理特殊情况
  if (k === 1) {
    return [nums1[0], nums2[0]];
  }
  // 如果两个数组的全部组合小于等于K个，那么直接返回全部组合
  let len1 = nums1.length;
  let len2 = nums2.length;
  let res = [];
  if (len1 * len2 <= k) {
    for (let i = 0; i < len1; i++) {
      let a = nums1[i];
      for (let j = 0; j < len2; j++) {
        let b = nums2[j];
        let item = [a, b];
        res.push(item);
      }
    }
    return res;
  }
  // 如果两个数组的全部组合大于K个，双指针
  let pointer1 = 0;
  let pointer2 = 0;
  res.push([nums1[pointer1], [nums2[pointer2]]]);
  while (res.length < k) {
    // 这样写，前两种情况死循环了
    if ((nums1[pointer1] + nums2[pointer2]) === (nums1[pointer1 + 1] + nums2[pointer2 - 1])) {
      pointer1++;
      pointer2--;
    }
    else if ((nums1[pointer1] + nums2[pointer2]) === (nums1[pointer1 - 1] + nums2[pointer2 + 1])) {
      pointer1--;
      pointer2++;
    }
    else if ((nums1[pointer1 + 1] + nums2[pointer2]) > (nums2[pointer2 + 1] + nums1[pointer1])) {
      pointer2++;
    }
    else {
      pointer1++;
    }
    res.push([nums1[pointer1], [nums2[pointer2]]]);
  }
  return res;
};
// [1,1,2,2,3,3,3,4,4,4,7,8,8,8,8,10]
// [1,2,3,4,5,6,7,8,9,20,30]
// 25

// 这个例子不正确
// @lc code=end

