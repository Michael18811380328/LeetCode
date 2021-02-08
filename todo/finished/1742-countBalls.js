/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
// 120 ms, 在所有 JavaScript 提交中击败了79.44%
var countBalls = function(lowLimit, highLimit) {
    var getSum = (num) => {
        let res = 0;
        while (num > 0) {
            let a = num % 10;
            res += a;
            num = (num - a) / 10;
        }
        return res;
    }
    
    let dict = {};
    for (let i = lowLimit; i <= highLimit; i++) {
        let sum = getSum(i);
        if (!dict[sum]) {
            dict[sum] = 1;
        } else {
            dict[sum]++;
        }
    }
    
    let max = 1;
    for (let key in dict) {
        let value = dict[key];
        if (value > max) max = value;
    }
    return max;
};