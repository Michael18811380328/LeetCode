const fs = require('fs');

// 辅助函数：获取模块主函数名称
function getModuleName(path) {
  var data = fs.readFileSync(path, 'utf-8');
  let index1 = data.indexOf(' ', data.indexOf('const '));
  let index2 = data.indexOf(' ', index1 + 1);
  return data.slice(index1 + 1, index2);
}

// 类型：node 脚本
// 需求：某些文件名是中文，需要改成英文名
function addExport(path) {
  const files = fs.readdirSync(path);
  const fileNameReg = new RegExp('js', 'g');
  for (file of files) {

    // 去掉特殊情况
    if (file[0] === '.' || file === 'LICENSE' || file === 'Makefile') {
      continue;
    }

    if (file.toLowerCase().match(fileNameReg) !== null) {
      const suffix_index = file.indexOf('.js');
      
      // 汉字的 ASCII 大于10000
      if (file[suffix_index - 1].charCodeAt(0) > 10000) {

        // 两种情况 0106.从中序与后序遍历序列构造二叉树.js
        if (file.indexOf('-') === -1) {
          let first_index = file.indexOf('.');
          const start = file.slice(0, first_index); // 序号 0106
          const end = file.slice(suffix_index); // 文件名后缀 .js
          const tmpName = `${path}/${start + end}`;
          // 1、把文件名的中文去掉（重命名）
          fs.rename(`${path}/${file}`, tmpName, (err) => {
            // 2、读取文件内容，拿到模块名称
            let newName = getModuleName(tmpName);
            // 3、把模块名写入文件名中
            fs.rename(tmpName, `${path}/${start}-${newName}${end}`, (err) => {
              if (err) throw err;
            });
          });
        }
        // 0106-从中序与后序遍历序列构造二叉树.js
        else {
          let first_index = file.indexOf('-');
          const start = file.slice(0, first_index);
          const end = file.slice(suffix_index);
          const tmpName = `${path}/${start + end}`;
          fs.rename(`${path}/${file}`, tmpName, (err) => {
            let newName = getModuleName(tmpName);
            fs.rename(tmpName, `${path}/${start}-${newName}${end}`, (err) => {
              if (err) throw err;
            });
          });
        }
      }
    }
  }
}

// 这里放需要处理的目录（暂时用绝对路径，目前只有这个路径）
const initDir = '/Users/seafile/desktop/code-seafile/LeetCode/js/src';

addExport(initDir);
