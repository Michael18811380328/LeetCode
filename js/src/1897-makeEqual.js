/**
 * @param {string[]} words
 * @return {boolean}
 */
// 96 ms, 在所有 JavaScript 提交中击败了81.48%
// 循环，字符串计数
const makeEqual = function(words) {
  let dict = [];
  const len = words.length;
  let whole = words.join('');
  if (whole.length % len !== 0) {
    return false;
  }
  for (let i = 0; i < whole.length; i++) {
    let str = whole[i];
    if (!dict[str]) {
      dict[str] = 1;
    } else {
      dict[str] = dict[str] + 1;
    }
  }
  for (let key in dict) {
    let value = dict[key];
    if (value % len !== 0) {
      return false;
    }
  }
  return true;
};

export { makeEqual };
