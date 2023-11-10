/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * [103] 二叉树的锯齿形层序遍历
 * 广度优先遍历+不同层加一个序号，说明是正的还是反的即可
 * 可以先把树层序遍历（并加一个层序号）成数组
 * 然后数组进一步处理成合适的锯齿
 * 这样逻辑更好理解一些，不易出错
 */
//  56 ms, 在所有 JavaScript 提交中击败了95.87%
const zigzagLevelOrder = function(root) {
  if (!root) return [];
  // 先把二叉树层序遍历(广度优先遍历)，同时增加layer层数
  const res = [];
  const list = [];
  list.push({
    node: root,
    layer: 0,
  });
  while (list.length > 0) {
    const tmp = list.shift();
    res.push({ val: tmp.node.val, layer: tmp.layer });
    const layer = tmp.layer;
    const left = tmp.node.left;
    const right = tmp.node.right;
    if (left) {
      list.push({ node: left, layer: layer + 1 });
    }
    if (right) {
      list.push({ node: right, layer: layer + 1 });
    }
  }
  // 再次遍历数组，把每一层的结果都放入临时数组，然后返回
  const result = [];
  let flagLayer = 0;
  let tmpArr = [];
  for (let i = 0; i < res.length; i++) {
    const { layer, val } = res[i];
    if (layer === flagLayer) {
      tmpArr.push(val);
    } else {
      // 这里需要根据层数，决定是否取反
      if (flagLayer % 2 === 0) {
        result.push([...tmpArr]);
      } else {
        result.push([...tmpArr].reverse());
      }
      tmpArr = [];
      tmpArr.push(val);
      flagLayer = layer;
    }
  }
  // 最后还需要处理一层
  if (flagLayer % 2 === 0) {
    result.push([...tmpArr]);
  } else {
    result.push([...tmpArr].reverse());
  }
  return result;
};

export { zigzagLevelOrder };
