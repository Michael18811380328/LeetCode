// 84 ms, 在所有 TypeScript 提交中击败了100.00%
function checkZeroOnes(s: string): boolean {
  const len: number = s.length;
  if (len === 0) {
    return s === '1';
  }
  let current: string = s[0];
  let currLen: number = 1;
  let max1: number = 0;
  let max2: number = 0;
  for (let i: number = 1; i < len; i++) {
    if (s[i] === current) {
      currLen++;
    } else {
      // 更新最大长度
      if (current === '1') {
        if (currLen > max1) {
          max1 = currLen;
        }
      } else {
        if (currLen > max2) {
          max2 = currLen;
        }
      }
      current = s[i];
      currLen = 1;
    }
  }
  if (current === '1') {
    if (currLen > max1) {
      max1 = currLen;
    }
  } else {
    if (currLen > max2) {
      max2 = currLen;
    }
  }
  return max1 > max2;
};
