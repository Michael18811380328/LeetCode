function repeatedSubstringPattern(s: string): boolean {
  const len: number = s.length;
  if (len === 1) {
    return false;
  }
  const subLen: number = len / 2;
  for (let i = 0; i <= subLen; i++) {
    const subKey: string = s.slice(0, i + 1);
    const keyLen: number = subKey.length;
    if (len % keyLen !== 0) {
      continue;
    }
    for (let j: number = i; j < len; j += keyLen) {
      const current: string = s.slice(j + 1, j + 1 + keyLen);
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

export {repeatedSubstringPattern};
