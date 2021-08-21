const HTML = 'text/html';
const TEXT = 'text/plain';

// 获取剪切板内容
function getEventTransfer(event) {
  // 获取传递者对象
  const transfer = event.dataTransfer || event.clipboardData;

  // 获取剪切板上的三部分内容（html/text/files）
  let html = getType(transfer, HTML);
  let text = getType(transfer, TEXT);
  let files = getFiles(transfer);

  // 然后把这部分打印出来
  /* eslint-disable */
  console.log('-------------------- Copied Data Start -----------------------');
  console.log('html:', html);
  console.log('text:', text);
  console.log('files:', files);
  console.log('-------------------- Copied Data End -------------------------');
  /* eslint-enable */

  // 返回三种类型
  // paste html
  if (html) {
    return  {html, text, type: 'html'};
  }

  // paste local picture or other files here
  if (files && files.length) {
    return {'files': files, type: 'files'};
  }
  
  // paste text
  if (text) {
    return {text, type: 'text'};
  }
}

/**
 * 辅助函数（获取类型）
 * @param {object} transfer 
 * @param {string} type (text|html)
 * @returns data|null
 */
function getType(transfer, type) {
  if (!transfer.types || !transfer.types.length) {
    // COMPAT: In IE 11, there is no `types` field but `getData('Text')`
    // is supported`. (2017/06/23)
    return type === TEXT ? transfer.getData('Text') || null : null;
  }
  return transfer.getData(type);
}

// 辅助函数：获取文件
function getFiles(transfer) {
  let files;
  try {
    // Get and normalize files if they exist.
    if (transfer.items && transfer.items.length) {
      // 这里写的不错，需要考虑
      files = Array.from(transfer.items)
        .map(item => (item.kind === 'file' ? item.getAsFile() : null)).filter(exists => exists);
    }
    else if (transfer.files && transfer.files.length) {
      files = Array.from(transfer.files);
    }
  } catch (err) {
    if (transfer.files && transfer.files.length) {
      files = Array.from(transfer.files);
    }
  }
  return files;
}

export default getEventTransfer;