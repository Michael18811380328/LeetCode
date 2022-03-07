/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// 这个题目可以做
// 在回溯过程中，需要看之前的是否使用过，避免重复
// 全部字典和目标中都存在重复值，回溯需要注意
// Your runtime beats 54.23 % of javascript submissions
// 80/80 cases passed (356 ms)
const exist = function(board, word) {
  // 先遍历一次全部单词，看是否有不存在的，排除一部分
  const wordDict = {};
  for (let i = 0; i < word.length; i++) {
    if (wordDict[word[i]]) {
      wordDict[word[i]] = wordDict[word[i]] + 1;
    } else {
      wordDict[word[i]] = 1;
    }
  }
  // console.log(wordDict);
  const boardPosition = {}; // 这个存放位置
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const curr = board[i][j];
      if (!boardPosition[curr]) {
        boardPosition[curr] = [];
      }
      boardPosition[curr].push([i, j]);
    }
  }
  // console.log(boardPosition);
  for (const key in wordDict) {
    const num = wordDict[key];
    if (!boardPosition[key] || boardPosition[key].length < num) {
      return false;
    }
  }
  // 检验完成，说明现在单词被矩阵全覆盖

  const result = [];
  const tmp = []; // 用过的坐标需要放在一个临时数组中

  // 判断两个坐标是否相邻，如果不相邻返回true
  const checkArround = (a, b) => {
    if (a[0] === b[0] && (a[1] === b[1] - 1 || a[1] === b[1] + 1)) {
      return false;
    }
    if (a[1] === b[1] && (a[0] === b[0] - 1 || a[0] === b[0] + 1)) {
      return false;
    }
    return true;
  };

  // 回溯函数
  const backtract = (index, tmp) => {
    if (index > word.length - 1) {
      return false;
    }
    if (index === word.length - 1) {
      result.push([...tmp]);
      // 这里可以优化一下，只要满足一个，即可返回，不需要计算全部的路径
      return true;
    }
    if (index < word.length - 1) {
      // 继续回溯
      const newIndex = index + 1;
      const key = word[newIndex];
      const valueArr = boardPosition[key];
      for (let i = 0; i < valueArr.length; i++) {
        // 这里应该监测 tmp 重复的坐标，继续循环
        if (tmp.includes(valueArr[i])) {
          continue;
        }
        // 判断是否相邻元素
        if (checkArround(tmp[tmp.length - 1], valueArr[i])) {
          continue;
        }
        // 相邻的话继续回溯
        tmp.push(valueArr[i]);
        const res = backtract(newIndex, tmp);
        if (res) {
          return true;
        }
        tmp.pop();
      }
    }
  };

  // 获取第一个，开始遍历，第一个的位置不限制
  const valueArr = boardPosition[word[0]];
  for (let i = 0; i < valueArr.length; i++) {
    tmp.push(valueArr[i]);
    const res = backtract(0, tmp);
    if (res) {
      return true;
    }
    tmp.pop();
  }
  return false;
};
// @lc code=end
