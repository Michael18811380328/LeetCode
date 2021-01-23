/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 考点：回溯算法
// 无限制选取：每次都可以从当前的值开始选择（candidates排序）
// 注意：无重复
// 104 ms, 在所有 JavaScript 提交中击败了58.52%
var combinationSum = function(candidates, target) {
  // 选择数字先排序
  candidates.sort((a, b) => a - b);
  let list = [];
  let tmpList = [];
  // 回溯
  backTrack(candidates, tmpList, list, target);
  return list;
};

var sum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

var backTrack = (candidates, tmpList, list, target) => {
  let tmpSum = sum(tmpList);
  if (tmpSum > target) {
    return;
  }
  if (tmpSum === target) {
    list.push([...tmpList]);
    return;
  }
  // 回溯
  for (let i = 0; i < candidates.length; i++) {
    let item = candidates[i];
    let last = tmpList[tmpList.length - 1];
    if (item < last) {
      continue;
    }
    else if (item + tmpSum > target) {
      break;
    }
    else {
      tmpList.push(item);
      backTrack(candidates, tmpList, list, target);
      tmpList.pop();
    }
  }
};

// 优化后
// 80 ms, 在所有 JavaScript 提交中击败了99.82%
var combinationSum = function(candidates, target) {
  // 选择数字先排序
  candidates.sort((a, b) => a - b);
  let list = [];
  let tmpList = [];
  var sum = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };
  const len = candidates.length;
  var backTrack = (tmpList) => {
    let tmpSum = sum(tmpList);
    if (tmpSum > target) {
      return;
    }
    if (tmpSum === target) {
      list.push([...tmpList]);
      return;
    }
    for (let i = 0; i < len; i++) {
      let item = candidates[i];
      let last = tmpList[tmpList.length - 1];
      if (item < last) {
        continue;
      }
      else if (item + tmpSum > target) {
        break;
      }
      else {
        tmpList.push(item);
        backTrack(tmpList);
        tmpList.pop();
      }
    }
  };
  // 回溯
  backTrack(tmpList);
  return list;
};
// @lc code=end

