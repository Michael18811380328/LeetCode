function pivotInteger(n: number): number {
  if (n === 1) return 1;
  const sum = ((1 + n) * n) / 2;
  let tmp = 0;
  for (let i = 1; i < n; i++) {
    if (tmp === (sum - i) / 2) {
      return i;
    }
    if (tmp > sum / 2) return -1;
    tmp = tmp + i;
  }
  return -1;
}

export {pivotInteger};
