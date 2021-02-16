/**
 * @param {number[]} nums
 * @return {number}
 */
// 76 ms, 在所有 JavaScript 提交中击败了86.27%
var sumOfUnique = function(nums) {
    let dict = {};
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let key = nums[i];
        if (!dict[key]) {
            dict[key] = 1;
        } else {
            dict[key] ++;
        }
    }
    let sum = 0;
    for (let key in dict) {
        if (dict[key] === 1) {
            sum += parseInt(key);
        }
    }
    return sum;
};