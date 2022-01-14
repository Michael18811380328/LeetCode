var fs = require('fs');
var process = require('child_process');

const reg = new RegExp('dot', 'g');

function generateGraph(path) {
  const files = fs.readdirSync(path);
  for (file of files) {
    // ignore node_modules and hide file
    if (file[0] === '.' || file === 'node_modules') {
      continue;
    }
    if (file.indexOf('.') === -1) {
      generateGraph(path + '/' + file);
    }
    if (file.toLowerCase().match(reg) !== null) {
      var currentPath = encodeURI(path + '/' + file);
      if (fs.existsSync(currentPath) === false) {
        continue;
      }
      let result = file.replace('.dot', '.png')
      let cmd = `dot -Tpng ${currentPath} test.dot -o ${encodeURI(path + '/' + result)}`;
      runScript(cmd, file);
    }
  }
}

function runScript(cmd, file_name = '') {
  process.exec(cmd, function(error) {
    if (error) {
      console.log("error:"+error);
    } else {
      console.log(`${file_name} generate success!`);
    }
  });
}

// this is graph path
const initDir = '/Users/seafile/desktop/test-flow';
generateGraph(initDir);
