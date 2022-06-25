/*
 * @lc app=leetcode.cn id=95 lang=javascript
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 * 思路：二叉搜索树的性质：根节点大于左子树的全部节点
 * 根节点小于右子树的全部节点
 * 那么就循环 [1, n] 的全部数字，i 作为根节点，[1, i - 1] 作为左子树，[i + 1, n] 左右右子树。然后递归计算出左子树和右子树的数组
 * 然后把左子树和右子树循环一次，构造出 N ^ 2 种情况即可
 */
// 80 ms, 在所有 JavaScript 提交中击败了83.40%
// 1 <= n <= 8，递归调用+三层循环，不会影响太多的性能
const generateTrees = function(n) {
  const generateInnerTrees = (start, end) => {
    const res = [];
    // 如果最小值大于最大值，树不存在，但是需要有空位，返回 null
    if (start > end) {
      res.push(null);
      return res;
    }
    // 如果最小值等于最大值，那么只有一个节点
    if (start === end) {
      const node = new TreeNode(start);
      res.push(node);
      return res;
    }
    // 如果最小值小于最大值，循环根节点，递归获取子树的情况
    for (let i = start; i <= end; i++) {
      const leftTrees = generateInnerTrees(start, i - 1);
      const rightTrees = generateInnerTrees(i + 1, end);
      for (let j = 0; j < leftTrees.length; j++) {
        for (let k = 0; k < rightTrees.length; k++) {
          const node = new TreeNode(i, leftTrees[j], rightTrees[k]);
          res.push(node);
        }
      }
    }
    return res;
  };
  return generateInnerTrees(1, n);
};

// 官方详细解法：https://leetcode-cn.com/problems/unique-binary-search-trees-ii/solution/bu-tong-de-er-cha-sou-suo-shu-ii-by-leetcode-solut/
// @lc code=end
