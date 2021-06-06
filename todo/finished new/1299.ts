function replaceElements(arr: number[]): number[] {
  const len:number = arr.length;
  let res: number[] = [-1];
  if (len === 1) {
    return res;
  }
  let max:number = arr[len - 1];
  for (let i:number = len - 2; i >= 0; i--) {
    res.unshift(max);
    let curr = arr[i];
    if (curr > max) {
      max = curr;
    }
  }
  return res;
};