/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
// 字典树
// 248 ms, 在所有 JavaScript 提交中击败了54.10%
function TreeNode(key, isEnd) {
  this.key = key;
  this.isEnd = isEnd;
  this.value = {};
}

const Trie = function() {
  this.trie = new TreeNode(null, false);
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  const len = word.length;
  let node = this.trie;
  for (let i = 0; i < len; i++) {
    const str = word[i];
    const isEnd = i === len - 1;
    // 如果已经有这个节点，那么就不需要新建（新建会覆盖原来的节点）
    if (!node.value[str]) {
      node.value[str] = new TreeNode(str, isEnd);
    } else if (isEnd && !node.value[str].isEnd) {
      node.value[str].isEnd = true;
    }
    node = node.value[str];
  }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const len = word.length;
  let node = this.trie;
  for (let i = 0; i < len; i++) {
    const str = word[i];
    if (!node.value[str]) {
      return false;
    }
    node = node.value[str];
  }
  return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  const len = prefix.length;
  let node = this.trie;
  for (let i = 0; i < len; i++) {
    const str = prefix[i];
    if (!node.value[str]) {
      return false;
    }
    node = node.value[str];
  }
  return true;
};

// ["Trie","insert","insert","insert","insert","insert","insert","search","search","search","search","search","search","search","search","search","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith"]

// [[],["app"],["apple"],["beer"],["add"],["jam"],["rental"],["apps"],["app"],["ad"],["applepie"],["rest"],["jan"],["rent"],["beer"],["jam"],["apps"],["app"],["ad"],["applepie"],["rest"],["jan"],["rent"],["beer"],["jam"]]

// // 9 18 true 现在是 false
// [null,null,null,null,null,null,null,false,false,false,false,false,false,false,true,true,false,false,true,false,false,false,true,true,true]

// [null,null,null,null,null,null,null,false,true,false,false,false,false,false,true,true,false,true,true,false,false,false,true,true,true]
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
