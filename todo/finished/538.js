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
 * @return {TreeNode}
 */
// 过程在1038
// 144 ms, 在所有 JavaScript 提交中击败了16.89%
var convertBST = function(root) {
    let sum = 0;
    var runNode = (node) => {
        if (!node) {
            return;
        }
        // 递归右子树
        runNode(node.right);
        sum = sum + node.val;
        node.val = sum;
        // 递归左子树
        runNode(node.left);
    }
    runNode(root);
    return root;
};