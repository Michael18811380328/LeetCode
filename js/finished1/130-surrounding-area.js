/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
// 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
// 示例:
// X X X X
// X O O X
// X X O X
// X O X X
// 运行你的函数后，矩阵变为：

// X X X X
// X X X X
// X X X X
// X O X X

// 辅助函数，获取二维矩阵对应的键
function getKey(i, j) {
  return `${i}+${j}`;
}

// 判断一个节点和周边节点（递归）
function deepErgodicity(i, j, arr) {
  const key = getKey(i, j);
  if (arr[i][j] === 'O' && !arr[key]) {
    arr[key] = true;
    // 获取周边的四个点（如果有，继续进行判断）
    if (arr[i][j - 1]) {
      deepErgodicity(i, j - 1, arr)
    }
    if (arr[i][j + 1]) {
      deepErgodicity(i, j + 1, arr)
    }
    if (arr[i + 1]) {
      deepErgodicity(i + 1, j, arr)
    }
    if (arr[i - 1]) {
      deepErgodicity(i - 1, j, arr)
    }
  }
}

// 思路：深度优先遍历
// 首先新建一个哈希表
// 遍历这个二维矩阵的四个边，找到边界上的O，然后深度遍历这个节点，如果还是O，设置哈希表是true
// 获取哈希表后，遍历二维矩阵，如果是false的直接改成O并输出
// 136 ms, 在所有 javascript 提交中击败了23.57%
function solve(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0 ; j < board[i].length; j++) {
      if (i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1) {
        // 第一行和最后一行, 第一列和最后一列
        deepErgodicity(i, j, board);
      }
    }
  }
  // 再次遍历，如果是O，需要获取哈希值是否是真假
  for (let i = 0; i < board.length; i++) {
    for (let j = 0 ; j < board[i].length; j++) {
      if (board[i][j] === 'O') {
        let key = getKey(i, j);
        if (!board[key]) {
          board[i][j] = 'X';
        }
      }
    }
  }
}

export { solve };
