// 长度最小的子数组
// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
// 输入: s = 7, nums = [2,3,1,2,4,3]
// 输出: 2
// 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。

// 解析：
// 定义两个指针 left 和 right ，分别记录子数组的左右的边界位置。
// （1）让 right 向右移，直到子数组和大于等于给定值或者 right 达到数组末尾；
// （2）更新最短距离，将 left 像右移一位, sum 减去移去的值；
// （3）重复（1）（2）步骤，直到 right 到达末尾，且 left 到达临界位置

let fn = (nums, s) => {
  const len = nums.length;
  let left = 0;
  let right = 0;

  let currentSum = nums[0];
  // 先获取第一个满足的右侧边界
  while (currentSum < s) {
    right++;
    // 如果数组全部的和没有大于S，没有子数组满足，那么直接返回0
    if (right === len) {
      return 0;
    }
    currentSum += nums[right];
  }
  let minLen = right - left + 1;
  // 循环后面的元素
  while (right < len && left <= right) {
    // 如果当前和大于S，那么左指针向右移动，当前和减少
    if (currentSum > s) {
      currentSum = currentSum - nums[left];
      left++;
    }
    // 如果当前和小于等于S，那么右指针向右移动，当前的和增加
    else {
      right++;
      // 如果右指针已经到达最后，跳出循环
      if (nums[right] === undefined) {
        break;
      }
      currentSum = currentSum + nums[right];
    }
    // 如果当前的和大于S，那么计算左右指针的差，即当前子数组的长度
    if (currentSum >= s) {
      let currentLen = right - left + 1;
      // 求最短子数组的长度
      if (currentLen < minLen) {
        minLen = currentLen;
      }
    }
  }
  return minLen;
};

console.log(fn([2,3,1,2,4,3], 7) === 2);
console.log(fn([2,3,1,2,4,3], 120) === 0);
