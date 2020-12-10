/*
 * @lc app=leetcode.cn id=1496 lang=javascript
 *
 * [1496] 判断路径是否相交
 */

// @lc code=start
/**
 * @param {string} path
 * @return {boolean}
 */
// 84 ms
// , 在所有 JavaScript 提交中击败了
// 71.95%
// 的用户
var isPathCrossing = function(path) {
  if (path.length === 1) return false;
  var getKey = function(arr) {
    return '' + arr[0] + '-' + arr[1];
  }
  // 然后设置一个字典存储已经走过的坐标
  let dict = {};
  // 设置初始点
  let previous = [0, 0];
  let key0 = getKey(previous);
  dict[key0] = true;
  // 循环当前路径，获取当前的点的坐标
  for (let i = 0; i < path.length; i++) {
    let item = path[i];
    switch (item) {
      case 'N':
        previous[0]++;
        break;
      case 'S':
        previous[0]--;
        break;
      case 'E':
        previous[1]++;
        break;
      case 'W':
        previous[1]--;
        break;
      default:
        break;
    }
    let key = getKey(previous);
    // 如果再次走这个坐标，那么就是错误的
    if (dict[key]) {
      return false;
    } else {
      dict[key] = true;
    }
  }
  return false;
};

// @lc code=end

