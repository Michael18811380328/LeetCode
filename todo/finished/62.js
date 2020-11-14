// 62. 不同路径
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

// 问总共有多少条不同的路径？
// 

// 104 ms
// , 在所有 JavaScript 提交中击败了
// 11.40%
// 的用户

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var hashTable = {};
    var test = function(a, b) {
        let key = String(a) + '+' + String(b);
        if (hashTable[key]) return hashTable[key];

        let res;
        if (a === 0 || b === 0) {
            res = 0;
        }
        if (a === 1 || b === 1) {
            res = 1;
        }
        else {
            res = test(a, b - 1) + test(a - 1, b);
        }

        hashTable[key] = res;

        return res;
    }
    return test(m, n);
};



