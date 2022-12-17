const path = require('path');
const fs = require('fs');


const generatorLanguage = (name, content) => {
  return (`
### ${name}

~~~js
${content}
~~~

  `);
}

var getJSFiles = function(files, father_path) {
  for (let i = 0; i < files.length; i++) {
    if (files[i] === '.DS_Store') {
      continue;
    }
    if (files[i].includes('.js')) {
      let newPath = father_path + '/' + files[i];
      res.push(newPath);
    }
  }
}

var filepath = path.resolve(__dirname, '../src');
var files = fs.readdirSync(filepath);
var res = [];
getJSFiles(files, filepath);

let resStr = '';
for (let j = 0; j < res.length; j++) {
  let content = fs.readFileSync(res[j], 'utf-8');
  let filename = res[j].slice(res[j].lastIndexOf('/') + 1);
  resStr += generatorLanguage(filename, content);
}

fs.writeFileSync('./all-leetcode.md', resStr);
