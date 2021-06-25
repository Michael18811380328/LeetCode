/**
 * Binary Search Tree(BST or Ordered Binary Tree)
 **/

// 辅助类：二叉树节点
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  show() {
    return this.data;
  }
}

// 二叉搜索树
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(data) {
    // 把当前的值创建成一个节点（没有左右子节点）
    let n = new Node(data, null, null);
    // 如果没有根节点，这个点就是根节点
    if (!this.root) {
      return this.root = n;
    }
    // 如果有根节点，获取根节点
    let currentNode = this.root;
    let parent = null;
    while (1) {
      parent = currentNode;
      // 判断当前的值和当前节点的大小
      // 如果小于当前节点，那么当前节点变成左子节点；否则变成右子节点
      if (data < currentNode.data) {
        currentNode = currentNode.left;
        // 如果节点不存在，这个节点就作为上一个节点的左子节点
        // 完成 insert 操作
        if (currentNode === null) {
          parent.left = n;
          break;
        }
      } else {
        currentNode = currentNode.right;
        if (currentNode === null) {
          parent.right = n;
          break;
        }
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }

  // 移除节点（较复杂）
  removeNode(node, data) {
    if (node == null) {
      return null;
    }

    if (data == node.data) {
      // no children node
      if (node.left == null && node.right == null) {
        return null;
      }
      if (node.left == null) {
        return node.right;
      }
      if (node.right == null) {
        return node.left;
      }
      
      let getSmallest = function(node) {
        if(node.left === null && node.right == null) {
          return node;
        }
        if(node.left != null) {
          return node.left;
        }
        if(node.right !== null) {
          return getSmallest(node.right);
        }
        
      }
      let temNode = getSmallest(node.right);
      node.data = temNode.data;
      node.right = this.removeNode(temNode.right,temNode.data);
      return node;

    } else if (data < node.data) {
      node.left = this.removeNode(node.left,data); 
      return node;
    } else {
      node.right = this.removeNode(node.right,data);  
      return node;
    }
  }

  // 查找节点（找到特定值、最大值、最小值）
  find(data) {
    let current = this.root;
    while (current != null) {
      if (data == current.data) {
        break;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right
      }
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right != null) {
      current = current.right;
    }
    return current.data;
  }

  findMin() {
    let current = this.root;
    while (current.left != null) {
      current = current.left;
    }
    return current.data;
  }

  inOrder(node) {
    if (!this.inOrderArr) {
      this.inOrderArr = [];
    }
    if (node !== null) {
      this.inOrder(node.left);
      this.inOrderArr.push(node.data);
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (!this.preOrderArr) {
      this.preOrderArr = [];
    }
    if (node !== null) {
      this.preOrderArr.push(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (!this.postOrderArr) {
      this.postOrderArr = [];
    }
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      this.postOrderArr.push(node.data);
    }
  }

}

module.exports = { BinarySearchTree, Node };
