/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
// Your runtime beats 7.81 % of javascript submissions
// 方法1
const reverseOnlyLetters = function(S) {
  const len = S.length;
  const resArr = new Array(len);
  const strArr = [];
  for (let i = 0; i < len; i++) {
    const item = S[i];
    const index = item.charCodeAt(0);
    // 65～90为26个大写英文字母，97～122号为26个小写英文字母
    if (
      (index >= 65 && index <= 90)
      || (index <= 122 && index >= 97)
    ) {
      strArr.push(item);
    } else {
      resArr[i] = item;
    }
  }
  strArr.reverse();
  if (strArr.length === len) {
    return strArr.join('');
  }
  let pointer = 0;
  for (let i = 0; i < strArr.length; i++) {
    const item = strArr[i];
    while (resArr[pointer]) {
      pointer++;
    }
    resArr[pointer] = item;
    pointer++;
  }
  return resArr.join('');
};

// 方法二：改进版本
// 116/116 cases passed (88 ms)
// Your runtime beats 42.19 % of javascript submissions
const reverseOnlyLetters2 = function(S) {
  const isLetter = (a) => {
    const index = a.charCodeAt(0);
    return (index >= 65 && index <= 90) || (index <= 122 && index >= 97);
  };

  const len = S.length;
  let str = '';
  for (let i = 0; i < len; i++) {
    const item = S[i];
    if (isLetter(item)) {
      str += item;
    }
  }
  str = str.split('').reverse();
  if (str.length === len) {
    return str.join('');
  }
  let pointer = 0;
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    while (!isLetter(S[pointer])) {
      pointer++;
    }
    S = S.slice(0, pointer) + item + S.slice(pointer + 1);
    pointer++;
  }
  return S;
};
// @lc code=end

export { reverseOnlyLetters, reverseOnlyLetters2 };
