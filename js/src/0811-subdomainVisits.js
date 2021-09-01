/*
 * [811] 子域名访问计数
 */

// 
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
// 108 ms
// , 在所有 JavaScript 提交中击败了
// 69.56%
// 的用户
var subdomainVisits = function(cpdomains) {
  let dict = {};
  len = cpdomains.length;
  if (len === 0) return [];
  var getNumber = function(address, times) {
    if (!dict[address]) {
      dict[address] = times;
    } else {
      dict[address] += times;
    }
    // 如果存在子域名，那么递归获取次数
    let index = address.indexOf('.');
    if (index > -1) {
      let subAdd = address.slice(index + 1);
      getNumber(subAdd, times);
    }
  }
  for (let i = 0; i < len; i++) {
    let item = cpdomains[i];
    let spaceIndex = item.indexOf(' ');
    let times = Number(item.slice(0, spaceIndex));
    let address = item.slice(spaceIndex + 1);
    getNumber(address, times);
  }
  // 然后把对应的转换成数组输出
  let res = [];
  for (let key in dict) {
    let times = dict[key];
    let str = `${times} ${key}`;
    res.push(str);
  }
  return res;
};


