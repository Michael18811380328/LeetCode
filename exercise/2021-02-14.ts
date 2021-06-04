function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => {
    return a[1] > b[1] ? -1 : 1;
  });
  let sum:number = 0;
  for (let i:number = 0; i < boxTypes.length; i++) {
    let item:number[] = boxTypes[i];
    if (truckSize > item[0]) {
      sum += item[0] * item[1];
      truckSize -= item[0];
    } else {
      sum += truckSize * item[1];
      return sum;
    }
  }
  return sum;
}

function largestNumber(nums: number[]): string {
  const len:number = nums.length;
  if (len === 1) {
    return String(nums[0]);
  }
  let numsArr:string[] = [];
  for (let i:number = 0; i < len; i++) {
    numsArr[i] = String(nums[i]);
  }
  numsArr.sort((a, b) => {
    return String(a) + String(b) > String(b) + String(a) ? -1 : 1;
  });
  let res:string = numsArr.join('');
  while (res[0] === '0' && res.length > 1) {
    res = res.slice(1);
  }
  return res;
};
