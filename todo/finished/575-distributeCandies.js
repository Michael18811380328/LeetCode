/**
 * @param {number[]} candies
 * @return {number}
 */
// 分糖果
// 思路一：396 ms, 在所有 JavaScript 提交中击败了16.83%
var distributeCandies = function(candies) {
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
  let nums = [];
  for (let key in dict) {
    let value = dict[key];
    nums.push(value);
  }
  return Math.min(nums.length, candies.length / 2); 
};

// 思路二：直接把糖果去重，然后就是key的长度
// 148 ms, 在所有 JavaScript 提交中击败了64.36%
var distributeCandies = function(candies) {
  let keys = [...new Set(candies)];
  return Math.min(keys.length, candies.length / 2); 
};