const fs = require('fs');
const process = require('child_process');

// 先测试一下当前环境下是否支持 gcc
const cmd = 'gcc';
process.exec(cmd, function(error, stdout, stderr) {
  console.log("error:" + error);
  console.log("stdout:" + stdout);
  console.log(stderr);
});

// 类型：node 脚本（在node环境下运行）
// 需求：leetcode 中有 C 代码，可能出错，每一个手动编译排错比较慢
// 作用：批量编译C代码，确保静态换件下不报错
function compileFile(path) {

  const files = fs.readdirSync(path);
  // 判断文件类型
  const fileNameReg = new RegExp('c', 'g');

  for (file of files) {
    // exclude file
    if (file === 'node_modules') {
      continue;
    }

    // 如果是文件夹，递归子文件夹
    if (file.indexOf('.') === -1) {
      compileFile(path + '/' + file);
    }

    // 如果文件名满足文件类型，那么下一步处理
    if (file.toLowerCase().match(fileNameReg) !== null) {
      var currentPath = encodeURI(path + '/' + file);
      var checkDir = fs.existsSync(currentPath);
      if (checkDir === false) {
        continue;
      }
      const cmd = 'gcc ' + currentPath + ' -o test.out';
      console.log(cmd)
      process.exec(cmd, function(error, stdout, stderr) {
        if (error !== null) {
          console.log("error:" + error);
          console.log('\n')
        }
        // console.log("stdout:"+stdout);
        // console.log("stderr:"+stderr);
      });
    }
  }
}

// 需要处理 Clang 的目录（绝对路径）
// 现在 C 部分还有不少问题，稍后修复一下基本的编译错误
const initDir = '/Users/seafile/PersonalRepo/LeetCode/book/aha-algorithms';

compileFile(initDir);
