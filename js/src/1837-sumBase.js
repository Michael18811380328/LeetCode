/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const sumBase = function(n, k) {
  // 辅助函数：转换成K进制的字符串
  const transFn = (n, k) => {
    let result = '';
    while (n > 0) {
      const tmp = n % k;
      result = String(tmp) + result;
      n = (n - tmp) / k;
    }
    return result;
  };

  let transN;
  let res = 0;
  if (k !== 10) {
    const newStr = transFn(n, k);
    transN = parseInt(newStr, 10);
  } else {
    transN = n;
  }

  while (transN > 0) {
    const remain = transN % 10;
    res += remain;
    transN = (transN - remain) / 10;
  }
  return res;
};

export { sumBase };
