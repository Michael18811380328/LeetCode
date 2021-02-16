/**
 * @param {string} s
 * @return {string}
 */
// 84 ms, 在所有 JavaScript 提交中击败了97.58%
var reverseStr = function(str) {
    return str.split('').reverse().join('');
}

var reverseWords = function(s) {
    const len = s.length;
    if (len === 0) return s;
    let arr1 = s.split(' ');
    let arr2 = arr1.map(item => {
        return reverseStr(item);
    });
    return arr2.join(' ');
};