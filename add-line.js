const fs = require('fs')

// 给JS文件加空行（如果文件末尾不是空行）
function readFile(path) {
  const files = fs.readdirSync(path);
  for (file of files) {
    // 如果是隐藏文件，直接跳过
    if (file[0] === '.') {
      continue;
    }
    if (file === 'node_modules') {
      continue;
    }
    // 如果是文件夹，递归
    if (file.indexOf('.') === -1) {
      readFile(path + '/' + file);
    }
    // 如果是文件（js）
    // 这里改成同步的文件读写
    if (file.indexOf('.js') > -1) {
      var currentPath = path + '/' + file;
      var checkDir = fs.existsSync(currentPath);
      if (checkDir === false) {
        continue;
      }
      var data = fs.readFileSync(currentPath, 'utf-8');
      // 如果已经是空行，继续执行
      if (data[data.length - 1] === '\n') {
        continue;
      }
      // console.log(currentPath);
      // // 否则，在文件末尾写入一个空行
      fs.appendFile(currentPath, '\n', err => function () {});
    }
  }
}

const initDir = '/Users/seafile/PersonalRepo/LeetCode';

readFile(initDir);
