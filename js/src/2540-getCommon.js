/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 思路1，遍历两个数组，找到最小值；
const getCommon1 = function(nums1, nums2) {
  // 处理极端值，没有最小公共值
  if (nums1[0] > nums2[nums2.length - 1]) return -1;
  if (nums2[0] > nums1[nums1.length - 1]) return -1;
  const dict = {};
  for (let i = 0; i < nums1.length; i++) {
    dict[nums1[i]] = true;
  }
  for (let j = 0; j < nums2.length; j++) {
    if (dict[nums2[j]]) {
      return nums2[j];
    }
  }
  return -1;
};

// 思路2：双指针，获取最小值
// 68 ms, 在所有 JavaScript 提交中击败了90.65%
const getCommon2 = function(nums1, nums2) {
  // 处理极端值，没有最小公共值
  if (nums1[0] > nums2[nums2.length - 1]) return -1;
  if (nums2[0] > nums1[nums1.length - 1]) return -1;
  let pointer1 = 0;
  let pointer2 = 0;
  while (nums1[pointer1] && nums2[pointer2]) {
    if (nums1[pointer1] === nums2[pointer2]) {
      return nums1[pointer1];
    }
    else if (nums1[pointer1] < nums2[pointer2]) {
      pointer1++;
    }
    else {
      pointer2++;
    }
  }
  return -1;
};

export { getCommon1, getCommon2 };
