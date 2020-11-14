/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 168 ms
// , 在所有 JavaScript 提交中击败了
// 29.58%
// 的用户
var groupAnagrams = function(strs) {
  let hash = {};

  var sequenceStr = (str) => {
    let arr = str.split('');
    arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    return arr.join('');
  }

  // 2 把每一项字符串排序一下
  for (let i = 0; i < strs.length; i++) {
    item = sequenceStr(strs[i]);
    if (!hash[item]) {
      hash[item] = [];
    }
    hash[item].push(i);
  }

  // console.log(hash);
  
  // 3 创建一个结果数组
  let result = [];

  for (let key in hash) {
    let valueArr = hash[key];
    let resArr = [];
    valueArr.forEach(item => {
      resArr.push(strs[item]);
    });
    result.push(resArr);
  }
  return result;
};