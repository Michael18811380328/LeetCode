class Node
    attr_accessor :data, :left, :right

    def initialize(data)
        @data = data
        @left = nil
        @right = nil
    end
end

def dfs(root)
    return if root.nil?
    print "#{root.data} " # 先序遍历
    dfs(root.left)
    dfs(root.right)
end

# 示例
root = Node.new(1)
root.left = Node.new(2)
root.right = Node.new(3)
root.left.left = Node.new(4)
root.left.right = Node.new(5)

print "DFS遍历结果: "
dfs(root)
puts