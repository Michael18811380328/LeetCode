/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
// [1652] 拆炸弹
// 分治算法：先根据 K 的符号确定怎么算
// 每一个情况使用滑动窗口计算
// Your runtime beats 81.54 % of javascript submissions
const decrypt = function(code, k) {
  const len = code.length;
  // 1. 如果是0，直接构造新数组返回
  if (k === 0) {
    return new Array(len).fill(0);
  }
  // 2. 如果不是0，先把 index-value 存放到字典中
  const dict = {};
  code.forEach((item, i) => {
    dict[i] = item;
  });
  const res = new Array(len);
  // 计算不同的和即可（加一个减一个，滑动窗口算法）
  // 2.1 K大于0，计算后面元素的和
  if (k > 0) {
    // 计算第一个
    let first = 0;
    for (let i = 1; i < 1 + k; i++) {
      first += dict[i];
    }
    res[0] = first;
    for (let i = 1; i < len; i++) {
      // 滑动窗口
      res[i] = res[i - 1] - dict[i] + (i + k >= len ? dict[i + k - len] : dict[i + k]);
    }
    return res;
  }
  // 2.2 K < 0，计算前面元素的和
  if (k < 0) {
    // 先变成正数，便于计算
    k = -k;
    // 计算第一个
    let first = 0;
    for (let i = len - 1; i > len - 1 - k; i--) {
      first += dict[i];
    }
    res[0] = first;
    for (let i = 1; i < len; i++) {
      // 滑动窗口
      res[i] = res[i - 1] + dict[i - 1] - ((i >= k + 1) ? dict[i - k - 1] : dict[i - k + len - 1]);
    }
    return res;
  }
};

export { decrypt };
