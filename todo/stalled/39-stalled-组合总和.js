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
// 现在代码会超时-代码还会超时
// 看一下怎样减少循环
// [2,3,1,5,20,16,7,9]
// 25
// 现在不应该遍历目标的长度，这是个很大的问题
// 应该 设置目标出现的次数 2 出现几次，然后这样去遍历

var combinationSum = function(candidates, target) {
  // 先排序（不存在重复值）
  candidates.sort((a, b) => a - b);
  // 如果最小的数字大于目标值，那么一定没有合适的值
  if (candidates[0] > target) {
    return [];
  }
  var sum = function(arr) {
    return arr.reduce((a, b) => {return a + b;}, 0);
  }
  var backTrack = function(tmpArr, resultLen, target, list) {
    // 这里处理：如果当前的和已经大于target，直接返回
    const SUM = sum(tmpArr);
    if (SUM > target) return;
    // 如果长度满足目标长度，且相等，那么满足条件并返回
    if (tmpArr.length === resultLen) {
      if (SUM === target) {
        list.push([...tmpArr]);
      }
      return;
    }
    // 如果长度小于目标长度，并且和小于当前目标，那么递归回溯
    for (let i = 0; i <= candidates.length; i++) {
      let current = candidates[i];
      if (tmpArr.length > 0 && current < tmpArr[tmpArr.length - 1]) {
        continue;
      }
      tmpArr.push(current);
      backTrack(tmpArr, resultLen, target, list);
      tmpArr.pop();
    }
  }
  let list = [];
  // 这里遍历一下目标组合的的长度
  const end = Math.ceil(target / candidates[0]);
  for (let i = 1; i <= end; i++) {
    let resultLen = i;
    let tmpArr = [];
    backTrack(tmpArr, resultLen, target, list);
  }
  return list;
};
// @lc code=end

