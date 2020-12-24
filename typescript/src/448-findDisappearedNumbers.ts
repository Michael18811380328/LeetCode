function findDisappearedNumbers(nums: number[]): number[] {
  const n:number = nums.length;
  const nullArr:number[] = [];
  if (n === 1) {
    return nullArr;
  }
  let newArr:number[] = [...new Set(nums)].sort((a, b) => a - b);
  const len:number = newArr.length;
  if (len === n) {
    return nullArr;
  }
  let pointer:number = 1;
  let result:number[] = [];
  let i:number = 0;
  for (; i < len; i++) {
    if (pointer === newArr[i]) {
      pointer++;
    } else {
      result.push(pointer);
      pointer++;
      i--;
    }
  }
  while (pointer <= n) {
    result.push(pointer);
    pointer++;
  }
  return result;
};

export { findDisappearedNumbers };
