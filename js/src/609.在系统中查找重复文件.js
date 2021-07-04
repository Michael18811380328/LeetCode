/*
 * @lc app=leetcode.cn id=609 lang=javascript
 *
 * [609] 在系统中查找重复文件
 */

// @lc code=start
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
//  160 ms, 在所有 JavaScript 提交中击败了79.31%
var findDuplicate = function(paths) {
  let dict = {};
  // "root/a 1.txt(abcd) 2.txt(efgh)"
  let handlePath = (path) => {
    let res = path.split(' ');
    let realPath = res.shift(); // root/a
    // [1.txt(abcd), 2.txt(efgh)]
    for (let j = 0; j < res.length; j++) {
      const file = res[j];
      // 然后把文件名和文件内容分别获取到
      let index = file.indexOf('(');
      let fileName = file.slice(0, index);
      let fileContent = file.slice(index + 1, file.length - 1);
      // console.log(fileName, fileContent);
      if (!dict[fileContent]) {
        dict[fileContent] = [];
      }
      dict[fileContent].push(realPath + '/' + fileName);
    }
  };

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    handlePath(path);
  }
  let res = [];
  for (let key in dict) {
    let value = dict[key];
    if (value.length > 1) res.push(value);
  }
  return res;
};
// @lc code=end

