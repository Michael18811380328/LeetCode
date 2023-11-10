const fs = require('fs');

// 类型：node 脚本（在node环境下运行）
// 需求：eslint 要求一个模块必须有输出，否则会显示警告
// 作用：给 JS 或者 TS 模块后面增加 export 输入语句
// 预处理：先使用 npm run lint 把函数声明改成 const
function addExport(path) {
  const files = fs.readdirSync(path);
  const suffixList = ['js', 'ts'];
  const suffix = suffixList.join('|');
  const fileNameReg = new RegExp(suffix, 'g');
  for (file of files) {
    if (file[0] === '.' || file === 'node_modules' || file === 'LICENSE' || file === 'site' || file === 'Makefile') {
      continue;
    }
    if (file.indexOf('.') === -1) {
      addExport(path + '/' + file);
    }
    if (file.toLowerCase().match(fileNameReg) !== null) {
      var currentPath = encodeURI(path + '/' + file);
      var checkDir = fs.existsSync(currentPath);
      // 中文目录无法识别（需要把中文路径改成英文路径）
      if (checkDir === false) {
        continue;
      }
      var data = fs.readFileSync(currentPath, 'utf-8');
      // 这里判断JS文件内部是否结尾输入，如果没有输出，增加一个输入和换行
      if (!data.includes('export')) {
        // 默认第一个定义 const 的函数需要输出（首先使用 npm run lint 把 var 转换成 const）
        let const_index = data.indexOf('const ');
        // 获取const后面的两个空格，然后获取输入的函数名
        let first_space_index = data.indexOf(' ', const_index);
        let second_space_index = data.indexOf(' ', first_space_index + 1);
        const fn_name = data.slice(first_space_index + 1, second_space_index);
        fs.appendFile(currentPath, `\nexport { ${fn_name} };\n`, err => function () {
          console.log(err);
        });
      }
    }
  }
}

function addExportTs(path) {
  const files = fs.readdirSync(path);
  const suffixList = ['js', 'ts'];
  const suffix = suffixList.join('|');
  const fileNameReg = new RegExp(suffix, 'g');
  for (file of files) {
    if (file[0] === '.' || file === 'node_modules' || file === 'LICENSE' || file === 'site' || file === 'Makefile') {
      continue;
    }
    if (file.indexOf('.') === -1) {
      addExport(path + '/' + file);
    }
    if (file.toLowerCase().match(fileNameReg) !== null) {
      var currentPath = encodeURI(path + '/' + file);
      var checkDir = fs.existsSync(currentPath);
      // 中文目录无法识别（需要把中文路径改成英文路径）
      if (checkDir === false) {
        continue;
      }
      var data = fs.readFileSync(currentPath, 'utf-8');
      // 这里判断TS文件内部是否结尾输入，如果没有输出，增加一个输入和换行
      if (!data.includes('export')) {
        // 默认第一个定义 function 的函数需要输出（首先使用 npm run lint 把 var 转换成 const）
        let function_index = data.indexOf('function ');
        let first_space_index = data.indexOf(' ', function_index);
        let first_left_index = data.indexOf('(', first_space_index + 1);
        const fn_name = data.slice(first_space_index + 1, first_left_index);
        fs.appendFile(currentPath, `\nexport {${fn_name}};\n`, err => function () {
          console.log(err);
        });
      }
    }
  }
}

// 这里放需要处理的目录（绝对路径）
const jsDir = './LeetCode/js/src';
const tsDir = './LeetCode/typescript/src';

addExport(jsDir);
addExportTs(tsDir);
