function trimMean(arr: number[]): number {
  const len1:number = arr.length / 20;
  arr.sort((a, b) => a - b);
  arr.splice(0, len1);
  arr.splice(-len1, len1);
  let sum:number = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
};

export { trimMean };