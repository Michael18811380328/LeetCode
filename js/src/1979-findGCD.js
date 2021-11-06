// 1979. 找出数组的最大公约数
/**
 * @param {number[]} nums
 * @return {number}
 */
const findGCD = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  // 如果相等，或者可以相除，返回最小值
  if (min === max || max % min === 0) {
    return min;
  }
  for (let i = Math.floor(min / 2 + 1); i > 0; i--) {
    if (max % i === 0 && min % i === 0) {
      return i;
    }
  }
  return 1;
};

export { findGCD };
