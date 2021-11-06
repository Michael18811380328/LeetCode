function largestOddNumber(num: string): string {
  let res: string = num;
  while (res.length > 0) {
    const last: string = res[res.length - 1];
    if (Number(last) % 2 === 1) {
      return res;
    } else {
      res = res.slice(0, res.length - 1);
    }
  }
  return '';
}
