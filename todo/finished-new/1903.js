/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let res = num;
    while (res.length > 0) {
        let last = res[res.length - 1];
        if (last % 2 === 1) {
            return res;
        } else {
            res = res.slice(0, res.length - 1);
        }
    }
    return '';
};