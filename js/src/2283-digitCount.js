/**
 * [2283] 判断一个数的数字计数是否等于数位的值
 * @param {string} num
 * @return {boolean}
 * Your runtime beats 64.81 % of javascript submissions
 */
const digitCount = function(num) {
  const dict = {};
  for (let i = 0; i < num.length; i++) {
    const key = num[i];
    if (dict[key]) {
      dict[key] = dict[key] + 1;
    } else {
      dict[key] = 1;
    }
  }
  for (let i = 0; i < num.length; i++) {
    const tmp = dict[i] || 0; // 次数可能是0次
    if (Number(num[i]) !== tmp) {
      return false;
    }
  }
  return true;
};

export { digitCount };
