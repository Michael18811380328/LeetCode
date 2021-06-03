/*
 * @lc app=leetcode.cn id=958 lang=javascript
 *
 * [958] 二叉树的完全性检验
 */

// @lc code=start
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
 * @return {boolean}
 */

//  958 判断是否是完全二叉树
//  可以使用bfs的思路，把二叉树转换成一个数组或者队列，判断是否有空的节点即可。
//  获取二叉树的最大深度，然后如果没有叶子节点，那么就是直接舍弃。如果已经是空的，那么设置一个 flag，后面的必须都不能是空的，知道队列全部清空，这样判断是否是完全的二叉树。
//  或者当遍历到空时，判断当前的队列是否为空。
//  如果不是空，判断已有的元素中，是否都是叶子节点即可。
// 改进：在队列中存储当前的层数；如果遇到空节点，那么判断剩余的队列
 
// 辅助函数：判断当前队列是否全部是叶子节点或者是空


// 思路：如果某个节点是空的，那么当前节点和右侧全部节点是空的才行
// 下面的逻辑有点乱，理一下

let checkQue = (que, currentLayer) => {
  // 两种情况
  // return !arr.some(item => item.left || item.right);
};

var isCompleteTree = function(root) {
  // 根节点单独判断
  if (!root) {
    return true;
  }
  if (!root.left && !root.right) {
    return true;
  }

  let que = [];
  que.push({
    node: root,
    layer: 0,
  });

  // 遍历队列，直到队列是空
  while (que.length > 0) {
    let headPoint = que.shift();
    let head = headPoint.node;
    let layer = headPoint.layer;

    if (head.val) {
      // 只有左节点，没有右节点，肯定不是完全
      if (head.left && !head.right) {
        return false;
      }
      if (head.left) {
        que.push({
          node: head.left,
          layer: layer + 1,
        });
      } else {
        // 如果下一层没有左节点，但是队列还有节点？
        if (que.length > 0) return false;
        return checkQue(que, layer);
      }
      if (head.right) {
        que.push({
          node: head.right,
          layer: layer + 1,
        });
      } else {
        // 如果下一层没有右节点，但是队列还有节点？
        if (que.length > 0) return false;
        return checkQue(que,  laye);
      }
    }
    console.log(que);
  }
  return true;
};

// [1,2,3,4,5,6] true
// [1,2,3,4,5,null,7] false

// @lc code=end

