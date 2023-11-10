const fs = require('fs');
const path = require('path');

const entry = path.resolve(__dirname, '../public/locale');
const output = path.resolve(__dirname, '../public/locale');

const source_lan = 'en';
const files = fs.readdirSync(path.join(entry, source_lan));
const file_name = files[0];

const generate = (lang, content) => {
  return (
    `
    const ${lang} = ${content};
    export default ${lang};
    `
  );
}

const output_lans = ['de', 'fr'];
for (let i = 0; i < output_lans.length; i++) {
  let lang = output_lans[i];
  let content_path = path.join(entry, lang, file_name);
  if (!fs.existsSync(content_path)) {
    continue;
  }
  let content = fs.readFileSync(content_path, 'utf-8');
  let output_path = path.join(output, `${lang}.js`);
  let output_content = generate(lang, content);
  fs.writeFileSync(output_path, output_content);
}

// 写一下工具函数的作用
// 翻译平台上是 JSON 文件，下载后，通过这个脚本转换成 JSON 文件
