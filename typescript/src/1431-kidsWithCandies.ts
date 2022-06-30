function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max: number = Math.max(...candies);
  return candies.map(item => {
    return max - item <= extraCandies;
  });
}

export {kidsWithCandies};
