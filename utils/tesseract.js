const fs = require('fs');
const { exec } = require('child_process');

// 类型：node 脚本
// 批量 ORM 图片文件(默认 tesseract 配置，可以识别普通图片，复杂混乱图片识别效率不高)
var runNodes = async function(files, father_path) {
  for (let i = 0; i < files.length; i++) {
    const URL = father_path + '/' + files[i];
    const command = `tesseract ${URL} output -l chi_sim --oem 3 --psm 3 && cat output.txt > ${i}.md`
    await exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`执行的错误: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
    });
  }
}

const path = './images';

if (!fs.existsSync(path)) {
  console.log(`${path} is invalid`);
  return;
}

var files = fs.readdirSync(path);

runNodes(files, path);
