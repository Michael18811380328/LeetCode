const fs = require('fs');

// 类型：node 脚本（在node环境下运行）
// 需求：github 要求代码最后一行要留空行（避免文件压缩造成程序问题），实际上不同编辑器可能没有空行
// 作用：给程序文件加空行（如果文件末尾不是空行）
function addLine(path) {
  const files = fs.readdirSync(path);
  // 判断需要增加空行的文件类型
  const suffixList = ['css', 'sass', 'less', 'js', 'ts', 'md'];
  const suffix = suffixList.join('|');
  const fileNameReg = new RegExp(suffix, 'g');

  for (file of files) {
    // 如果是隐藏文件（或者其他 gitignore 文件等），直接跳过
    if (file[0] === '.' || file === 'node_modules' || file === 'LICENSE' || file === 'site') {
      continue;
    }
    // 如果是文件夹，递归子文件夹
    if (file.indexOf('.') === -1) {
      addLine(path + '/' + file);
    }
    // 如果文件名满足文件类型，那么下一步处理
    if (file.toLowerCase().match(fileNameReg) !== null) {
      var currentPath = encodeURI(path + '/' + file);
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

// 这里放需要处理的目录（绝对路径）
const initDir = '/PersonalRepo/HelloSite';

addLine(initDir);
