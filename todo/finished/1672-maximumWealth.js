/**
 * @param {number[][]} accounts
 * @return {number}
 */
// 76 ms, 在所有 JavaScript 提交中击败了91.84%
var maximumWealth = function(accounts) {
    let len = accounts.length;
    let max = 0;
    for (let i = 0; i < len; i++) {
        let sum = accounts[i].reduce((a, b) => a + b, 0);
        max = sum > max ? sum : max;
    }
    return max;
};
