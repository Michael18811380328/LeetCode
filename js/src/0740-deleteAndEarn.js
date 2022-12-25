// 740. 删除并获得点数
// 给你一个整数数组 nums ，你可以对它进行一些操作。
// 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。
// 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。
// 104 ms, 在所有 JavaScript 提交中击败了12.14%
// 考点：动态规划和哈希表
// 1、遍历数组，把数组提取成一个哈希表，同时把原始数组拷贝一份，然后去重排序
// 2、开始动态规划，循环数组（打家劫舍的思路，需要递推，不能直接计算奇数或者偶数项的和）
/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function(nums) {
  // 1 构建哈希表（存储出现的次数）
  const dict = {};
  nums.forEach((item) => {
    if (dict[item]) {
      dict[item] = dict[item] + 1;
    } else {
      dict[item] = 1;
    }
  });
  // 2 构建纯净数组
  const list = Array.from(new Set(nums)).sort((a, b) => a > b ? 1 : -1);
  // 3 循环数组计算最大值
  // 特殊：如果只有1项，直接计算出来结果
  if (list.length === 1) {
    return list[0] * nums.length;
  }
  // 这个存放二维数组
  const arr = [];
  let startIndex;
  if (list[1] - list[0] === 1) {
    startIndex = list[0];
  }
  for (let i = 0; i < list.length; i++) {
    // 如果前后元素是不连续的，直接放入
    if (list[i + 1] - list[i] > 1 && !startIndex) {
      arr.push(list[i]);
    }
    if (list[i + 1] - list[i] > 1 && startIndex) {
      arr.push([startIndex, list[i]]);
      startIndex = null;
    }
    // 如果前后元素是连续的，放入连续的数组
    if (list[i + 1] - list[i] === 1 && !startIndex) {
      startIndex = list[i];
    }
    if (list[i + 1] - list[i] === 1 && startIndex) {
      continue;
    }
    // 最后一个不存在的情况
    if (!list[i + 1] && startIndex) {
      arr.push([startIndex, list[i]]);
    }
    if (!list[i + 1] && !startIndex) {
      arr.push(list[i]);
    }
  }
  // 辅助函数：计算两个连续数之间的最大值，打家劫舍的思路（动态规划）
  const getMax = (start, end) => {
    const maxList = [];

    // Max(0) = f(0)
    maxList[start] = start * dict[start];

    // Max(1) = Math.max(f(0), f(1))
    maxList[start + 1] = Math.max(maxList[start], (start + 1) * dict[start + 1]);

    // Max(n) = Math.max(Max(n - 2) + f(n), Max(n - 1))
    for (let i = start + 2; i <= end; i++) {
      maxList[i] = Math.max(maxList[i - 1], maxList[i - 2] + i * dict[i]);
    }
    return maxList[maxList.length - 1];
  };

  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      tmp += arr[i] * dict[arr[i]];
    }
    else {
      tmp += getMax(arr[i][0], arr[i][1]);
    }
  }
  return tmp;
};

export { deleteAndEarn };
