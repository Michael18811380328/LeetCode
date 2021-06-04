/**
 * @param {string[]} words
 * @return {number}
 */
// 84 ms, 在所有 JavaScript 提交中击败了86.71%
var uniqueMorseRepresentations = function(words) {
    let standard = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    let fn = (str) => {
        let tmp = '';
        let len = str.length;
        for (let i = 0; i < len; i++) {
            let index = str.charCodeAt(i) - 97
            tmp += standard[index]
        }
        // console.log(str, tmp);
        return tmp;
    }
    
    let dict = {};
    let num = 0;
    for (let i = 0; i < words.length; i++) {
        let item = words[i];
        let key = fn(item);
        if (!dict[key]) {
            dict[key] = true;
            num++;
        }
    }
    // console.log(dict);
    return num;
};
