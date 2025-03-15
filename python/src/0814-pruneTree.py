class Solution:
    def pruneTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def parseNode(node: Optional[TreeNode]) -> Optional[TreeNode]:
            if not node:
                return None
            if node.val == 1 and not node.left and not node.right:
                return node
            node.left = parseNode(node.left)
            node.right = parseNode(node.right)
            if node.val == 0 and not node.left and not node.right:
                return None
            return node
        return parseNode(root)
