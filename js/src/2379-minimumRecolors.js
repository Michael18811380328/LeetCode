/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 * 得到 K 个黑块的最少涂色次数,
 * 思路1：循环一次数组
 */
const minimumRecolors1 = function(blocks, k) {
  // 辅助函数，检查某个位置开始时，需要黑块的个数
  const checkBlack = (start) => {
    let res = 0;
    for (let i = start; i < start + k; i++) {
      if (blocks[i] === 'W') {
        res++;
      }
    }
    return res;
  };
  // 先构建一个目标字符串，includes看是否满足
  let target = '';
  for (let i = 0; i < k; i++) {
    target = `${target}B`;
  }
  // 因为已经有 k 个连续的黑块。
  if (blocks.includes(target)) {
    return 0;
  }
  // 这里处理
  let min = k;
  for (let i = 0; i <= blocks.length - k; i++) {
    const tmp = checkBlack(i);
    if (min > tmp) {
      min = tmp;
    }
  }
  return min;
};

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 * 思路2：滑动窗口
 * https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
 */
const minimumRecolors = function(blocks, k) {
  const len = blocks.length;
  // 如果区间等于全部长度，那么计算 W 的个数即可
  if (len === k) {
    let min = 0;
    for (let i = 0; i < len; i++) {
      const item = blocks[i];
      if (item === 'W') min++;
    }
    return min;
  }
  // 如果区间小于字符串长度，那么滑动窗口，计算区间内 W 最少的情况
  // 先计算初始区间内的数量
  let tmp = 0;
  for (let i = 0; i < k; i++) {
    if (blocks[i] === 'W') {
      tmp++;
    }
  }
  let min = tmp;
  if (min === 0) return 0;
  // 开始滑动窗口
  for (let i = k; i < len; i++) {
    if (blocks[i] === 'W') tmp++;
    if (blocks[i - k] === 'W') tmp--;
    if (tmp === 0) return 0;
    min = tmp < min ? tmp : min;
  }
  return min;
};

// 某个滑动区间内，W 个数最少，如果已经是0，那么直接返回
// console.log(minimumRecolors("WBBWWBBWBW", 10)) // 5
// console.log(minimumRecolors("WBBWWBBWBW", 7)) // 3
// console.log(minimumRecolors("WBWBBBW", 2)) // 0
// console.log(minimumRecolors("WBBWWBBWBWWBBWWBBWBWWBBWWBBWBWWBBWWBBWBWWBBWWBBWBWWBBWWBBWBW", 30)) // 15

export { minimumRecolors, minimumRecolors1 };
