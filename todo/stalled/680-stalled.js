/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if (s.length < 2) return true;
    // 可以转换成：加上一个字符，是回文字符串
    let start = 0;
    let end = s.length - 1;
    let flag = true;
    while (start < end) {
        if (s[start] === s[end]) {
            start++;
            end--;
        }
        else {
            if (flag === false) {
                console.log(start, end);
                return false;
            }
            if (s[start] === s[end - 1] && s[start + 1] === s[end - 2]) {
                end-=2;
                start++;
                flag = false;
            } else if (s[start + 1] === s[end] && s[start + 2] === s[end - 1]) {
                start+=2;
                end--;
                flag = false;
            } else {
                return false;
            }
        }
    }
    return true;
};

// 现在还有问题