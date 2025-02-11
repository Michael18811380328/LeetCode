class Node {
    int data;
    Node left, right;

    Node(int item) {
        data = item;
        left = right = null;
    }
}

public class DFS {
    static void dfs(Node root) {
        if (root == null) return;
        System.out.print(root.data + " "); // 先序遍历
        dfs(root.left);
        dfs(root.right);
    }

    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);

        System.out.print("DFS遍历结果: ");
        dfs(root);
        System.out.println();
    }
}
