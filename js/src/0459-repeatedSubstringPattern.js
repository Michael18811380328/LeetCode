/*
 * [459] 重复的子字符串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
// Your runtime beats 73.88 % of javascript submissions
function repeatedSubstringPattern(s) {
  const len = s.length;
  if (len === 1) {
    return false;
  }
  const subLen = len / 2;
  for (let i = 0; i <= subLen; i++) {
    let subKey = s.slice(0, i + 1);
    let keyLen = subKey.length;
    if (len % keyLen !== 0) {
      continue;
    }
    for (let j = i; j < len; j += keyLen) {
      let current = s.slice(j + 1, j + 1 + keyLen);
      if (current !== subKey) {
        break;
      }
      if (j + 1 + keyLen === len) {
        return true;
      }
    }
  }
  return false;
}

export { repeatedSubstringPattern };
