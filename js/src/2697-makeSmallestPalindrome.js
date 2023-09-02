/**
 * @param {string} s
 * @return {string}
 */
const makeSmallestPalindrome = function(s) {
  const arr = s.split('');
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      const tmp = arr[i].charCodeAt(0) < arr[arr.length - 1 - i].charCodeAt(0)
        ? arr[i] : arr[arr.length - 1 - i];
      arr[i] = tmp;
      arr[arr.length - 1 - i] = tmp;
    }
  }
  return arr.join('');
};

export { makeSmallestPalindrome };
