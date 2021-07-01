/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
// 92 ms
// , 在所有 JavaScript 提交中击败了
// 65.39%
// 的用户
var simplifyPath = function(path) {
  // 先处理其他情况
  // 多个连续斜杠需要用一个斜杠替换
  while (path.indexOf('//') > -1) {
    path = path.replace(/\/\//g, '/');
  }
  // ./ 直接替换成空
  // path = path.replace(/\.\.\./g, '');
  let stack = ['/'];
  path = path.slice(1);
  while (path.indexOf('/') > -1) {
    // console.log(path);
    let index = path.indexOf('/');
    let item = path.slice(0, index + 1);
      // console.log(item);
    switch (item) {
      case '/':
        stack.push(item);
        break;
      case './':
        break;
      case '../':
        if (stack.length > 1) stack.pop();
        break;     
      default:
        stack.push(item);
        break;
    }
    path = path.slice(index + 1);
  }

  if (path === '.') {
    console.log(1);
  } else if (path === '..' ) {
    if (stack.length > 1) {
        stack.pop();
    }
  } else if (path.length !== 0) {
    stack.push(path); // ...
  }

  let res = stack.join('');
  // 如果只有根目录，那么最后可以是/
  if (res.length > 1 && res[res.length - 1] === '/') {
    res = res.slice(0, res.length - 1);
  }
  return res;
};
// @lc code=end

