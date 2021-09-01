const fs = require('fs');

// 类型：node 脚本（在node环境下运行）
// 需求：github 中不同题目排序不正确，现在比较首字符排序，不是按照数字排序（2 在 10 的后面）
// 作用：给题目增加前缀0，让 github 显示正常
function rename(path) {
  const files = fs.readdirSync(path);
  for (file of files) {
    let start = file.indexOf('-');
    if (start === -1) {
      // 没有斜杠，有两个点，例如 '1078.bigram分词.js' 尝试把第一个点换成- (已经先处理了)
      // if (file.indexOf('.') !== file.lastIndexOf('.')) {
      //   const firstIndex = file.indexOf('.');
      //   const newFile = file.slice(0, firstIndex) + '-' + file.slice(firstIndex + 1);
      //   fs.rename(path + '/' + file, path + '/' + newFile, function(err) {
      //     if (err) throw err;
      //   });
      // }

      // 如果是（123.js）这样需要手动加上名称，(已经先处理了)
      // if (file.indexOf('.') === file.lastIndexOf('.')) {
      //   console.log(file);
      // }

      // __pycache__ test_leetcode.py 直接跳过
      continue;
    }

    let sequence = Number(file.slice(0, start));
    // 如果第一个 - 前不是数字，例如 '1078.bigram-分词.js' 已经手动更改了
    // if (isNaN(sequence)) {
    //   continue;
    // }
    sequence = '' + sequence;
    // 已经是四位数，不需要加入前导0
    if (sequence.length === 4) {
      continue;
    }
    let newSequence = sequence.padStart(4, '0');
    let newFile = newSequence + file.slice(start);
    // 这里需要获取目录路径（传入的path）
    fs.rename(path + '/' + file, path + '/' + newFile, function(err) {
      if (err) throw err;
    });
  }
}

const initDir = '/Users/seafile/PersonalRepo/LeetCode/';
const subDirs = ['js/src', 'typescript/src', 'python/src', 'python/python3', 'others'];

subDirs.forEach(subdir => {
  rename(initDir + subdir);
});
