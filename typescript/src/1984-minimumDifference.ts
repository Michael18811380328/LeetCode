function minimumDifference(nums: number[], k: number): number {
    if (k === 1) return 0;
    nums.sort((a, b) => a > b ? 1 : -1);
    let start:number = 0;
    let end:number = start + k - 1;
    let min:number = nums[end] - nums[start];
    for (let i:number = 0; i < nums.length; i++) {
        start++;
        end++;
        if (nums[end] === undefined) break;
        let tmp:number = nums[end] - nums[start];
        min = tmp < min ? tmp : min;
    }
    return min;
};
