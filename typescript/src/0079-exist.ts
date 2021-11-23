/** 判断矩阵中是否满足某个单词
 * @param {character[][]} board 矩阵，每一项是一个字母，可能重复
 * @param {string} word 需要满足的单词
 * @return {boolean}
 */
// 356 ms, 在所有 TypeScript 提交中击败了68.28%
// 一部分代码没有完全类型验证，需要后续修改
function exist(board: string[][], word: string): boolean {
  let wordDict = {};
  for (let i:number = 0; i < word.length; i++) {
    if (wordDict[word[i]]) {
      wordDict[word[i]] = wordDict[word[i]] + 1;
    } else {
      wordDict[word[i]] = 1;
    }
  }
  let boardPosition = {};
  for (let i:number = 0; i < board.length; i++) {
    for (let j:number = 0; j < board[0].length; j++) {
      let curr = board[i][j];
      if (!boardPosition[curr]) {
        boardPosition[curr] = [];
      }
      boardPosition[curr].push([i, j]);
    }
  }
  for (let key in wordDict) {
    let num = wordDict[key];
    if (!boardPosition[key] || boardPosition[key].length < num) {
      return false;
    }
  }  
  let result: string[][] = [];
  let tmp: string[][] = [];
  /**
   * 辅助函数 判断两个坐标是否相邻
   * @param a 一个点的坐标
   * @param b 另一个点的坐标
   * @returns 是否相邻
   */
  let checkArround = (a:any, b:any): boolean => {
    if (a[0] === b[0] && (a[1] === b[1] - 1 || a[1] === b[1] + 1)) {
      return false;
    }
    if (a[1] === b[1] && (a[0] === b[0] - 1 || a[0] === b[0] + 1)) {
      return false;
    }
    return true;
  }
  /**
   * 回溯函数
   * @param index 下一个遍历的字母的索引
   * @param tmp 临时数组，存放已经遍历过的点 
   * @returns 
   */
  let backtract = (index: number, tmp: any): boolean => {
    if (index > word.length - 1) {
      return false;
    }
    if (index === word.length - 1) {
      result.push([...tmp]);
      return true;
    }
    if (index < word.length - 1) {
      // 继续回溯
      let newIndex = index + 1;
      let key = word[newIndex];
      let valueArr = boardPosition[key];
      for (let i = 0; i < valueArr.length; i++) {
        if (tmp.includes(valueArr[i])) {
          continue;
        }
        if (checkArround(tmp[tmp.length - 1], valueArr[i])) {
          continue;
        }
        tmp.push(valueArr[i]);
        let res = backtract(newIndex, tmp);
        if (res) {
          return true;
        }
        tmp.pop();
      }
    }
    return false;
  }

  let valueArr = boardPosition[word[0]];
  for (let i:number = 0; i < valueArr.length; i++) {
    tmp.push(valueArr[i]);
    let res = backtract(0, tmp);
    if (res) {
      return true;
    }
    tmp.pop();
  }
  return false;
};
