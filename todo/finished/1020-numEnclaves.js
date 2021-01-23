/**
 * @param {number[][]} A
 * @return {number}
 */
// 执行用时：112 ms
var numEnclaves = function(A) {
  // 思路：遍历矩阵的四个边：如果某个数是1，那么这个就是无效的。
  // 先遍历上面和最下面
  let check = function(i, j) {
    // 然后把这个变成0
    A[i][j] = 0;
    // 然后深度优先遍历相邻位置的单元格。如果是1，也变成0
    // 核心（函数递归）
    if (A[i][j + 1] === 1) {
      check(i, j + 1);
    }
    if (A[i][j - 1] === 1) {
      check(i, j - 1);
    }
    if (A[i - 1] && A[i - 1][j] === 1) {
      check(i - 1, j);
    }
    if (A[i + 1] && A[i + 1][j] === 1) {
      check(i + 1, j);
    }    
  }

  for (let i = 0; i < A[0].length; i++) {
    let item = A[0][i];
    if (item === 1) {
      check(0, i, A)
    }
  }
  for (let i = 0; i < A[A.length - 1].length; i++) {
    let item = A[A.length - 1][i];
    if (item === 1) {
      check(A.length - 1, i, A)
    }
  }
  // 然后遍历第一列和最后一列
  for (let i = 0; i < A.length; i++) {
    let item1 = A[i][0];
    if (item1 === 1) {
      check(i, 0, A)
    }
    const len = A[i].length;
    let item2 = A[i][len - 1];
    if (item2 === 1) {
      check(i, len - 1, A)
    }
  }
  // 遍历结束后，剩下的就都是飞地；遍历一次数组，找到数组中是1的个数即可
  let res = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      res += A[i][j];
    }
  }
  return res;
};