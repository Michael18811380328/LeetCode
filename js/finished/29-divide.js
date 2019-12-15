// 29 不使用除法，实现除
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function handleBig(result) {
  if (result > 2147483647) {
    return 2147483647;
  }
  if (result < -2147483648) {
    return -2147483648;
  }
  return result;
}

// 这个办法需要一直循环，性能不好
// 4276 ms, 在所有 javascript 提交中击败了 12.99%
function divide(dividend, divisor) {
  // handle 0 1
  if (dividend === 0) {
    return 0;
  }
  if (dividend === divisor) {
    return 1;
  }
  if (dividend === -divisor) {
    return -1;
  }
  if (divisor === 1) {
    return handleBig(dividend);
  }
  if (divisor === -1) {
    return handleBig(-dividend);
  }
  if (Math.abs(dividend) < Math.abs(divisor)) {
    return 0; // 如果被除数小于除数，商是0
  }
  // 都是正数
  let result = 0;
  if (dividend > 0 && divisor > 0) {
    while (dividend >= divisor) {
      dividend -= divisor;
      result++;
    }
  }
  // 都是负数
  if (dividend < 0 && divisor < 0) {
    while (-dividend >= -divisor) {
      dividend -= divisor;
      result++;
    }
  }
  // 被除数大于0，除数小于0
  if (dividend > 0 && divisor < 0) {
    while (dividend >= -divisor) {
      dividend += divisor;
      result++;
    }
    result = -result;
  }
  // 被除数<0, 除数大于0
  if (dividend < 0 && divisor > 0) {
    while (-dividend >= divisor) {
      dividend += divisor;
      result++;
    }
    result = -result;
  }
  return handleBig(result);
}

export { divide };
