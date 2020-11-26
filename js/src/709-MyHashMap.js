/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    // 循环字符串，获取对应的keycode，然后减去长度即可
    const len = str.length;
    for (let i = 0; i < len; i++) {
        let index = str.charCodeAt(i);
        if (index <= 90 && index >= 65) {
            index += 32;
            let newStr = String.fromCharCode(index);
            str = str.slice(0, i) + newStr + str.slice(i + 1);
        }
    }
    return str;
};