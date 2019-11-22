// 69
// 获取一个正数数的平方根；如果这个数的平方根包含小数，那么截取整数部分

// 思路一：原生：从1开始循环，比较循环的数的平方大于等于这个数，那么返回就是这个index。
// 112 ms 32%
function getSqrt1(x) {
  if (x === 0) return 0;
  if (x < 4) return 1;
  for (let i = 1; i < x; i++) {
    const sqar = i * i;
    if (sqar === x) return i;
    if (sqar > x) return i - 1;
  }
  return null;
}

// 方法二：使用系统函数
// 104 ms, 在所有 javascript 提交中击败了49.38%
function getSqrt2(x) {
  if (x === 0) return 0;
  return Math.floor(Math.sqrt(x));
}

// 方法三：使用强制转化方法，把小数转化成整数，避免使用函数库
function getSqrt3(x) {
  return parseInt(Math.sqrt(x), 0);
}

export { getSqrt1, getSqrt2, getSqrt3 };
