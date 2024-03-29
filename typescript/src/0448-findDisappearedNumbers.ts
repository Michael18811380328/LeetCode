function findDisappearedNumbers(nums: number[]): number[] {
  const n: number = nums.length;
  const nullArr: number[] = [];
  if (n === 1) {
    return nullArr;
  }
  const newArr: number[] = [...new Set(nums)].sort((a, b) => a - b);
  const len: number = newArr.length;
  if (len === n) {
    return nullArr;
  }
  let pointer = 1;
  const result: number[] = [];
  let i = 0;
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
}

export {findDisappearedNumbers};
