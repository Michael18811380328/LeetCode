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
const subdomainVisits = function(cpdomains) {
  const dict = {};
  len = cpdomains.length;
  if (len === 0) return [];
  var getNumber = function(address, times) {
    if (!dict[address]) {
      dict[address] = times;
    } else {
      dict[address] += times;
    }
    // 如果存在子域名，那么递归获取次数
    const index = address.indexOf('.');
    if (index > -1) {
      const subAdd = address.slice(index + 1);
      getNumber(subAdd, times);
    }
  };
  for (let i = 0; i < len; i++) {
    const item = cpdomains[i];
    const spaceIndex = item.indexOf(' ');
    const times = Number(item.slice(0, spaceIndex));
    const address = item.slice(spaceIndex + 1);
    getNumber(address, times);
  }
  // 然后把对应的转换成数组输出
  const res = [];
  for (const key in dict) {
    const times = dict[key];
    const str = `${times} ${key}`;
    res.push(str);
  }
  return res;
};
