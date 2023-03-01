function commonFactors(a: number, b: number): number {
  let min: number = Math.min(a, b);
  let tmp: number = 0;
  for (let i: number = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      tmp++;
    }
  }
  return tmp;
};
