// wordPattern
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
// 思路1：把字符串转化成数组
// 设置一个空字典，遍历数组和对应的字符串。
// 如果数组中可以查到符合，继续徐娜混；如果查到不同，返回false；如果未查到，增加到数组中
// 如果数组的长度和字符串的长度不同，那么一定是false
// 92 ms, 在所有 javascript 提交中击败了5.88%
// 性能不好，分析一下，想一个更好的方法
function wordPattern(pattern, str) {
  const arr = str.split(' ');
  const len = arr.length;
  if (pattern.length !== len) {
    return false;
  }
  const dict = {};
  for (let i = 0; i < len; i++) {
    const patt = pattern[i];
    if (!dict[patt]) {
      dict[patt] = arr[i];
    } else if (dict[patt] !== arr[i]) {
      return false;
    }
  }
  const dict2 = {};
  for (const key in dict) {
    if (dict2[dict[key]]) {
      return false;
    }
    dict2[dict[key]] = true;
  }
  return true;
}

export { wordPattern };
