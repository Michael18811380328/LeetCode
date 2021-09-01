/**
 * @param {number} N
 * @return {number}
 */
// 80 ms, 在所有 JavaScript 提交中击败了80.62%
let hashTable = {};
// 这个主要是缓存和递归
var fib = function(N) {
    if (N === 0) return 0;
    if (N === 1 || N === 2) return 1;
    if (hashTable[N]) {
        return hashTable[N];
    } else {
        let result = fib(N - 1) + fib(N - 2);
        hashTable[N] = result;
        return result;
    }
};
