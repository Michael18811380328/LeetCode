// 263
// 编写一个程序判断给定的数是否为丑数。
// 丑数就是只包含质因数 2, 3, 5 的正整数。(1 是丑数)

// 首先处理特殊的0123
// 思路：如果这个数可以整除5，那么计算整除后的数。直到无法整除
// 继续整除23

/**
 * @param {number} num
 * @return {boolean}
 */
// 92 ms , 在所有 javascript 提交中击败了 52.03%
function isUgly(num) {
  // 首先去掉特殊数字
  if (num <= 0) {
    return false;
  }
  if (num < 7) {
    return true;
  }
  if (num % 7 === 0 || num % 11 === 0 || num % 13 === 0 || num % 17 === 0) {
    return false;
  }
  while (num % 5 === 0 && num > 1) {
    num /= 5;
  }
  while (num % 3 === 0 && num > 1) {
    num /= 3;
  }
  while (num % 2 === 0 && num > 1) {
    num /= 2;
  }
  if (num > 1) {
    return false;
  }
  return true;
}

// 思路二：不需要考虑余数
// 80 ms , 在所有 javascript 提交中击败了 86.35%
function isUgly2(num) {
  if (num <= 0) {
    return false;
  }
  if (num < 7) {
    return true;
  }
  while (num % 5 === 0 && num > 1) {
    num /= 5;
  }
  while (num % 3 === 0 && num > 1) {
    num /= 3;
  }
  while (num % 2 === 0 && num > 1) {
    num /= 2;
  }
  if (num > 1) {
    return false;
  }
  return true;
}

export { isUgly, isUgly2 };
