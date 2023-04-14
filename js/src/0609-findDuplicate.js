/*
 * @lc app=leetcode.cn id=609 lang=javascript
 * [609] 在系统中查找重复文件
 */
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
//  160 ms, 在所有 JavaScript 提交中击败了79.31%
const findDuplicate = function(paths) {
  const dict = {};
  // "root/a 1.txt(abcd) 2.txt(efgh)"
  const handlePath = (path) => {
    const res = path.split(' ');
    const realPath = res.shift(); // root/a
    // [1.txt(abcd), 2.txt(efgh)]
    for (let j = 0; j < res.length; j++) {
      const file = res[j];
      // 然后把文件名和文件内容分别获取到
      const index = file.indexOf('(');
      const fileName = file.slice(0, index);
      const fileContent = file.slice(index + 1, file.length - 1);
      if (!dict[fileContent]) {
        dict[fileContent] = [];
      }
      dict[fileContent].push(`${realPath}/${fileName}`);
    }
  };

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    handlePath(path);
  }
  const res = [];
  for (const key in dict) {
    const value = dict[key];
    if (value.length > 1) res.push(value);
  }
  return res;
};

export { findDuplicate };
