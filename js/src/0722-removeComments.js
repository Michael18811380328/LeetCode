/*
 * @lc app=leetcode.cn id=722 lang=javascript
 * [722] 删除注释
 * 这个实际不算很难，思路也能想到，自己的思路和官方不一致，没有处理某些边界情况
 */

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

export { removeComments };
