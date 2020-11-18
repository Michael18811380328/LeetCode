/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
//     遍历一次数组，然后把不同糖果的出现的频率获取到
//     存放在一个哈希表中。
  const len = candies.length;
  let dict = {};
  for (let i = 0; i < len; i++) {
    let key = candies[i];
    if (dict[key]) {
      dict[key]++;
    } else {
      dict[key] = 1;
    }
  }
  console.log(dict);
  let nums = [];
  for (let key in dict) {
    let value = dict[key];
    nums.push(value);
  }
  return nums.length;
  //     然后把哈希表中的出现次数 value 按照从小到大的顺序排列
//     然后求和，直到当前的数量大于一半的总数即可
  // nums.sort((a, b) => a - b);
  // const len2 = len / 2;
  // console.log(nums);
  // let sum = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   sum += nums[i];
  //   if (sum > len2) {
  //     return i;
  //   }
  // }
  // return len2;
};
// @lc code=end

