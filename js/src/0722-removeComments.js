/*
 * @lc app=leetcode.cn id=722 lang=javascript
 * [722] 删除注释
 * 这个实际不算很难，思路也能想到，自己的思路和官方不一致，没有处理某些边界情况
 */

// 思路1(某些情况不满足)
const removeCommentErr = function(source) {
  // 先统一处理 // 行内注释，这样遍历一次（不管什么情况）
  const result1 = [];
  for (let i = 0; i < source.length; i++) {
    const cur = source[i];
    const index = cur.indexOf('//');
    // 没有行内注释
    if (index === -1) {
      result1.push(cur);
    }
    // 有行内注释，在第一位，全部删除
    else if (index === 0) {
      continue;
    }
    else {
      result1.push(cur.slice(0, index));
    }
  }
  // 然后统一处理一行内的块级注释
  const result2 = [];
  for (let i = 0; i < result1.length; i++) {
    const cur = result1[i];
    const index1 = cur.indexOf('/*');
    const index2 = cur.lastIndexOf('*/');
    if (index1 > -1 && index2 > -1) {
      const start = cur.slice(0, index1);
      const end = cur.slice(index2 + 2);
      const newCur = start + end;
      if (newCur.length > 0) {
        result2.push(newCur);
      }
    }
    else {
      result2.push(cur);
    }
  }
  // 然后处理跨行的块级注释，注意：块级是否换行等等
  const result3 = [];
  let isBlock = false;
  let tmpStr = '';
  for (let i = 0; i < result2.length; i++) {
    const cur = result2[i];
    if (isBlock) {
      const index = cur.indexOf('*/');
      if (index === -1) {
        continue;
      }
      const end = cur.slice(index + 2);
      if ((tmpStr + end).length > 0) {
        result3.push(tmpStr + end);
      }
      tmpStr = '';
      isBlock = false;
    }
    else {
      const index = cur.indexOf('/*');
      if (index === -1) {
        result3.push(cur);
      }
      else {
        tmpStr = cur.slice(0, index);
        isBlock = true;
      }
    }
  }
  return result3;
};

// 官方解答：
// 链接：https://leetcode.cn/problems/remove-comments/solutions/2365861/shan-chu-zhu-shi-by-leetcode-solution-lb9x/
const removeComments = function(source) {
  // 定义结果数组
  const newCommwnts = [];

  // 临时变量，存放当前行中有效的内容
  let newLine = '';

  // 每个字符有两种情况，要么在一个注释内要么不在。因此我们用 inBlock 变量来标记状态，该变量为 true 表示在注释内，反之则不在。
  let inBlock = false;

  // 遍历每一行
  for (const line of source) {
    // 遍历每一行的每一个字母
    for (let i = 0; i < line.length; i++) {
      // 1 在注释内部
      if (inBlock) {
        // 如果下面两个字符是结束注释 */，那么设置属性，然后 i++
        if (i + 1 < line.length && line[i] === '*' && line[i + 1] === '/') {
          inBlock = false;
          i++;
        }
      }
      // 2 不在注释内部
      else {
        // 如果下面两个字符是开始注释字符 /* 那么设置开始字符，并增加1
        if (i + 1 < line.length && line[i] === '/' && line[i + 1] === '*') {
          inBlock = true;
          i++;
        }
        // 如果下面两个字符是整行注释，直接跳过这一行 //
        else if (i + 1 < line.length && line[i] === '/' && line[i + 1] === '/') {
          break;
        }
        // 如果是正常字符，那么写入新行
        else {
          newLine += line[i];
        }
      }
    }
    // 如果当前不在注释内部，且新行内容大于0，那么放入结果数组，清空临时变量
    if (!inBlock && newLine.length > 0) {
      newCommwnts.push(newLine);
      newLine = '';
    }
  }
  return newCommwnts;
};

export { removeCommentErr, removeComments };
