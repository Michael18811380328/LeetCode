/*
 * @lc app=leetcode.cn id=40 lang=javascript
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 思路一：回溯算法（针对特殊用例，使用了特殊的写法）
// 性能比较差
// 604 ms, 在所有 JavaScript 提交中击败了5.94%
const combinationSum2 = function(candidates, target) {
  //  辅助函数：求数组的和
  const sum = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };
  // 辅助函数：数组转换成对象存储
  // let getDict = (arr) => {
  //   let dict = {};
  //   arr.forEach(item => {
  //     if (dict[item]) {
  //       dict[item] = dict[item] + 1;
  //     } else {
  //       dict[item] = 1;
  //     }
  //   });
  //   return dict;
  // }

  // 特殊情况处理：如果数组求和后，小于目标值，那么直接返回空
  // [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 27
  if (sum(candidates) < target) {
    return [];
  }

  // 数字排序
  candidates.sort((a, b) => a - b);
  const list = [];
  const tmpList = [];

  // 特例特办：如果排序后，最后一个仍然是1，那么直接构造一个数组直接返回即可（只有一个情况）
  // 这个不是根本解决方法
  if (candidates[candidates.length - 1] === 1) {
    const a = new Array(target).fill(1);
    return [a];
  }

  // const candicateDict = getDict(candidates);

  // 判断当前数组中，使用次数是否超过全部的元素（回溯应该不需要这个判断）
  // var check = (arr) => {
  //   let dict = {};
  //   for (let i = 0; i < arr.length; i++) {
  //     let item = arr[i];
  //     if (dict[item]) {
  //       dict[item] = dict[item] + 1;
  //     } else {
  //       dict[item] = 1;
  //     }
  //     if (dict[item] > candicateDict[item]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  const invalidDict = {};
  const validDict = {};

  var backTrack = (tmpList, start, tmpSum) => {
    // 先验证，tmpList 是否重复？每个元素的使用次数是否大于规定？——应该不需要判断这里，直接给出一个 index 行不行
    // 这里能不能知己去去掉（没有必要再次做了）——但是时间还是不行
    // if (!check(tmpList)) {
    //   return;
    // }

    // 如果当前的和已经大于目标值，返回
    // let tmpSum = sum(tmpList);
    if (tmpSum > target) {
      invalidDict[String(tmpList)] = true;
      return;
    }
    // 不能有重复
    if (tmpSum === target) {
      list.push([...tmpList]);
      validDict[String(tmpList)] = true;
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const item = candidates[i];
      tmpList.push(item);
      // 如果当前临时数组，已经计算过了（不管是否满足，那么直接跳过即可，不需要回溯了，这样可以优化一部分）
      // 但是这样还没有到点子上（下面的例子）
      const tmpKey = String(tmpList);
      if (!invalidDict[tmpKey] && !validDict[tmpKey]) {
        // 因为数组是已经排序的，直接传递一个 index 即可，大大减少时间复杂度
        backTrack(tmpList, i + 1, tmpSum + item);
      }
      tmpList.pop();
    }
  };
  // 回溯
  // 第二个参数是开始的位置，第三个参数是当前的和
  backTrack(tmpList, 0, 0);

  // 去重
  const newList = [];
  const dict = {};
  list.forEach((arr) => {
    const key = String(arr);
    if (!dict[key]) {
      newList.push([...arr]);
      dict[key] = true;
    }
  });
  return newList;
};
// @lc code=end

// 思路2
// 改进后解决思路——关键是回溯中去重（剪枝）
// 68 ms, 在所有 JavaScript 提交中击败了72.53%
// 在 39 题目基础上更改
const combinationSum2Pro = function(candidates, target) {
  // 结果数组
  const res = [];
  // 临时数组
  const list = [];
  const len = candidates.length;
  // 先排序
  candidates.sort();

  function backtracking(sum, i) {
    // 如果大于结果，直接返回；
    if (sum > target) return;
    // 如果等于结果，从临时路径中拿出元素
    if (sum === target) {
      res.push(Array.from(list));
      return;
    }
    // 这个变量用来剪枝（当前的值，不能等于前一个的有效的值 [1,1,1,1,1]）处理这样的情况
    // 例如：已有的数组是 [1] 后面应该循环 [1,1,1] 这三个的实际效果是一样的，所以直接使用第一个，后面两个1剪掉
    let lastValidValue = -1;
    for (let j = i; j < len; j++) {
      const n = candidates[j];
      // 如果已经大于结果，直接下一轮
      if (n > target - sum || n === lastValidValue) {
        continue;
      }
      list.push(n);
      sum += n;
      lastValidValue = n;
      backtracking(sum, j + 1);
      list.pop();
      sum -= n;
    }
  }
  // 执行回溯（第一个是当前的和，第二个是遍历的索引）
  backtracking(0, 0);
  return res;
};

export { combinationSum2, combinationSum2Pro };
