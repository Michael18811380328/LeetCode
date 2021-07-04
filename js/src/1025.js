/**
 * @param {number} N
 * @return {boolean}
 */
// 84 ms, 在所有 JavaScript 提交中击败了51.32%
var divisorGame = function(N) {
    return N % 2 === 0;
};

// 因为一个数始终能被1整除，那么我们假设每次最优解就是取1或者奇数
// 动态规划：N 的情况，就是 N - 1 的情况 + 1 的情况。就是一直取反的情况
// f(n) = -f(n - 1) 
