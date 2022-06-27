/*
 * @lc app=leetcode.cn id=1233 lang=javascript
 *
 * [1233] 删除子文件夹
 */

// @lc code=start
// 3336 ms, 在所有 JavaScript 提交中击败了7.14%
// 现在循环太多，显然不是好办法
// 循环一次时，应该把键记录在一个数组中
const removeSubfolders = function(folder) {
  // folder = [...new Set(folder)];
  folder.sort((a, b) => {
    return a.length > b.length ? 1 : -1;
  });
  // console.log(folder);
  const result = [];
  while (folder.length > 0) {
    const item = folder.shift();
    deleteSubFile(item, folder);
    result.push(item);
  }
  return result;
};

const deleteSubFile = (item, folder) => {
  const len = item.length;
  for (let i = 0; i < folder.length; i++) {
    if (folder[i][len] === '/' && folder[i].indexOf(item) === 0) {
      folder.splice(i, 1);
      i--;
    }
  }
};

// 思路二
// 看看能否使用字典树结构优化，文件结构就是树
// function TreeNode(val, bool) {
//   this.val = val;
//   this.end = bool;
//   this.children = {};
// }

// const removeSubfolders = function(folder) {
//   // 先按照长度和顺序排序
//   folder.sort((a, b) => {
//     if (a.length === b.length) {
//       return a > b;
//     } else {
//       return a.length > b.length ? 1 : -1
//     }
//   });
//   let result = [];
//   let tree = {};
//   for (let i = 0; i < folder.length; i++) {
//     // 处理重复节点
//     if (folder[i] === folder[i - 1]) {
//       result.push(folder[i]);
//       continue;
//     }
//     if (checkNode(folder[i], tree)) {
//       result.push(folder[i]);
//       console.log(folder[i]);
//       console.log(tree);
//     }
//   }
//   // 每一个文件路径就是一个树节点
//   // 如果到某一个节点，节点的值是true，并且节点还有值，那么直接返回
//   // 如果是相同的节点，那么不需要处理
//   return result;
// };

// const checkNode = (str, tree) => {
//   // 先把str转换成数组
//   let arr = str.split('/');
//   let pointer = tree;
//   for (let i = 0; i < arr.length; i++) {
//     let key = arr[i];
//     // 如果当前节点已经存在，那么返回false
//     if (pointer[key] && pointer[key].end === true) {
//       return false;
//     }
//     // 如果当前节点不存在，那么继续
//     if (pointer[key] && pointer[key].end === false) {
//       pointer = pointer[key];
//       continue;
//     }
//     // 如果当前节点不存在，那么继续
//     if (!pointer[key] && i === arr.length - 1) {
//       pointer[key] = new TreeNode(key, true);
//       // console.log(pointer[key]);
//       return true;
//     }
//     if (!pointer[key] && i === arr.length - 1) {
//       pointer[key] = new TreeNode(key, false);
//       pointer = pointer[key];
//       continue;
//     }
//     // 如果当前节点不存在，新建一个节点，
//   }
// };
// 这里还有问题，还需要修复

// @lc code=end

export { removeSubfolders };
