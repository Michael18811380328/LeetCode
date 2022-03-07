/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// [39] 组合总和
// 考点：回溯算法
// 无限制选取：每次都可以从当前的值开始选择（candidates排序）
// 注意：无重复
// 104 ms, 在所有 JavaScript 提交中击败了58.52%
const combinationSum = function(candidates, target) {
  // 选择数字先排序
  candidates.sort((a, b) => a - b);
  const list = [];
  const tmpList = [];
  backTrack(candidates, tmpList, list, target);
  return list;
};

const sum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

const backTrack = (candidates, tmpList, list, target) => {
  const tmpSum = sum(tmpList);
  if (tmpSum > target) {
    return;
  }
  if (tmpSum === target) {
    list.push([...tmpList]);
    return;
  }
  for (let i = 0; i < candidates.length; i++) {
    const item = candidates[i];
    const last = tmpList[tmpList.length - 1];
    if (item < last) {
      continue;
    } else if (item + tmpSum > target) {
      break;
    } else {
      tmpList.push(item);
      backTrack(candidates, tmpList, list, target);
      tmpList.pop();
    }
  }
};

// 优化后 80 ms, 在所有 JavaScript 提交中击败了99.82%
const combinationSum = function(candidates, target) {
  // 选择数字先排序
  candidates.sort((a, b) => a - b);
  const list = [];
  const tmpList = [];
  const sum = (arr) => {
    // todo：这里应该先转换成字符串，然后把结果保存到字典中。
    // 如果第二次求得是相同的数组的和，那么直接从字典中获取值即可
    // 这里应该统计一下求和的数组
    return arr.reduce((a, b) => a + b, 0);
  };
  const len = candidates.length;
  const backTrack = (tmpList) => {
    const tmpSum = sum(tmpList);
    if (tmpSum > target) {
      return;
    }
    if (tmpSum === target) {
      list.push([...tmpList]);
      return;
    }
    for (let i = 0; i < len; i++) {
      const item = candidates[i];
      const last = tmpList[tmpList.length - 1];
      if (item < last) {
        continue;
      } else if (item + tmpSum > target) {
        break;
      } else {
        tmpList.push(item);
        backTrack(tmpList);
        tmpList.pop();
      }
    }
  };
  backTrack(tmpList);
  return list;
};
