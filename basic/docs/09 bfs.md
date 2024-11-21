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

struct Queue {
    struct Node** arr;
    int front;
    int rear;
    int capacity;
};

struct Queue* createQueue(int capacity) {
    struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));
    queue->capacity = capacity;
    queue->front = queue->rear = 0;
    queue->arr = (struct Node**)malloc(queue->capacity * sizeof(struct Node*));
    return queue;
}

int isEmpty(struct Queue* queue) {
    return queue->front == queue->rear;
}

void enqueue(struct Queue* queue, struct Node* node) {
    queue->arr[queue->rear++] = node;
}

struct Node* dequeue(struct Queue* queue) {
    return queue->arr[queue->front++];
}

void bfs(struct Node* root) {
    if (root == NULL) return;

    struct Queue* queue = createQueue(100);
    enqueue(queue, root);

    while (!isEmpty(queue)) {
        struct Node* current = dequeue(queue);
        printf("%d ", current->data);

        if (current->left) enqueue(queue, current->left);
        if (current->right) enqueue(queue, current->right);
    }
}

int main() {
    struct Node* root = createNode(1);
    root->left = createNode(2);
    root->right = createNode(3);
    root->left->left = createNode(4);
    root->left->right = createNode(5);

    printf("BFS遍历结果: ");
    bfs(root);
    printf("\n");
    return 0;
}
```

### Python 实现

```python
from collections import deque

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def bfs(root):
    if root is None:
        return

    queue = deque([root])
    while queue:
        current = queue.popleft()
        print(current.data, end=' ')

        if current.left:
            queue.append(current.left)
        if current.right:
            queue.append(current.right)

# 示例
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print("BFS遍历结果:", end=' ')
bfs(root)
print()
```

### Java 实现

```java
import java.util.LinkedList;
import java.util.Queue;

class Node {
    int data;
    Node left, right;

    Node(int item) {
        data = item;
        left = right = null;
    }
}

public class BFS {
    static void bfs(Node root) {
        if (root == null) return;

        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            Node current = queue.poll();
            System.out.print(current.data + " ");

            if (current.left != null) queue.add(current.left);
            if (current.right != null) queue.add(current.right);
        }
    }

    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);

        System.out.print("BFS遍历结果: ");
        bfs(root);
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
```
