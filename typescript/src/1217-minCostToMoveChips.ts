function minCostToMoveChips(position: number[]): number {
  let odd: number = 0;
  let even: number = 0;
  const len: number = position.length;
  for (let i: number = 0; i < len; i++) {
    position[i] % 2 === 0 ? even++ : odd++;
  }
  return Math.min(odd, even);
};
