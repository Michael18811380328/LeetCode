/**
 * [2309] 兼具大小写的最好英文字母
 * @param {string} s
 * @return {string}
 * Your runtime beats 83.75 % of javascript submissions
 * 难度简单，记住不同的字符对应的 Unicode
 * 'a'.charCodeAt() 97 'A'.charCodeAt() 65
 */
const greatestLetter = function(s) {
  // 因为字符串长度1000，可以先去重，减少循环次数
  let arr = [...new Set(s.split(''))].sort();
  arr = arr.reverse();
  // 先循环一次记录出现的字符
  const dict = {};
  for (let i = 0; i < arr.length; i++) {
    const index = arr[i].charCodeAt();
    dict[index] = true;
  }
  // 大写 65-90
  // 已经排序，所以判断只要满足条件，直接返回即可
  for (let i = 0; i < arr.length; i++) {
    const index = arr[i].charCodeAt();
    if (index >= 65 && index <= 90 && dict[index + 32]) {
      return arr[i];
    }
  }
  return '';
};

export { greatestLetter };
