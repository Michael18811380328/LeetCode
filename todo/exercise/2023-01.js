// 0098 验证二叉搜索树
// 递归判断每一个子树都是二叉搜索树
const isValidBST = function(root) {
  const checkTree = function(node, small, large) {
    if (!node) {
      return true;
    }  
    if (node.val >= large || node.val <= small) {
      return false;
    }
    return checkTree(node.left, small, node.val) && checkTree(node.right, node.val, large);
  };
  return checkTree(root, -Infinity, Infinity);
};

// 二叉搜索树的中序遍历是升序数组（思路2）
const isValidBST2 = function(root) {
  const arr = [];
  function runNode(node) {
    if (!node) {
      return true;
    }
    if (node && node.left) {
      const res = runNode(node.left);
      if (res === false) {
        return false;
      }
    }
    if (node) {
      if (arr[arr.length - 1] > node.val) {
        return false;
      }
      arr.push(node.val);
    }
    if (node && node.right) {
      const res = runNode(node.right);
      if (res === false) {
        return false;
      }
    }
    return true;
  }
  const res = runNode(root);
  if (res === false) {
    return false;
  }
  return true;
};

// 102 二叉树的层序遍历
const runTree = function(node, layer, matrix) {
  if (!node) return;
  if (!matrix[layer]) {
    matrix[layer] = [];
  }
  matrix[layer].push(node.val);
  runTree(node.left, layer + 1, matrix);
  runTree(node.right. layer + 1, matrix);
}

const levelOrder = function(root) {
  const matrix = [];
  const layer = 0;
  if (!root) return matrix;
  if (!matrix[layer]) {
    matrix[layer] = [];
  }
  matrix[layer].push(root.val);
  runTree(root.left, layer + 1, matrix);
  runTree(root.right, layer + 1, matrix);
  return matrix;
};