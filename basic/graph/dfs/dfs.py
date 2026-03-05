class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def dfs(root):
    if root is None:
        return
    print(root.data, end=' ')  # 先序遍历
    dfs(root.left)
    dfs(root.right)

# 示例
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print("DFS遍历结果:", end=' ')
dfs(root)
print()
