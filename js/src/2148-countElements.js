/**
 * @param {number[]} nums
 * @return {number}
 * 难度：简单
 */
var countElements = function(nums) {
    // 思路：数组去重，然后找到最大值和最小值
    // 如果去重后，只有两个元素，那么就返回0
    // 然后过滤一下原数组，留下的部分求长度即可
    // 60 ms, 在所有 JavaScript 提交中击败了91.52%
    let arr = Array.from(new Set(nums)).sort((a, b) => {
        return a > b ? 1 : -1;
    });
    const len = arr.length;
    if (len <= 2) {
        return 0;
    }
    let a = arr[0];
    let b = arr[len - 1];
    return nums.filter(num => {
        return num !== a && num !== b;
    }).length;
};