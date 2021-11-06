/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const isPrefixString = function (s, words) {
  const res = words.join('');
  if (res === s) return true;
  const sLen = s.length;
  if (res.length < sLen) return false;
  let tmp = '';
  for (let i = 0; i < words.length; i++) {
    const item = words[i];
    tmp = tmp + item;
    if (tmp === s) {
      return true;
    }
    if (tmp.length > sLen) {
      return false;
    }
  }
  return false;
};

export { isPrefixString };
