// 125- 验证回文字符串
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 说明：本题中，我们将空字符串定义为有效的回文串。
// "A man, a plan, a canal: Panama" true
// "afg" false

/**
 * @param {string} s
 * @return {boolean}
 */
// 思路，使用正则表达式去掉特殊字符，空格
// 如果字符串长度是0，直接返回
// 然后把字符串大小写转换
// 96 ms , 在所有 javascript 提交中击败了 54.02%

function isPalindrome(s) {
  if (s.trim() === '') {
    return true;
  }
  let b = s.replace(/\s*/g, '').replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/ig, '');
  b = b.toLowerCase();
  const len = b.length;
  if (len === 0) {
    return true;
  }
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (b[i] !== b[len - i - 1]) {
      return false;
    }
  }
  return true;
}

export { isPalindrome };
