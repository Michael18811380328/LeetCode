/**
 * @param {string} s
 * @return {string}
 */
// 84 ms, 在所有 JavaScript 提交中击败了97.58%
const reverseStr = function(str) {
  return str.split('').reverse().join('');
};

const reverseWords = function(s) {
  const len = s.length;
  if (len === 0) return s;
  const arr1 = s.split(' ');
  const arr2 = arr1.map((item) => {
    return reverseStr(item);
  });
  return arr2.join(' ');
};

export { reverseWords };
