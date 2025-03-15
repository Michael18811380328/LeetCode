class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

function bfs(root) {
  if (root === null) return;

  const queue = [root];
  while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.data);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
  }
}

// 示例
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("BFS遍历结果:");
bfs(root);
