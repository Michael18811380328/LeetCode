/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 注意：每个组合中只能使用一次，includes 一下
var combinationSum2 = function(candidates, target) {
  // 选择数字先排序
  candidates.sort((a, b) => a - b);
  let list = [];
  let tmpList = [];

  var sum = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };

  let getDict = (arr) => {
    let dict = {};
    arr.forEach(item => {
      if (dict[item]) {
        dict[item] = dict[item] + 1;
      } else {
        dict[item] = 1;
      }
    });
    // console.log(dict);
    return dict;
  }

  const candicateDict = getDict(candidates);

  var check = (arr) => {
    let dict = {};
    arr.forEach(item => {
      if (dict[item]) {
        dict[item] = dict[item] + 1;
      } else {
        dict[item] = 1;
      }
      if (dict[item] > candicateDict[item]) {
        return false;
      }
    });
    return true;
  };

  var backTrack = (tmpList) => {
    // 先验证，tmpList 是否重复？每个元素的使用次数是否大于规定？
    if (!check(tmpList)) {
      return;
    }

    let tmpSum = sum(tmpList);
    if (tmpSum > target) {
      return;
    }
    // 不能有重复
    if (tmpSum === target) {
      list.push([...tmpList]);
      return;
    }

    // let tmpDict = getDict(tmpList);
    // console.log(tmpDict);
    // 过滤一下 candidates 不满足的情况
    let last = tmpList[tmpList.length - 1];

    let newCandidates = candidates.filter(candicate => {
      if (candicate < last) {
        return false;
      }
      if (candicate + tmpSum > target) {
        return false;
      }        
      // if (tmpDict[candicate] > 0) {
      //   tmpDict[candicate] = tmpDict[candicate] - 1;
      //   return false;
      // } else {
      //   return true;
      // }
      return true;
    });

    // console.log(newCandidates);
    for (let i = 0; i < newCandidates.length; i++) {
      let item = newCandidates[i];
      tmpList.push(item);
      backTrack(tmpList);
      tmpList.pop();
    }
  };
  // 回溯
  backTrack(tmpList);
  // 去重
  let newList = [];
  let dict = {};
  list.forEach(arr => {
    let key = String(arr);
    if (!dict[key]) {
      newList.push([...arr]);
      dict[key] = true;
    }
  });
  return newList;
};

// 这个情况超时
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
// 27
// @lc code=end

