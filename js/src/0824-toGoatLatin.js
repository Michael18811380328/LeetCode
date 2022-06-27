/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

//
/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = function(S) {
  const arr = S.split(' ');
  // 第一次使用数组遍历（双重循环性能不好）
  // 92 ms, 在所有 JavaScript 提交中击败了36.67%
  // let flags = ['a', 'e', 'i', 'o', 'u'];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let item = arr[i];
    const first = item[0].toLowerCase();
    // 第二次直接使用字符串匹配
    // 80 ms, 在所有 JavaScript 提交中击败了88.89%
    if (first !== 'a' && first !== 'e' && first !== 'i' && first !== 'o' && first !== 'u') {
      item = item.slice(1, item.length) + item[0];
    }
    item = `${item}ma`;
    const newStrLen = item.length + i + 1;
    item = item.padEnd(newStrLen, 'a');
    arr[i] = item;
  }
  return arr.join(' ');
};

export { toGoatLatin };
