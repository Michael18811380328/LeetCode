function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => {
    return a[1] > b[1] ? -1 : 1;
  });
  let sum = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    const item: number[] = boxTypes[i];
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

export {maximumUnits};
