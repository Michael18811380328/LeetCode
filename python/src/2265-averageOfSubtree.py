# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
        # 辅助函数 dfs，判断节点对应的子树是否满足，返回子树的和和节点个数
        def run_node(root: Optional[TreeNode]):
            # nonlocal 在函数内部创建一个函数，该函数使用变量 result 作为非局部变量
            nonlocal result
            if not root:
                return 0, 0
            left_node_result = run_node(root.left)
            right_node_result = run_node(root.right)
            value = left_node_result[0] + right_node_result[0] + root.val
            count = left_node_result[1] + right_node_result[1] + 1
            # Python 中两个斜杠即双斜杠 //表示地板除，即先做除法（/），然后向下取整（floor），等于 math.floor(value/count)
            if root.val == value // count:
                result += 1
            return value, count

        result = 0
        run_node(root)
        return result
