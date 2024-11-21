### C 实现

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->left = newNode->right = NULL;
    return newNode;
}

void dfs(struct Node* root) {
    if (root == NULL) return;
    printf("%d ", root->data); // 先序遍历
    dfs(root->left);
    dfs(root->right);
}

int main() {
    struct Node* root = createNode(1);
    root->left = createNode(2);
    root->right = createNode(3);
    root->left->left = createNode(4);
    root->left->right = createNode(5);

    printf("DFS遍历结果: ");
    dfs(root);
    printf("\n");
    return 0;
}
```

### Python 实现

```python
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
```

### Java 实现

```java
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
```

### JavaScript 实现

```javascript
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
```

### Ruby 实现

```ruby
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
```
