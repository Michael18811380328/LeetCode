/**
 * @param {string} time
 * @return {string}
 */
// 100 ms, 在所有 JavaScript 提交中击败了6.98%
const maximumTime = function(time) {
  let a = time[0];
  let b = time[1];
  let c = time[3];
  let d = time[4];

  if (d === '?') {
    d = '9';
  }
  if (c === '?') {
    c = '5';
  }

  if (a === '?' && b === '?') {
    a = '2';
    b = '3';
  }

  if (a !== '?' && b === '?') {
    if (a === '2') {
      b = '3';
    } else {
      b = '9';
    }
  }

  if (a === '?' && b !== '?') {
    if (Number(b) < 4) {
      a = '2';
    } else {
      a = '1';
    }
  }
  return `${a}${b}:${c}${d}`;
};

// 分钟
// 最后一位：肯定是9最大
// 倒数第二位：5最大

// 小时(难点)
// 0 - 23
// 如果两个都是？？那么就是23

// 如果第一个是数字（012）如果是01，那么第二个是9；如果是2，那么第二个是3

// 如果第二个是数组。如果数字是0123，那么第一个是2。如果是其他数字，那么第一个是1

export { maximumTime };
