function sortByBits(arr: number[]): number[] {
  let len:number = arr.length;
  if (len < 2) {
    return arr;
  }
  arr = arr.sort((a, b) => a - b);
  function calcu(num: number): number {
    let res:number = 0;
    while (num >= 1) {
      let tmp:number = num % 2;
      num = (num - tmp) / 2;
      if (tmp === 1) {
        res++;
      }
    }
    return res;
  }
  let matrix:number[][] = [];
  let i:number = 0;
  for (; i < len; i++) {
    let times:number = calcu(arr[i]);
    if (!matrix[times]) {
      matrix[times] = [];
    }
    matrix[times].push(arr[i]);
  }
  let result:number[] = [];
  matrix.forEach(item => result.concat(item));
  return result;
};