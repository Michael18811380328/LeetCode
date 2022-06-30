function isPrefixString(s: string, words: string[]): boolean {
  const res: string = words.join('');
  if (res === s) return true;
  const sLen: number = s.length;
  if (res.length < sLen) {
    return false;
  }
  let tmp = '';
  let i: number;
  for (i = 0; i < words.length; i++) {
    const item: string = words[i];
    tmp = tmp + item;
    if (tmp === s) {
      return true;
    }
    if (tmp.length > sLen) {
      return false;
    }
  }
  return false;
}

export {isPrefixString};
