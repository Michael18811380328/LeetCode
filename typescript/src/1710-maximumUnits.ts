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
};