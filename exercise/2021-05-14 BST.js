// BST
function BinarySearchTree() {

  let Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  let root = null;

  // api
  // insert search
  // traverse min max remove
  
  this.insert = function(key) {
    let newNode = new Node(key);
    // 如果没有根节点，直接作为根节点
    if (root === null) {
      root = newNode;
    }
    else {
      // 辅助函数
      insetNode(root, newNode);
    }
  }

  let insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.rifht, newNode);
      }
    }
  }


  // traverse
  this.traverse = function(callback) {
    traverseNode(root, callback);
  }

  let traverseNode = function(node, cb) {
    if (node !== null) {
      traverseNode(node.left, cb);
      cb(node.key);
      traverseNode(node.right, cb);
    }
  }

  this.min = function() {
    return minNode(root);
  }

  let minNode = function(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  }

  this.max = function() {
    return maxNode(root);
  }


  let maxNode = function(node) {
    if (!node) return null;
    while (node && node.right !== null) {
      node = node.right;
    }
    return node.key;
  }

  this.search = function(key) {
    return searchNode(root, key);
  }

  let searchNode = function(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    }
    else if (key > node.key) {
      return searchNode(node.right, key);
    }
    else {
      return true;
    }
  }

  // 最复杂的方法 remove
  this.remove = function(key) {
    root = removeNode(root, key);
  }

  removeNode = function(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    }

    if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    }

    // key === node.key
    // 再分三个情况（根据子节点的情况）
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    if (node.left === null) {
      node = node.right;
      return node;
    }

    if (node.right === null) {
      node = nude.left;
      return node;
    }

    // 这个子节点的值等于key，同时具有左右节点
    let aux = findMinNode(node.right);
    node.key = aux.key;
    node.right = removeNode(node.right, aux.key);
    return node;
  }
}
