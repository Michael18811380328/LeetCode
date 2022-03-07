// 451 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。
// 执行用时：104 ms击败了70.22%
// 内存消耗：39.2 MB击败了81.41%的用户
/**
 * @param {string}
 * @return {string}
 */
function frequencySort(s) {
  const len = s.length;
  // 如果长度是012，那么不需要排序，直接返回原始字符串即可
  if (len < 3) {
    return s;
  }
  const obj = {};
  for (let i = 0; i < len; i++) {
    const item = s[i];
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }
  const arr = [];
  // eslint-disable-next-line
  for (let key in obj) {
    const value = obj[key];
    if (!arr[value]) {
      arr[value] = [key];
    } else {
      arr[value].push(key);
    }
  }
  let result = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i]) {
      // arr[i] 是一个数组，其中每一项需要转换成一个字符串
      let newStr = '';
      for (let j = 0; j < arr[i].length; j++) {
        const current = arr[i][j];
        const currentStr = (`${current}`).repeat(i);
        newStr += currentStr;
      }
      result += newStr;
    }
  }
  return result;
}

export { frequencySort };
