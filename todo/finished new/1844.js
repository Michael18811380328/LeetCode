/**
 * @param {string} s
 * @return {string}
 */
//  84 ms, 在所有 JavaScript 提交中击败了65.00%
const shift = (c, x) => String.fromCharCode(c.charCodeAt() + x * 1);

var replaceDigits = function(s) {
    const len = s.length;
    let s1 = '';
    for (let i = 0; i < len; i++) {
        if (i % 2 === 1) {
            // replace
            s1 = s1 + shift(s[i-1], s[i]) 
        }
        else {
            s1 = s1 + s[i];
        }
    }
    return s1
};
