// 判断一个数是否是4的幂
/**
 * @param {number} num
 * @return {boolean}
 */
// 如果是0或者4，直接返回true
// 第一种思路：循环除以4，如果余数不是0，那么就返回false
// 84 ms, 在所有 javascript 提交中击败了71.89%
function isPowerOfFour(num) {
  if (num <= 0) {
    return false;
  }
  while (num > 1) {
    const remain = num % 4;
    if (remain !== 0) return false;
    num /= 4;
  }
  return true;
}

// 思路二：实验中，4的幂一定是4或者6结尾，那么可以排除很多的数字
// 68 ms, 在所有 javascript 提交中击败了99.20%
function isNotFour(num) {
  const remain = num % 10;
  if (remain === 4 || remain === 6) {
    return true;
  }
  return false;
}

function isPowerOfFour2(num) {
  if (num === 1) return true;
  if (num <= 0 || !isNotFour(num)) {
    return false;
  }
  while (num > 1) {
    if (!isNotFour(num)) return false;
    const remain = num % 4;
    if (remain !== 0) return false;
    num /= 4;
  }
  return true;
}

// 其他的思路：首先把数值转换成二进制，转换成字符串 num = num.toString(2)
// 找规律发现，二进制字符串都是100 00 00 00 形式
// 可以使用正则表达式匹配获取结果
// 当然性能一般

export { isPowerOfFour, isPowerOfFour2 };
