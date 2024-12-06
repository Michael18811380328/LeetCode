/**
 * 需求: 把某个课程笔记导出 markdown 文件
 */
const table = window.app.state.value.tables[0];

const rows = table.rows;
const columnKey = table.columns[1].key;

let md = `
# ${table.name}

原始教程链接: ${table.description}

`;
rows.forEach(row => {
  let titleKey = '0000';
  let title = row[titleKey];
  let content = row[columnKey] ? row[columnKey].text : '';
  if (content) {
    md = md + '### ' + title + '\n' + content + '\n\n';
  }
});

// 需要在控制台中执行操作，copy 是浏览器内置函数
copy(md);
