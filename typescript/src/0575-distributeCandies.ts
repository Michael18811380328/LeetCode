function distributeCandies(candyType: number[]): number {
  return Math.min([...new Set(candyType)].length, candyType.length / 2);
}

export {distributeCandies};
