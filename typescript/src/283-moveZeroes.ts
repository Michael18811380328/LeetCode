// 84 ms, 在所有 typescript 提交中击败了95.71%
function moveZeroes(nums: number[]): void {
  let index:number = 0;
  const len:number = nums.length;
  let i:number = 0;
  for (; i < len;) {
      if (i > len - index) {
          return;
      }
      if (nums[i] === 0) {
          nums.splice(i, 1);
          nums.push(0);
          index++;
      } else {
          i++;
      }
  }
};

export { moveZeroes };
