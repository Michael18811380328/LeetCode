// 461. 汉明距离
// 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
// 给出两个整数 x 和 y，计算它们之间的汉明距离。
// 输入: x = 1, y = 4 输出: 2

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 72 ms , 在所有 javascript 提交中击败了 62.70%
function hammingDistance2(x, y) {
  let result = 0;
  while (x > 0 || y > 0) {
    if ((x % 2 === 1 && y % 2 === 0) || (x % 2 === 0 && y % 2 === 1)) {
      result++;
    }
    x = (x - (x % 2)) / 2;
    y = (y - (y % 2)) / 2;
  }
  return result;
}

// 优化后 56 ms , 在所有 javascript 提交中击败了 98.83%
function hammingDistance(x, y) {
  let result = 0;
  while (x > 0 || y > 0) {
    const a = x % 2;
    const b = y % 2;
    if ((a === 1 && b === 0) || (a === 0 && b === 1)) {
      result++;
    }
    x = (x - a) / 2;
    y = (y - b) / 2;
  }
  return result;
}

export { hammingDistance, hammingDistance2 };
