/**
 Do not return anything, modify arr in-place instead.
 */
// 100 ms, 在所有 typescript 提交中击败了100.00%
function duplicateZeros(arr: number[]): void {
    const len:number = arr.length;
    let i:number = 0;
    for (; i < len; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            i++;
            arr.pop();
        }
    }
};