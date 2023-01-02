/**
 * [2180] 统计各位数字之和为偶数的整数个数
 * 72 ms, 在所有 JavaScript 提交中击败了25.35%
 * @param {number} num
 * @return {number}
 */
const countEven = function(num) {
  // 辅助函数：判断一个数是否满足各位数字之和为偶数
  const check = (n) => {
    const s = String(n);
    let res = 0;
    res += Number(s[0]);
    if (s[1]) {
      res += Number(s[1]);
    }
    if (s[2]) {
      res += Number(s[2]);
    }
    if (s[3]) {
      res += Number(s[3]);
    }
    return res % 2 === 0;
  };

  let tmp = 0;
  for (let i = 1; i <= num; i++) {
    if (check(i)) {
      tmp++;
    }
  }
  return tmp;
};

// 上面的方法，每一个数字都 check，性能较差，可以部分优化成字典计数
// 68 ms, 在所有 JavaScript 提交中击败了47.62%
const countEven2 = function(num) {
  // 辅助函数：判断一个数是否满足各位数字之和为偶数（不变）
  const check = (n) => {
    const s = String(n);
    let res = 0;
    res += Number(s[0]);
    if (s[1]) {
      res += Number(s[1]);
    }
    if (s[2]) {
      res += Number(s[2]);
    }
    if (s[3]) {
      res += Number(s[3]);
    }
    return res % 2 === 0;
  };

  let dict = {};
  let tmp = 0;
  for (let i = 1; i <= num; i++) {
    if (i < 10) {
      if (i % 2 === 0) {
        tmp++;
      }
      continue;
    }
    let remain = i % 10;
    // 如果是10的倍数，重新计算
    if (remain === 0) {
      if (check(i)) {
        tmp++;
        dict[i] = true;
      } else {
        dict[i] = false;
      }
    }
    // 如果不是10的倍数，从缓存中读取
    else {
      if (remain % 2 === 0 && dict[(i - remain)]) {
        tmp++;
      }
      else if (remain % 2 !== 0 && !dict[(i - remain)]) {
        tmp++;
      }
    }
  }
  return tmp;
};

export { countEven, countEven2 };
