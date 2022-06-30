function freqAlphabets(s: string): string {
  let res = '',
    curStr = '';
  while (s.length > 0) {
    if (s[2] === '#') {
      curStr = String.fromCharCode(Number(s[0] + s[1]) + 96);
      res += curStr;
      s = s.slice(3);
    } else {
      curStr = String.fromCharCode(Number(s[0]) + 96);
      res += curStr;
      s = s.slice(1);
    }
  }
  return res;
}

export {freqAlphabets};
