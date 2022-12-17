/**
 * @param {number[]} nums
 * @return {number}
 */

// 740. 删除并获得点数
// 给你一个整数数组 nums ，你可以对它进行一些操作。
// 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。
// 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。
// 104 ms, 在所有 JavaScript 提交中击败了12.14%

// 考点：动态规划和哈希表
// 1、遍历数组，把数组提取成一个哈希表，同时把原始数组拷贝一份，然后去重排序
// 2、开始动态规划，循环数组
// 如果当前的和前面的是不相邻的，直接加上这个数字 * 出现的个数
// 如果这个数字和前面的是相邻的，那么把这个相邻的数群的开始和结尾找出来，也就是 i 和 k，然后计算 i - k 全部奇数或者偶数的最大值，然后加上去
// 错误思路：这样就实现了动态规划（删除相邻元素）F(n) = Math.max(fn(1) * times(1) + fn(3) * times(3), fn(2) * times(2) + fn(4) * times(4));
// 正确思路：打家劫舍的思路，需要递推，不能直接计算奇数或者偶数项的和

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
  // 3 循环数组，计算最大值（需要辅助函数）
  // 特殊：如果只有1-2项，直接计算出来结果
  if (list.length === 1) {
    return list[0] * nums.length;
  }
  // 这个存放二维数组（如果是不连续的，直接放入；如果是连续的，放入连续的数组）
  const arr = [];
  let startIndex;
  if (list[1] - list[0] === 1) {
    startIndex = list[0];
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] - list[i] > 1 && !startIndex) {
      arr.push(list[i]);
    }
    if (list[i + 1] - list[i] > 1 && startIndex) {
      arr.push([startIndex, list[i]]);
      startIndex = null;
    }
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
  // 辅助函数：计算两个连续数之间的最大值
  // 应该是打家劫舍的思路（动态规划）
  // Max(0) = f(0)
  // Max(1) = Math.max(f(0), f(1))
  // Max(n) = Math.max(Max(n - 2) + f(n), Max(n - 1))
  const getMax = (start, end) => {
    const maxList = [];
    maxList[start] = start * dict[start];
    maxList[start + 1] = Math.max(start * dict[start], (start + 1) * dict[start + 1]);
    for (let i = start + 2; i <= end; i++) {
      maxList[i] = Math.max(maxList[i - 1], maxList[i - 2] + i * dict[i]);
    }
    // console.log(start, end);
    // console.log(maxList);
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

// console.log(deleteAndEarn([3,4])); // 4
// console.log(deleteAndEarn([2,2,3,3,3,4])); // 9
// console.log(deleteAndEarn([3,4,2])); // 6
// console.log(deleteAndEarn([3,4,2, 8, 20, 21,23,22,90,76, 234,355,27,2,3,6,9,8,356])); // 857
// console.log(deleteAndEarn([10,8,4,2,1,3,4,8,2,9,10,4,8,5,9,1,5,1,6,8,1,1,6,7,8,9,1,7,6,8,4,5,4,1,5,9,8,6,10,6,4,3,8,4,10,8,8,10,6,4,4,4,9,6,9,10,7,1,5,3,4,4,8,1,1,2,1,4,1,1,4,9,4,7,1,5,1,10,3,5,10,3,10,2,1,10,4,1,1,4,1,2,10,9,7,10,1,2,7,5])) // 338

export { deleteAndEarn };
