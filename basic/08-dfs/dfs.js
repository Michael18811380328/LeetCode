class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function dfs(root) {
    if (root === null) return;
    console.log(root.data); // 先序遍历
    dfs(root.left);
    dfs(root.right);
}

// 示例
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("DFS遍历结果:");
dfs(root);