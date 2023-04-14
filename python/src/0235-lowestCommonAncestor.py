# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        res = root
        while True:
            if res.val > p.val and res.val > q.val:
                res = res.left
            elif res.val < p.val and res.val < q.val:
                res = res.right
            else:
                break
        return res
