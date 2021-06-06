const fs = require('fs')

// 给文件加空行（如果文件末尾不是空行）
function addLine(path) {
  const files = fs.readdirSync(path);
  for (file of files) {
    // 如果是隐藏文件，直接跳过
    if (file[0] === '.' || file === 'node_modules') {
      continue;
    }
    // 如果是文件夹，递归
    if (file.indexOf('.') === -1) {
      addLine(path + '/' + file);
    }
    // 如果是要求的文件
    if (file.indexOf('.py') > -1 || file.indexOf('.js') > -1 || file.indexOf('.ts') > -1) {
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
      // 否则，在文件末尾写入一个空行
      fs.appendFile(currentPath, '\n', err => function () {});
    }
  }
}

// 这里放需要处理的目录
const initDir = '/test/';

addLine(initDir);
