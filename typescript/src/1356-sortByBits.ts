function sortByBits(arr: number[]): number[] {
  const len: number = arr.length;
  if (len < 2) {
    return arr;
  }
  arr = arr.sort((a, b) => a - b);
  function calcu(num: number): number {
    let res = 0;
    while (num >= 1) {
      const tmp: number = num % 2;
      num = (num - tmp) / 2;
      if (tmp === 1) {
        res++;
      }
    }
    return res;
  }
  const matrix: number[][] = [];
  let i = 0;
  for (; i < len; i++) {
    const times: number = calcu(arr[i]);
    if (!matrix[times]) {
      matrix[times] = [];
    }
    matrix[times].push(arr[i]);
  }
  let result: number[] = [];
  matrix.forEach(item => {
    result = result.concat(item);
  });
  return result;
}

export {sortByBits};
