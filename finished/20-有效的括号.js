// 检测括号有效性
// 如果是左半部分，不用管，直接放在另一个字符串；
// 如果是右半部分，必须在左边找到这个对应的字符串，位置需要正确，然后删除，否则返回false
// 如果最后结果字符串长度是0，那么就是有效的括号字符串
// 执行用时 : 56 ms , 在所有 JavaScript 提交中击败了 99.60% 的用户
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let result = '';
  const left = ['(', '[', '{'];
  for (let i = 0, len = s.length; i < len; i++) {
    if (left.includes(s.charAt(i))) {
      result += s.charAt(i);
    }
    else {
      if ((s.charAt(i) === ')' && result.charAt(result.length - 1) === '(') || (s.charAt(i) === ']' && result.charAt(result.length - 1) === '[') || (s.charAt(i) === '}' && result.charAt(result.length - 1) === '{')) {
        result = result.substr(0, result.length - 1);
      }
      else {
        return false;
      }
    }
  }
  return result.length === 0;
};

console.log(isValid('{}(){}[]'));
console.log(isValid('{()}{}['));
console.log(isValid('{[]}'));
console.log(isValid('([)]'));
