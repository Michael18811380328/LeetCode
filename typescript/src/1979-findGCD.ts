function findGCD(nums: number[]): number {
    let min:number = Math.min(...nums);
    let max:number = Math.max(...nums);
    // 如果相等，或者可以相除，返回最小值
    if (min === max || max % min === 0) {
        return min;
    }
    let i:number = 0;
    for (i = Math.floor(min / 2 + 1); i > 0; i--) {
        if (max % i === 0 && min % i === 0) {
            return i;
        }
    }
    return 1;
};