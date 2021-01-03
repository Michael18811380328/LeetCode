/*
 * @lc app=leetcode.cn id=937 lang=javascript
 *
 * [937] 重新排列日志文件
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
// Your runtime beats 80.65 % of javascript submissions
var reorderLogFiles = function(logs) {
  // 数组进行排序
  // 首先判断是数字还是字符
  logs.sort((a, b) => {
    let typeA = getType(a);
    let typeB = getType(b);
    if (typeA === false && typeB === false) {
      return 1;
    } else if (typeA === false) {
      return 1;
    } else if (typeB === false) {
      return -1;
    } else {
      return typeA > typeB ? 1 : -1;
    }
  });
  return logs;
};

var getType = (log) => {
  let index = log.indexOf(' ');
  let str = log.slice(index).replace(/\s/g, '');
  if (isNaN(Number(str))) {
    let res = log.slice(index);
    return res;
  } else {
    return false;
  }
};
// @lc code=end

