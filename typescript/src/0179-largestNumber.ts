function largestNumber(nums: number[]): string {
  const len: number = nums.length;
  if (len === 1) {
    return String(nums[0]);
  }
  const numsArr: string[] = [];
  for (let i = 0; i < len; i++) {
    numsArr[i] = String(nums[i]);
  }
  numsArr.sort((a, b) => {
    return String(a) + String(b) > String(b) + String(a) ? -1 : 1;
  });
  let res: string = numsArr.join('');
  while (res[0] === '0' && res.length > 1) {
    res = res.slice(1);
  }
  return res;
}

export {largestNumber};
