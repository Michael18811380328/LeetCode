/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 思路：回溯算法计算全部的情况
// 把结果数组去重即可
// 用回溯法翻车了
// 现在内存溢出，看来方法不正确
// [4,2,1]
// 32

// var combinationSum4 = function(nums, target) {
//   var deleteSame = (arr) => {
//     let dict = {};
//     let res = [];
//     arr.forEach(item => {
//       let key = String(item);
//       if (!dict[key]) {
//         dict[key] = true;
//         res.push([...item]);
//       }
//     });
//     return res;
//   };
//   const len = nums.length;
//   var backTrack = (tmp, list, currentSum) => {
//     if (currentSum === target) {
//       list.push([...tmp]);
//       return;
//     }
//     if (currentSum > target) {
//       return;
//     }
//     for (let i = 0; i < len; i++) {
//       let current = nums[i];
//       if (currentSum + current > target) {
//         continue;
//       }
//       tmp.push(current);
//       backTrack(tmp, list, currentSum + current);
//       tmp.pop();
//     }
//   };
//   let tmp = [];
//   let list = [];
//   // 回溯
//   let currentSum = 0;
//   backTrack(tmp, list, currentSum);
//   // list 去重
//   list = deleteSame(list);
//   return list.length;
// };

// Your runtime beats 18.52 % of javascript submissions
var combinationSum4 = function(nums, target) {
  // 动态规划（类似背包问题）
  // dp(target) = dp(target - nums1) + dp(target - nums2) + ... + dp(target - numsN)
  // dp(n) if n < 0 return 0; dp(0) === dp(1) === 1
  nums.sort((a, b) => b - a);
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 1; i <= target; i++) {
    let tmp = 0
    nums.forEach(num => {
      if (i - num >= 0) {
        tmp += dp[i - num];
      }
    });
    dp[i] = tmp;
  }
  return dp[target];
};

// [1,2,3]
// 4
// 7
// 应该使用动态规划
// https://leetcode-cn.com/problems/combination-sum-iv/solution/377-zu-he-zong-he-iv-javascript-san-chong-jie-ti-s/

// @lc code=end

