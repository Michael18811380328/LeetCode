const minTimeToType = function (word) {
  const len = word.length;
  if (len === 0) {
    return 0;
  }
  const getIndent = function (a, b) {
    if (a === b) {
      return 0;
    }
    const tmp = Math.abs(Number(b.charCodeAt(0)) - Number(a.charCodeAt(0)));
    return Math.min(tmp, 26 - tmp);
  };
  let res = len;
  res += getIndent('a', word[0]);
  for (let i = 0; i < len - 1; i++) {
    res += getIndent(word[i], word[i + 1]);
  }
  return res;
};

export { minTimeToType };
