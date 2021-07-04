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

class Tree{
  constructor() {
    let root = new Treenode(null);
    this.root = root;
    this.root.arr = [];
  }

  get = () => {
    return this.root.arr;
  }

  run = (strs) => {
    let root = this.root;
    for (let i = 0; i < strs.length; i++) {
      this.insertNode(root, strs[i], strs[i]);
    }
  }

  // 创建字典树子节点
  insertNode = (node, str, originStr) => {
    if (str.length === 0) {
      return;
    }
    else if (str.length === 1) {
      let newNode = new Treenode(str);
      node.children[str] = newNode;
      this.root.arr.push(originStr);
    }
    else {
      // 单词长度大于2，那么先判断当前的子节点中是否存在下一个元素，然后依次插入
      let key = str[0];
      if (node.children[key]) {
        this.insertNode(node.children[key], str.substring(1), originStr);
      } else {
        return;
      }
    }
  }
}

// Your runtime beats 20 % of javascript submissions
var longestWord = function(words) {
  var tree = new Tree();
  words.sort((a, b) => a > b ? 1 : -1);
  tree.run(words);
  let resArr = tree.get();
  let res = resArr[0];
  for (let i = 0; i < resArr.length; i++) {
    if (resArr[i].length > res.length) {
      res = resArr[i];
    }
    else if (resArr[i].length > res.length) {
      res = resArr[i] < res ? resArr[i] : res;
    }
  }
  return res;
};
// ["b", "c", "d", "e", "g"]

// @lc code=end
