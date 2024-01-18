/**
 * seatable 浏览器脚本
 * 需求: 把某个表格的多个课程笔记，分别导出为不同的 markdown 文件
 */

// 需要导出的表格
const table = window.app.state.value.tables[0];

// 根据单选列的标签分类，导出不同的文档
const options = table.columns[3].data.options;
const IdNameMap = {};
options.forEach(option => {
  IdNameMap[option.id] = option.name;
});

// 把不同类别的标签，新建为不同的文档
let result = {};
for (let key in IdNameMap) {
  result[IdNameMap[key]] = [];
}

// 获取内容：遍历表格的全部行，然后获取对应的名称、内容，写入字符串
function getResuleFromTable() {
  table.rows.forEach(currentRow => {
    if (currentRow && currentRow['0000'] && currentRow['jR0Y']) {
      const detail = currentRow['unlw']?.text || '';
      const title = currentRow['wvVY'] || '';
      const sequnece = currentRow['0000'] || '';
      const tagName = IdNameMap[currentRow['jR0Y']];
      let item = `
## ${sequnece} ${title}
\n
${detail}
  `;
      result[tagName].push(item);
    }
  });
}

// 辅助函数：暂停300ms
function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 300);
  });
}

// 把 JS 字符串转换成 markdown 并下载
async function downLoadResult(fileName, resultStr) {
  // 谷歌浏览器每次下载个数不超过10个，改成间隔下载，避免并发太高
  await sleep();
  const blob = new Blob([resultStr], {
    type: "text/plain;charset=utf-8"
  });
  const objectURL = URL.createObjectURL(blob);
  const aTag = document.createElement('a');
  aTag.href = objectURL;
  aTag.download = fileName + "-笔记.md";
  aTag.click();
  URL.revokeObjectURL(objectURL);
}

getResuleFromTable();

for (let name in result) {
  if (result[name].length > 0) {
    result[name].unshift(`# ${name}笔记 \n`);
    await downLoadResult(name, result[name].join(' '));
  }
}
