/**
 * @param {string} s
 * @return {string}
 * [345] 反转字符串中的元音字母
 */
// 416 ms , 在所有 JavaScript 提交中击败了 5.13%
const reverseVowels = function(s) {
  const strs = s;
  // 辅助函数，判断是否是元音
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const isVowel = (str) => {
    const s = str.toLocaleLowerCase();
    return vowels.includes(s);
  };
  const dict = {};
  let vowelArr = [];
  for (let i = 0; i < strs.length; i++) {
    if (isVowel(strs[i])) {
      dict[i] = true;
      vowelArr.push(strs[i]);
    }
  }
  // 如果没有元音，直接返回
  if (dict.length === 0) return s;
  vowelArr = vowelArr.reverse();
  console.log(vowelArr);
  let result = '';
  for (let i = 0; i < strs.length; i++) {
    if (dict[i]) {
      const item = vowelArr.shift();
      result = result + item;
    } else {
      result = result + strs[i];
    }
    console.log(result);
  }
  return result;
};
