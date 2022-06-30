function canComplete(leftArr: number[]): number {
  let sum = 0;
  const len: number = leftArr.length;
  leftArr.forEach(item => (sum += item));
  if (sum < 0) {
    return -1;
  }
  sum = 0;
  for (let i = 0; i < len; i++) {
    const tmp: number[] = [];
    const tmpArr: number[] = tmp
      .concat(leftArr.slice(i, len))
      .concat(leftArr.slice(0, i));
    for (let j = 0; j < len; j++) {
      sum += tmpArr[j];
      if (sum < 0) {
        break;
      }
    }
    if (sum >= 0) {
      return i;
    }
    sum = 0;
  }
  return 0;
}

function canCompleteCircuit(gas: number[], cost: number[]): number {
  const len: number = gas.length;
  const leftover: number[] = new Array(len);
  let i = 0;
  for (; i < len; i++) {
    leftover[i] = gas[i] - cost[i];
  }
  return canComplete(leftover);
}

export {canCompleteCircuit};
