function isCovered(ranges: number[][], left: number, right: number): boolean {
  let arr: number[] = new Array(51).fill(0);
  for (let i: number = 0; i < ranges.length; i++) {
    let subRange: number[] = ranges[i];
    if (subRange[0] > right || subRange[1] < left) {
        continue;
    }
    for (let j: number = subRange[0]; j <= subRange[1]; j++) {
        arr[j] = 1;
    }
  }
  for (let i: number = left; i <= right; i++) {
    if (arr[i] === 0) {
      return false;
    }
  }
  return true;
};
