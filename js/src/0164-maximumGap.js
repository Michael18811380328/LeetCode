/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 常规的算法：直接排序，然后比较相邻元素的差值，获取最大值
 * Your runtime beats 45.06 % of javascript submissions
 * 这个算法在排序时已经是 N * logN 的时间复杂度
 */
var maximumGap = function(nums) {
  const len = nums.length;
  if (len < 2) {
    return 0;
  }
  nums.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  let max = nums[0] - nums[1];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > max) {
      max = nums[i] - nums[i - 1];
    }
  }
  return max;
};

// 官方给出的算法是基数排序，或者桶排序实现
// 这两个算法的时间复杂度最好是 O(n)
// 实际测试发现，JS 内部实现的快速排序，速度比手写的这两个排序效果更快
// @lc code=end

// 下面是基数排序的代码示例（学习）
// https://www.runoob.com/w3cnote/radix-sort.html
// 桶排序：每一个桶是固定的值，然后需要很多桶
// 基数排序：把一个范围作为一个桶，然后把这部分的数值放在桶里（根据键值的每位数字来分配桶）
// 官方：
var maximumGap2 = function(nums) {
  // 处理特殊情况
  const n = nums.length;
  if (n < 2) {
      return 0;
  }

  // 新建一个初始指数（1）
  let exp = 1;
  // 新建一个长度是 N 的空数组
  const buf = new Array(n).fill(0);
  // 计算最大值
  const maxVal = Math.max(...nums);
  
  while (maxVal >= exp) {
      // 新建长度是10的空数组
      const cnt = new Array(10).fill(0);
      // 遍历一次数组，然后把首个数字拿出来，放在对应数组中
      for (let i = 0; i < n; i++) {
          let digit = Math.floor(nums[i] / exp) % 10;
          cnt[digit]++;
      }
      // 然后把这些数字都加起来
      for (let i = 1; i < 10; i++) {
          cnt[i] += cnt[i - 1];
      }
      // 从后往前递归
      for (let i = n - 1; i >= 0; i--) {
          let digit = Math.floor(nums[i] / exp) % 10;
          buf[cnt[digit] - 1] = nums[i];
          cnt[digit]--;
      }
      // 然后数组整体替换，最高位排序结束
      nums.splice(0, n, ...buf);
      // 乘以10，比较下一位
      exp *= 10;
  }

  // 这里是已经排序好的数组，直接求出最大值即可
  let ret = 0;
  for (let i = 1; i < n; i++) {
      ret = Math.max(ret, nums[i] - nums[i - 1]);
  }
  return ret;
};
