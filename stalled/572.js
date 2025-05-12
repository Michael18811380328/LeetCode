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
 * @param {TreeNode} subRoot
 * @return {boolean}
 * 解答：递归每一个子树，判断是否满足
 * 函数执行时，如何使用哈希表记录已经比较的子树
 */
var isSubtree = function(root, subRoot) {
    if (!root && !subRoot) {
        return true;
    }
    if ((!root && subRoot) || (root && !subRoot)) {
        return false;
    }
    // 这里不合适，也可能相同的值，但是不是一个子树？[1,1] [1] 这个测试案例不通过
    if (root.val !== subRoot.val) {
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    } else {
        return isSubtree(root.left, subRoot.left) && isSubtree(root.right, subRoot.right);
    }
};
