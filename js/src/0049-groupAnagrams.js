/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 168 ms , 在所有 JavaScript 提交中击败了29.58% 的用户
const groupAnagrams = function (strs) {
  const hash = {};
  const sequenceStr = (str) => {
    const arr = str.split('');
    arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    return arr.join('');
  };
  // 2 把每一项字符串排序一下
  for (let i = 0; i < strs.length; i++) {
    const item = sequenceStr(strs[i]);
    if (!hash[item]) {
      hash[item] = [];
    }
    hash[item].push(i);
  }
  // 3 创建一个结果数组
  const result = [];
  // eslint-disable-next-line
  for (let key in hash) {
    const valueArr = hash[key];
    const resArr = [];
    valueArr.forEach((item) => {
      resArr.push(strs[item]);
    });
    result.push(resArr);
  }
  return result;
};

export { groupAnagrams };
