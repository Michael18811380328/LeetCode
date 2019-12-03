// 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。

/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 外层是三个循环（行列、9个单元格）
// 内层判断是否有元素重复；如果重复，返回false
// 内部专门写一个函数，判断9个数中是否有重复的元素

// 思路1：按照定义，判断每行、每列、每个小单元格是否有重复的元素，需要三次N平方循环，每次判断需要循环

// 辅助函数：判断9个数中是否有重复元素
function isDuplicate(arr) {
  for (let i = 0; i < 9; i++) {
    if (arr[i] === '.') {
      continue;
    }
    else {
      let item = arr[i];
      if (arr.indexOf(item) !== arr.lastIndexOf(item)) {
        return false;
      }
    }
  }
  return true;
}

// 88 ms, 在所有 javascript 提交中击败了82.55%
function isValidSudoku(board) {
  // 二维数组
  for (let i = 0; i < 9; i++) {
    if (!isDuplicate(board[i])) {
      return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    let column = [];
    for (let j = 0; j < 9; j++) {
      column.push(board[j][i]);
    }
    if (!isDuplicate(column)) {
      return false;
    }
  }
  // 组合 x 0 3 6 y 0 3 6
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9 ; j += 3) {
      // i j is left top point 
      let cell = [];
      cell.push(board[i][j], board[i][j + 1], board[i][j + 2]);
      cell.push(board[i + 1][j], board[i + 1][j + 1], board[i + 1][j + 2]);
      cell.push(board[i + 2][j], board[i + 2][j + 1], board[i + 2][j + 2]);
      if (!isDuplicate(cell)) {
        return false;
      }
    }
  }
  return true;
}

// 思路二：使用哈希表；把数字作为键，把位置作为哈希值
// 循环一次数组，获取哈希表；如果哈希表中的位置在同一行，同一列，或者9个单元格内部，那么不是有效的数独
// 100 ms, 在所有 javascript 提交中击败了53.72%

// 辅助函数：判断是否在一个小单元格内部
function isSmallCell(pointArr) {
  const len = pointArr.length;
  let arr = [];
  for (let i = 0; i < len; i++) {
    const j = pointArr[i][0], k = pointArr[i][1];
    if (j < 3) {
      if (k < 3) {
        if (!arr[1]) {
          arr[1] = 1
        } else {
          return false;
        }
      }
      else if (k < 6) {
        if (!arr[2]) {
          arr[2] = 1
        } else {
          return false;
        }
      }
      else {
        if (!arr[3]) {
          arr[3] = 1
        } else {
          return false;
        }
      }
    }
    else if (j < 6) {
      if (k < 3) {
        if (!arr[4]) {
          arr[4] = 1
        } else {
          return false;
        }
      }
      else if (k < 6) {
        if (!arr[5]) {
          arr[5] = 1
        } else {
          return false;
        }
      }
      else {
        if (!arr[6]) {
          arr[6] = 1
        } else {
          return false;
        }
      }

    }
    else {
      if (k < 3) {
        if (!arr[7]) {
          arr[7] = 1
        } else {
          return false;
        }
      }
      else if (k < 6) {
        if (!arr[8]) {
          arr[8] = 1
        } else {
          return false;
        }
      }
      else {
        if (!arr[9]) {
          arr[9] = 1
        } else {
          return false;
        }
      }
    }
  }
  return true;
}

// 辅助函数，判断有效的哈希值
function isValidHash(pointArr) {
  const len = pointArr.length;
  if (len === 1) {
    return true;
  }
  let obj0 = {}, obj1 = {};
  for (let i = 0; i < len; i++) {
    const j = pointArr[i][0], k = pointArr[i][1];
    // 在一行或者一列内出现，就是假的
    if (obj0[j]) {
        return false;
    } else {
        obj0[j] = 1;
    }
    if (obj1[k]) {
        return false;
    } else {
        obj1[k] = 1;
    }
  }
  // 需要判断是否在9个格子内部
  return isSmallCell(pointArr);
}

function isValidSudoku2(board) {
  let hash = {};
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const item = board[i][j];
      if (item === '.') continue;
      if (hash[item]) {
        hash[item].push([i, j]);
      } else {
        hash[item] = [[i, j]];
      }
    }
  }
  for (let key in hash) {
    if (!isValidHash(hash[key])) {
        return false;
    }
  }
  return true;
}

// 使用 Map 需要改变 babel-core 7.0版本，否则编译会报错
// function isValidSudoku2(board) {
//   let hash = new Map();
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       const item = board[i][j];
//       if (item === '') continue;
//       if (hash.get(item)) {
//         hash.set(item, hash.get(item).push([i, j]));
//       } else {
//         hash.set(item, [[i, j]]);
//       }
//     }
//   }
//   console.log(hash);
//   for (const [value] of hash) {
//     if (!isValidHash(value)) {
//     return false;
//     }
//   }
//   return true;
// }

export { isValidSudoku, isDuplicate, isValidSudoku2, isValidHash };
