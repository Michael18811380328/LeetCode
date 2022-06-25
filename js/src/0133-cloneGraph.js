/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 * 基本思路：BFS或者DFS遍历图节点，使用一个字典记录已经遍历的节点
 * 遍历图节点时，同时克隆节点的值和节点的关系
 */
const cloneGraph = function(node) {
  const dict = new Map();
  const runNode = (a) => {
    if (!a) return null;
    // 缓存已经有，直接返回
    if (dict.has(a.val)) {
      return dict.get(a.val);
    }
    // 缓存没有，直接深拷贝（节点和邻居）
    const b = new Node(a.val, []);
    // 一定要先写入缓存
    dict.set(a.val, b);
    // 然后再DFS（否则DFS时始终未标记，死循环）
    a.neighbors.forEach((item) => {
      b.neighbors.push(runNode(item));
    });
    return b;
  };
  return runNode(node);
};
// @lc code=end
export { cloneGraph };
