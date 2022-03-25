// 239 滑动窗口的最大值

// 思路1：算法不好
// 4476 ms, 在所有 JavaScript 提交中击败了27.75%的用户
// 时间复杂度：列表长度 * 滑动窗口长度，能否有更好的方法（进入队列能否优化）
// 空间复杂度：会频繁操作数组
// 不好的原因：每次都把数字放在临时数组中，然后求最大值，这样是 n ^ 2
const maxSlidingWindow = function(nums, k) {
  const len = nums.length;
  if (k === 1) {
    return nums;
  }
  if (len === 1) {
    return nums[0];
  }
  // list 是单调递减的双端队列
  let list = [];
  list[0] = 0;
  // 初始化前面几个值
  for (let i = 1; i < k; i++) {
    const item = nums[i];
    const listLen = list.length;
    // 如果当前的值小于最后一个的值，直接插入到队列最后
    if (nums[list[listLen - 1]] > item) {
      list.push(i);
    }
    // 否则，找到合适的位置，插入队列中
    else {
      // 这里放入过程性能很差！
      for (let j = 0; j < listLen; j++) {
        if (nums[list[j]] <= item) {
          list.splice(j, listLen - j, i);
          break;
        }
      }
    }
  }
  // 现在已经把开始的K个元素放入了队列中，然后开始遍历剩下的数字，然后获取最大值
  const res = [];
  res[0] = nums[list[0]];
  for (let i = k; i < len; i++) {
    const item = nums[i];
    const listLen = list.length;
    // 如果新增的值小于最小的，那么直接插入最后
    if (nums[list[listLen - 1]] > item) {
      list.push(i);
    } else {
      // 这里需要遍历获取最大值，性能不好
      for (let j = 0; j < listLen; j++) {
        if (nums[list[j]] < item) {
          list.splice(j, listLen - j, i);
          break;
        }
      }
    }
    // 把距离大于K的都删除掉
    list = list.filter((item) => {
      return i - item < k;
    });
    res.push(nums[list[0]]);
  }
  return res;
};

/**
 * 思路2：滑动窗口的最大值（滑动窗口 + 双端队列）
 * 滑动窗口存放数组的索引
 * 每次滑动后，临时数组加入新的元素，并把小于等于这个数的全部都去掉
 * 这样确保临时数组的第一个元素是最大的元素
 * 272 ms 在所有 JavaScript 提交中击败了 90.34%
 * @param {array} nums 原始数组
 * @param {number} k 滑动窗口的区间（固定区间）
 */
const maxSlidingWindow2 = function(nums, k) {
  // 窗口数组（存放索引）
  const window = [];
  // 结果数组（存放最大值的结果）
  const res = [];
  // 循环数组（开始滑动窗口）
  for (let i = 0; i < nums.length; i++) {
    // 先把窗口外的元素去掉(如果当前索引，和第一个索引的差，大于窗口区间，直接去掉第一个)
    if (i - window[0] > k - 1) {
      window.shift();
    }
    // 把比新的元素小的数字对应的索引，全部去掉
    while (window.length > 0 && nums[window[window.length - 1]] <= nums[i]) {
      window.pop();
    }
    // 把新的元素放进去
    window.push(i);
    // 如果已经到达窗口区间，那么把第一个数（最大的数）放在结果数组中
    if (i >= k - 1) {
      res.push(nums[window[0]]);
    }
  }
  return res;
};

export { maxSlidingWindow, maxSlidingWindow2 };

// const maxSlidingWindow3 = function(nums, k){
//   let window = [];
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i - k > window[0] - 1) {
//       window.shift();
//     }
//     if (window.length > 0 && nums[window[window.lenght - 1]] <= nums[i]) {
//       window.pop();
//     }
//     window.push(i);
//     if (i >= k - 1) {
//       result.push(nums[window[0]]);
//     }
//   }
//   return result;
// }
