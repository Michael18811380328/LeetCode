// 127 广度优先遍历（无向图）
const ladderLength = function(beginWord, endWord, wordList) {
  canConvert = (a, b) => {
    let num = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        num++;
      }
      if (num > 1) {
        return false;
      }
    }
    return true;
  };
  // 去重
  const index = wordList.indexOf(beginWord);
  if (index > -1) {
    wordList.splice(index, 1);
  }
  const list = [];
  list.push(beginWord);
  // 初始化的长度是2
  let times = 2;
  while (list.length > 0) {
    let currentLen = list.length;
    while (currentLen) {
      currentLen--;
      for (let i = 0; i < wordList.length; i++) {
        if (canConvert(item, wordList[i])) {
          if (wordList[i] === endWord) {
            return times;
          } else {
            list.push(wordList[i]);
            wordList.splice(i, 1);
            i--;
          }
        }
      }
    }
    times++;
  }
  return 0;
}