// 39 组合求和（回溯算法）
var comninationSum = function(candidates, target) {
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
  }
  backTrack(tmpList);
  return list;
};
