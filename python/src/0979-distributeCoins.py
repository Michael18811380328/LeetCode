# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def distributeCoins(self, root: Optional[TreeNode]) -> int:
        self.result = 0
        def checkNode(node: Optional[TreeNode]) -> int:
            if not node:
                return 0
            tmp1 = checkNode(node.left)
            tmp2 = checkNode(node.right)
            self.result = self.result + abs(tmp1) + abs(tmp2)
            return node.val + tmp1 + tmp2 - 1
        checkNode(root)
        return self.result
