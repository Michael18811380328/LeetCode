/**
 * [2248] 多个数组求交集
 * @param {number[][]} nums
 * @return {number[]}
 * Your runtime beats 45.9 % of javascript submissions
 */
const intersection = function(nums) {
  const length1 = nums.length;
  // 数组降维排序
  const list = nums.flat().sort((a, b) => a > b ? 1 : -1);
  const res = [];
  let previous = list[0];
  let time = 1;
  // 循环一次数组
  for (let i = 1; i < list.length; i++) {
    if (list[i] === previous) {
      time++;
    } else {
      if (time === length1) {
        res.push(previous);
      }
      previous = list[i];
      time = 1;
    }
  }
  if (time === length1) {
    res.push(previous);
  }
  return res;
};

// 更好的思路：直接遍历一次数组，然后用字典记录出现的次数，遍历字典的键，判断次数等于数组的长度即可
// 在所有 JavaScript 提交中击败了62.22%
const intersection2 = function(nums) {
  const len = nums.length;
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      const curr = nums[i][j];
      if (!dict[curr]) {
        dict[curr] = 0;
      }
      dict[curr] = dict[curr] + 1;
    }
  }
  let result = [];
  for (const key in dict) {
    if (dict[key] === len) {
      result.push(Number(key));
    }
  }
  result = result.sort((a, b) => a > b ? 1 : -1);
  return result;
};

export { intersection, intersection2 };
