/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */
// Your runtime beats 33.4 % of javascript submissions
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const len = nums.length;
  let list = [];
  list.push([]);
  if (len === 0) {
    return list;
  }
  else if (len === 1) {
    list.push(nums);
    return list;
  }
  var backTrack = function(current, target, list, lastIndex) {
    if (current.length === target) {
      list.push([...current]);
      return;
    }
    nums.forEach((i, index) => {
      // 应该把当前遍历的index拿过来
      if (
        (current.length === 0 || i >= current[current.length - 1]) &&
        index > lastIndex
      ) {
        current.push(i);
        backTrack(current, target, list, index);
        current.pop();
      }
    });
  }
  nums.sort((a, b) => a - b);
  for (let i = 1; i < len; i++) {
    let target = i;
    let current = [];
    backTrack(current, target, list, -1);
  }
  // 数组去重usedict
  let dict = {};
  for (let i = 1; i < list.length; i++) {
    let key = list[i].toString();
    if (dict[key]) {
      list.splice(i, 1);
      i--;
    } else {
      dict[key] = true;
    }
  }
  list.push(nums);
  return list;
};
// @lc code=end

