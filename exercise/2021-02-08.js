// 39 组合求和
// 外部函数（对数据排序预处理，设置临时数组和目标数组）
let combination = (candidates, targets) => {
  candidates.sort((a, b) => a - b);
  let list = [];
  let tmpList = [];
  backTrack(candidates, tmpList, list, targets);
  return list;
};

// 辅助函数：计算数组的和 
let sum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

// 回溯函数（核心减少回溯递归的次数，判断边界条件）
let backTrack = (candidates, tmpList, list, target) => {
  let tmpSum = sum(tmpList);
  if (tmpSum > target) {
    return;
  }
  if (tmpSum === target) {
    list.push([...tmpList]);
    return;
  }
  for (let i = 0; i < candidates.length; i++) {
    let item = candidates[i];
    let last = tmpList[tmpList.length - 1];
    if (item < last) {
      return;
    } else if (item + tmpSum > target) {
      break;
    } else {
      tmpList.push(item);
      backTrack(candidates, tmpList, list, target);
    }
  }
};

// 优化后的函数
let combinationSum = function(candidates, taregt) {
  candidates.sort((a, b) => a - b);
  let list = [];
  let tmpList = [];
  let sum = (arr) => {
    // 这里应该先转换成字符串，然后把结果保存到字典中。
    // 如果第二次求得是相同的数组的和，那么直接从字典中获取值即可
    // 这里应该统计一下求和的数组
    return arr.reduce((a, b) => a + b, 0);
  }
  const len = candidates.length;
  let backTrack = (tmpList) => {
    let tmpSum = sum(tmpList);
    if (tmpSum > taregt) {
      return;
    }
    if (tmpSum === taregt) {
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
  backTrack(tmpList);
  return list;
};