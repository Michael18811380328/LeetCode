class Node
  attr_accessor :data, :left, :right

  def initialize(data)
      @data = data
      @left = nil
      @right = nil
  end
end

def bfs(root)
  return if root.nil?

  queue = [root]
  until queue.empty?
      current = queue.shift
      print "#{current.data} "

      queue.push(current.left) if current.left
      queue.push(current.right) if current.right
  end
end

# 示例
root = Node.new(1)
root.left = Node.new(2)
root.right = Node.new(3)
root.left.left = Node.new(4)
root.left.right = Node.new(5)

print "BFS遍历结果: "
bfs(root)
puts
