/**
 * @param {string} path
 * @return {string}
 */
// [71] 简化路径
// 92 ms, 在所有 JavaScript 提交中击败了65.39%
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
    let index = path.indexOf('/');
    let item = path.slice(0, index + 1);
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

  // path === '.' break
  if (path === '..' ) {
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
