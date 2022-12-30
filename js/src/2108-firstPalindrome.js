/**
 * [2108] 找出数组中的第一个回文字符串
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = function(words) {
  const checkStr = (str) => {
    const len = str.length;
    const halflen = Math.ceil(str.length / 2);
    for (let i = 0; i < halflen; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < words.length; i++) {
    if (checkStr(words[i])) {
      return words[i];
    }
  }
  return '';
};

export { firstPalindrome };
