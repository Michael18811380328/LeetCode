/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */
// [10,3,8,9,4]
// ["Gold Medal","Silver Medal","Bronze Medal","4","5"] 输出
// ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
/**
 * @param {number[]} nums
 * @return {string[]}
 */
// 128 ms, 在所有 JavaScript 提交中击败 43.75%
var findRelativeRanks = function(nums) {
  const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  // 思路：首先把每一个变成一个对象，存储分数和序号
  for (let i = 0; i < nums.length; i++) {
    let score = nums[i];
    let index = i;
    nums[i] = { score, index };
  }
  // 这里不能这样排序
  // 然后数组按照分数排序
  nums.sort(function(a, b) {
    return a.score < b.score ? 1 : -1;
  });
  // 然后把分数转换成前三个字符串
  for (let i = 0; i < nums.length; i++) {
    if (i <= 2) {
      nums[i]['sequence'] = medals[i];
    } else {
      nums[i]['sequence'] = String(i + 1);
    }
  }
  // 然后按照序号排序依次
  nums.sort(function(a, b) {
    return a.index > b.index ? 1 : -1;
  });
  // 然后遍历数组，输出对应的排名
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i]['sequence'];
    result.push(item);
  }
  return result;
};
