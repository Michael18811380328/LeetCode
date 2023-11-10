// 这个是从剪切板中获取内容
let getEventTransfer = () => {};

// 在评论中插入元素
onInsertElement = (ref, selection, range, content, nodeType) => {
  // 从当前selection对象中移除所有的range对象,取消所有的选择只 留下anchorNode 和focusNode属性并将其设置为null。
  // 向选区（Selection）中添加一个区域（Range）。
  if (range) {
    selection.removeAllRanges();
    selection.addRange(range);
  }
  return createHtmlElement(ref, selection, range, content, nodeType);
}

// 产生图片节点
generateHtmlElement = (nodeType, content) => {
  if (nodeType === 'image') {
    let parent = document.createElement('div');
    parent.className = 'image-container';
    parent.contentEditable = 'false';

    let child = document.createElement('img');
    child.src = content;
    child.height = 100;
    parent.appendChild(child);
    return parent.outerHTML;
  }
  return null;
}

onSelectParticipants = (ref, selection, range, participant, cb) => {
  if (range) {
    selection.removeAllRanges();
    selection.addRange(range);
    let textNode = range.startContainer;
    // delete entered @ str
    range.setStart(textNode, range.endOffset - 1);
    range.setEnd(textNode, range.endOffset);
    range.deleteContents();
  }
  let newRange = createHtmlElement(ref, selection, range, participant, 'participant');
  if (ref) {
    ref.focus();
  }
  return newRange;
}

onPaste = (e, cb) => {
  e.stopPropagation();
  let cliperData = getEventTransfer(e);

  if (cliperData.files) {
    let file = cliperData.files[0];
    let isImg = /image/i.test(file.type);
    if (isImg) {
      e.preventDefault();
      if (cb) {
        cb(cliperData.files[0]);
      }
    }
  }
  else {
    e.preventDefault();
    let text = cliperData.text;
    if (document.queryCommandSupported('insertText')) {
      document.execCommand('insertText', false, text);
    }
    else {
      document.execCommand('paste', false, text);
    }
  }
}

createHtmlElement = (ref, selection, range, content, nodeType) => {
  let span1, span2, imgContainer;

  if (nodeType === 'image') {
    span1 = document.createElement('div');
    span1.className = 'image-container';
    span1.contentEditable = 'false';

    imgContainer = document.createElement('img');
    imgContainer.src = content;
    imgContainer.height = 100;

    span1.appendChild(imgContainer);
    span2 = document.createElement('span');
    span2.innerHTML = ' ';
  }

  if (nodeType === 'participant') {
    span1 = document.createElement('span');
    span1.className = 'at-text';
    span1.contentEditable = 'true';
    span1.innerHTML = '@' + content.name;

    span2 = document.createElement('span');
    span2.innerHTML = ' ';
  }

  let fragment = document.createDocumentFragment();
  fragment.appendChild(span1);
  let lastNode = fragment.appendChild(span2.firstChild);

  if (range) {
    range.insertNode(fragment);
  } else {
    ref.appendChild(frag);
    range = selection.getRangeAt(0);
  }

  if (lastNode) {
    range = range.cloneRange();
    range.setStartAfter(lastNode);
    range.collapse(true);
    
    selection.removeAllRanges();
    selection.addRange(range);
  }
  return range;
}

