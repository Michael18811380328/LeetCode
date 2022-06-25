// 128
// 100 ms, 在所有 JavaScript 提交中击败了55.81%
const longestConsecutive = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let arr = nums.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  arr = [...new Set(arr)];
  let max = 1;
  let curr = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      curr += 1;
    } else {
      max = Math.max(max, curr);
      curr = 1;
    }
  }
  max = Math.max(max, curr);
  return max;
};

export { longestConsecutive };

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]) === 4);
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]) === 9);
// console.log(longestConsecutive([1, 2, 0, 1]) === 3);

// https://leetcode-cn.com/problems/longest-consecutive-sequence/
// 现在有两个思路：
// 1 先排序，然后遍历一次数组，那么就是 N + logN * N 的时间复杂度
// 2 直接遍历数组，把数组出现的数字存储在字典中，并标记相邻的元素（多个数组）
