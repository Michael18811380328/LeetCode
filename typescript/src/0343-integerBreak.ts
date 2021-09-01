function integerBreak(n: number): number {
  if (n <= 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else if (n === 3) {
    return 2;
  }
  const b: number = n % 3;
  const a: number = (n - b) / 3;
  let res = 0;
  if (b === 0) {
    res = Math.pow(3, a);
  } else if (b === 1) {
    res = Math.pow(3, a - 1) * 4;
  } else if (b === 2) {
    res = Math.pow(3, a) * 2;
  }
  return res;
}

export {integerBreak};
