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
