function intersection(nums: number[][]): number[] {
  const len: number = nums.length;
  let dict = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      let curr = nums[i][j];
      if (!dict[curr]) {
        dict[curr] = 0;
      }
      dict[curr] = dict[curr] + 1;
    }
  }
  let result: number[] = [];
  for (let key in dict) {
    if (dict[key] === len) {
      result.push(Number(key));
    }
  }
  result = result.sort((a, b) => a > b ? 1 : -1);
  return result;
};
