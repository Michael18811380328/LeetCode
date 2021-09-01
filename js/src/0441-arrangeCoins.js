// 441 硬币排列
// 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。
// 给定一个数字 n，找出可形成完整阶梯行的总行数。
// n 是一个非负整数，并且在32位有符号整型的范围内。

// 执行用时: 108 ms 击败了49.06%
// 内存消耗: 38 MB
function arrangeCoins(n) {
  if (n === 1) {
    return 1;
  }
  let sum = 1;
  let index = 2;
  while (sum <= n) {
    sum += index;
    index++;
  }
  return index - 2;
}

export { arrangeCoins };
