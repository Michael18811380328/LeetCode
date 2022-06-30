/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */

class Treenode {
  constructor(val) {
    this.val = val;
    this.children = {};
  }
}

class Tree {
  constructor() {
    const root = new Treenode(null);
    this.root = root;
    this.root.arr = [];
  }

  get = () => {
    return this.root.arr;
  };

  run = (strs) => {
    const root = this.root;
    for (let i = 0; i < strs.length; i++) {
      this.insertNode(root, strs[i], strs[i]);
    }
  };

  // 创建字典树子节点
  insertNode = (node, str, originStr) => {
    // if length === 0 return;
    if (str.length === 1) {
      const newNode = new Treenode(str);
      node.children[str] = newNode;
      this.root.arr.push(originStr);
    } else if (str.length !== 0) {
      // 单词长度大于2，那么先判断当前的子节点中是否存在下一个元素，然后依次插入
      const key = str[0];
      if (node.children[key]) {
        this.insertNode(node.children[key], str.substring(1), originStr);
      }
    }
  };
}

// Your runtime beats 20 % of javascript submissions
const longestWord = function(words) {
  const tree = new Tree();
  words.sort((a, b) => a > b ? 1 : -1);
  tree.run(words);
  const resArr = tree.get();
  let res = resArr[0];
  for (let i = 0; i < resArr.length; i++) {
    if (resArr[i].length > res.length) {
      res = resArr[i];
    }
  }
  return res;
};
// ["b", "c", "d", "e", "g"]

// @lc code=end

export { longestWord };
