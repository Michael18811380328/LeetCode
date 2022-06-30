function minCostToMoveChips(position: number[]): number {
  let odd = 0;
  let even = 0;
  const len: number = position.length;
  for (let i = 0; i < len; i++) {
    position[i] % 2 === 0 ? even++ : odd++;
  }
  return Math.min(odd, even);
}

export {minCostToMoveChips};
