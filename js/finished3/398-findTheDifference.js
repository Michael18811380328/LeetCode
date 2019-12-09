// 398-findTheDifference.js
// 找到两个字符串中不同的一个字符（顺序可能打乱）
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// 思路一：遍历其中的一个字符串，然后indexOf另一个字符串，这样需要多次indexOf，性能一般
// 72 ms, 在所有 javascript 提交中击败了73.31%
function findTheDifference(s, t) {
  for (let i = 0; i < t.length; i++) {
    const item = t[i];
    const index = s.indexOf(item);
    if (index === -1) {
      return item;
    } if (index === 0) {
      s = s.slice(1);
    } else {
      s = s.slice(0, index) + s.slice(index + 1, s.length);
    }
  }
  return null;
}

// 思路二：字符串转化成数组，然后数组排序后，循环数组，看哪一个是不同的，这样需要转换
// 84 ms, 在所有 javascript 提交中击败了35.14%
// 实际证明：遇到很长的字符串数组，排序性能不好，直接字符串剪切拼接更快
function findTheDifference2(s, t) {
  const sArr = s.split('').sort();
  const tArr = t.split('').sort();
  for (let i = 0; i < t.length; i++) {
    if (sArr[i] !== tArr[i]) {
      return tArr[i];
    }
  }
  return null;
}

// 思路三: 使用replace，这样性能一般
// 80 ms, 在所有 javascript 提交中击败了50.00%
// 这里编译不通过
function findTheDifference3() {
  // for (let item of s) {
  //   t = t.replace(item, '');
  // }
  // return t;
}

export { findTheDifference, findTheDifference2, findTheDifference3 };
