// 本周主要是二叉树
// 树主要是递归子节点，二叉搜索树的中序遍历结果是有序数组

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * 95 不同的二叉搜索树 II
 * @param {number} n max tree node value 
 */
var generateTrees = function(n) {
  let generate = (start, end) => {
    let res = [];
    if (start > end) {
      res.push(null);
    }
    else if (start === end) {
      let node = new TreeNode(start);
      res.push(node);
    }
    else {
      for (let i = start; i <= end; i++) {
        let leftTrees = generate(start, i - 1);
        let rightTrees = generate(i + 1, end);
        for (let j = 0; j < leftTrees.length; j++) {
          for (let k = 0; k < rightTrees.length; k++) {
            let node = new TreeNode(i);
            node.left = leftTrees[j];
            node.right = rightTrees[k];
            res.push(node);
          }
        }
      }
    }
    return res;
  }
  return generate(1, n);
}

/**
 * 98 判断一个树是二叉搜索树
 * @param {Treenode} root 
 * @returns boolean
 * 思路1：使用递归判断每一个子树是否满足二叉搜索树
 * 思路2：使用BST的性质，中序遍历是递增的数组即可
 */
var isValidBST = function(root) {
  // 辅助函数，判断子树是否满足最值
  var checkNode = function (node, small, large) {
    if (!node) {
      return true;
    }
    if (node.val >= large || node.val <= small) {
      return false;
    }
    return checkNode(node.left, small, node.val) && checkNode(node.right, node.val, large);
  }
  // 初始化的最大值或者最小值
  let small = -Infinity;
  let large = Infinity;
  return checkNode(root, small, large);
}
var isValidBST2 = (root) => {
  let arr = [];
  function runNode(node) {
    if (!node) {
      return true;
    }
    if (node && node.left) {
      let res = runNode(node.left);
      if (res === false) return false;
    }
    if (node) {
      if (arr[arr.length - 1] >= node.val) {
        return false;
      }
      arr.push(node.val);
    }
    if (node && node.right) {
      let res = runNode(node.right);
      if (res === false) return false;
    }
    return true;
  }
  return runNode(root);
}

/**
 * 102 二叉树的层序遍历
 * @param {*} root 
 */
const levelOrder = function(root) {
  const matrix = [];
  const layer = 0;
  if (!root) return matrix;
  matrix[layer] = [];
  matrix[layer].push(root.val);
  runNode(root.left, layer + 1, matrix);
  runNode(root.right, layer + 1, matrix);
  // 辅助函数(递归获取各层的值，并放入矩阵)
  const runNode = (node, layer, matrix) => {
    if (!node) return;
    if (!matrix[layer]) {
      matrix[layer] = [];
    }
    matrix[layer].push(node.val);
    runNode(node.left, layer + 1, matrix);
    runNode(node.right, layer + 1, matrix);
  }
  return matrix;
}

/**
 * 103 二叉树的锯齿形层序遍历
 * BFS 思路
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let res = [];
  let list = [];
  list.push({ node: root, layer: 0 });
  // BFS 
  while (list.length > 0) {
    let tmp = list.shift();
    res.push({ val: tmp.node.val, layer: tmp.layer });
    let layer = tmp.layer;
    let left = tmp.node.left;
    let right = tmp.node.right;
    if (left) {
      list.push({ node: left, layer: layer + 1 });
    }
    if (right) {
      list.push({ node: right, layer: layer + 1 });
    }
  }
  // 再次遍历数组，获取需要的锯齿结果
  let result = [];
  let flag = 0;
  let tmpArr = [];
  for (let i = 0; i < res.length; i++) {
    const { layer, val } = res[i];
    if (layer === flag) {
      tmpArr.push(val);
    } else {
      if (flag % 2 === 0) {
        result.push([...tmpArr]);
      } else {
        result.push([...tmpArr].reverse());
      }
      tmpArr = [];
      tmpArr.push(val);
      flag = layer;
    }
  }
  // 处理最后一层
  if (flag % 2 === 0) {
    result.push([...tmpArr]);
  } else {
    result.push([...tmpArr].reverse());
  }
  return result;
}

/**
 * 105 从前序遍历和中序遍历数组中，反向构建树
 * @param {*} preorder 
 * @param {*} inorder 
 * 关键是找到根节点，找到左右子树，然后递归
 */
var buildTree = function(preorder, inorder) {
  if (!preorder || preorder.length === 0) {
    return new TreeNode(null);
  }
  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }
  let val = preorder[0];
  let index = inorder.indexOf(val);
  let rootNode = new TreeNode(val);
  let leftInorder = inorder.slice(0, index);
  let rightInorder = inorder.slice(index + 1);
  let leftPreOrder = preorder.slice(1, index + 1);
  let rightPreOrder = preorder.slice(index + 1);
  if (leftPreOrder.length > 0) {
    rootNode.left = buildTree(leftPreOrder, leftInorder);
  }
  if (rightPreOrder.length > 0) {
    rootNode.right = buildTree(rightPreOrder, rightInorder);
  }
  return rootNode;
}

/**
 * 106 从中序与后序遍历序列构造二叉树
 * @param {*} inorder 
 * @param {*} postorder 
 */
var buildTree = function(inorder, postorder) {
  if (!postorder || postorder.length === 0) {
    return TreeNode(null);
  }
  if (postorder.length === 1) {
    return TreeNode(postorder[0]);
  }
  let val = postorder[postorder.length - 1];
  let index = inorder.indexOf(val);
  let rootNode = new TreeNode(val);
  let leftInorder = inorder.slice(0, index);
  let rightInorder = inorder.slice(index + 1);
  let leftPostOrder = postorder.slice(0, index);
  let rightPostOrder = postorder.slice(index, postorder.length - 1);
  if (leftPostOrder.length > 0) {
    rootNode.left = buildTree(leftInorder, leftPostOrder);
  }
  if (rightPostOrder.length > 0) {
    rootNode.right = buildTree(rightInorder, rightPostOrder);
  }
  return rootNode;
};

/**
 * 109 有序链表转换二叉搜索树
 * @param {*} head 
 */
var sortedListToBST = function(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  function arr2Tree(start, end) {
    if (start > end) {
      return null;
    }
    else if (start === end) {
      return new TreeNode(arr[start]);
    }
    else {
      let middle = Math.floor((start + end) / 2);
      let node = new TreeNode(arr[middle]);
      node.left = arr2Tree(start, middle + 1);
      node.right = arr2Tree(middle + 1, end);
      return node;
    }
  }
  return arr2Tree(0, arr.length - 1);
};

/**
 * 114 二叉树展开为链表
 * @param {*} root 
 */
var flatten = function(root) {
  let list = [];
  function runNode(node) {
    if (node) {
      list.push(node);
      runNode(node.left);
      runNode(node.right);
    }
  }
  runNode(root);
  const len = list.length;
  for (let i = 1; i < len; i++) {
    let prev = list[i - 1];
    let curr = list[i];
    prev.left = null;
    prev.right = curr;
  }
};

/**
 * 116 填充每个节点的下一个右侧节点指针
 * @param {*} root 
 */
var connect = function(root) {
  let matrix = [];
  if (!root) return root;
  const runTree = function(node, layer) {
    if (!node) return;
    if (!matrix[layer]) {
      matrix[layer] = [];
    }
    matrix[layer].push(node);
    runTree(node.left, layer + 1);
    runTree(node.right, layer + 1);
  };
  const layer = 0;
  if (!matrix[layer]) {
    matrix[layer] = [];
  }
  matrix[layer].push(root.val);
  runTree(root.left, layer + 1);
  runTree(root.right, layer + 1);
  for (let i = 0; i < matrix.length; i++) {
    const len = matrix[i].length;
    for (let j = 0; j < len; j++) {
      if (matrix[i][j + 1]) {
        matrix[i][j].next = matrix[i][j + 1];
      } else {
        matrix[i][j].next = null;
      }
    }
  }
  return root;
}

var rightSideView = function(root) {
  // 199 二叉树的右视图
  // 先把二叉树层序遍历，然后获取每一层的最后一个，就是右视图
  const matrix = [];
  if (!root) return [];
  const runNode = function(node, layer) {
    if (!node) return;
    if (!matrix[layer]) {
      matrix[layer] = [];
    }
    matrix[layer].push(node.val);
    runNode(node.left, layer + 1);
    runNode(node.right, layer + 1);
  };
  const layer = 0;
  matrix[0] = [];
  matrix[0].push(root.val);
  runNode(root.left, layer + 1);
  runNode(root.right, layer + 1);
  return matrix.map(arr => {
    return arr[arr.length - 1];
  });
};

// 152 乘积最大子数组
// 考点：动态规划
// 因为每一个数可能是负数，那么需要计算最大值和最小值，然后动态规划结果
var maxProduct = function(nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  let maxArr = [];
  let minArr = [];
  maxArr[0] = nums[0];
  minArr[0] = nums[0];
  for (let i = 1; i < len; i++) {
    maxArr[i] = Math.max(nums[i], maxArr[i - 1] * nums[i], minArr[i - 1] * nums[i]);
    minArr[i] = Math.min(nums[i], maxArr[i - 1] * nums[i], minArr[i - 1] * nums[i]);
  }
  return Math.max(...maxArr);
};

// 97 交错字符串（中等-困难）这个是字符串
// 思路1：回溯算法+指针+字典（比较好理解）
var isInterleave = function(s1, s2, s3) {
  let l1 = s1.length, l2 = s2.length, l3 = s3.length;
  if (l1 + l2 !== l3) {
    return false;
  }
  let dict = new Set();
  let res = false;
  // 这是三个指针
  function back(i1, i2, i3) {
    // 当三个指针都遍历到尾部，那么判断已经完全匹配，返回
    if (i1 === l1 && i2 === l2 && i3 === l3) {
      return res = true;
    }
    if (dict.has(`${i1}-${i2}-${i3}`)) {
      return false;
    }
    dict.add(`${i1}-${i2}-${i3}`);
    // 如果s3的字符等于前两个中若干，那么继续回溯（两种情况回溯）
    // 通常的排列组合是一个情况回溯，然后再把结果放回去
    // 这是两个情况分别回溯（或者分别递归计算）
    // 应该不算回溯，算递归
    if (s1[i1] === s3[i3]) {
      back(i1 + 1, i2, i3);
    }
    if (s2[i2] === s3[i3]) {
      back(i1, i2 + 1, i3);
    }
  }
  back(0, 0, 0)
  return res;
};

// 使用动态规划实现
var isInterleave2 = function(s1, s2, s3) {
  let l1 = s1.length, l2 = s2.length, l3 = s3.length;
  if (l1 + l2 !== l3) {
    return false;
  }
  // 构建一个矩阵，表示s1s2的结果
  let arr = new Array(l1 + 1).fill(true);
  let matrix = arr.map(() => {
    return new Array(l2 + 1).fill(true);
  });
  const len = matrix.length;
  // 每一个位置都是由前面两个计算出来的
  // 先计算两个边（直接有前一个元素和当前元素计算出来的）
  for (let i = 1; i < len; i++) {
    matrix[i][0] = matrix[i - 1][0] && s3[i - 1] === s1[i - 1];
  }
  // 然后计算另一个边
  for (let j = 1; j < matrix[0].length; j++) {
    matrix[0][j] = matrix[0][j - 1] && s3[j - 1] === s2[j - 1];
  }
  // 然后计算矩阵内部的数值（动态规划计算出来的）
  for (let i = 1; i < len; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      matrix[i][j] = matrix[i - 1][j] && s3[i + j - 1] === s1[i - 1] || matrix[i][j - 1] && s3[i + j - 1] === s2[j - 1];
    }
  }
  return matrix[l1][l2];
}

// 0099 恢复正常的二叉搜索树（没有重复节点）
// 其中有两个节点的位置调换了
// 思路：二叉搜索树的中序遍历是有序数组
// 然后看这个数组中那两个换了（可能是1个或者两个）
// 然后再次遍历二叉树，给这两个节点的值调换一下
var recoverTree = function(root) {
  let list = [];
  let inorder = (node) => {
    if (!node) {
      return;
    }
    inorder(node.left);
    list.push(node.val);
    inorder(node.right);
  }
  inorder(root);

  let unorder = [];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < list[i - 1]) {
      if (unorder.length === 0) {
        unorder.push(list[i - 1]);
      } else {
        unorder.push(list[i]);
      }
    }
  }
  if (unorder.length === 1) {
    let index = list.indexOf(unorder[0]);
    unorder.push(list[index + 1]);
  }

  let runNode = (node) => {
    if (!node) {
      return;
    }
    if (node.val === unorder[0]) {
      node.val = unorder[1];
    }
    else if (node.val === unorder[1]) {
      node.val = unorder[0];
    }
    runNode(node.val);
    runNode(node.right);
  }
  runNode(root);
};

// 133 克隆图
// 关键是克隆图的节点和邻接关系
var cloneGraph = function(node) {
  let dict = new Map();
  let runNode = (a) => {
    if (!a) return null;
    if (dict.has(a.val)) {
      return dict.get(a.val);
    }
    let b = new Node(a.val, []);
    dict.set(b.val, b);
    a.neighbors.forEach(item => {
      b.neighbors.push(runNode(item));
    });
    return b;
  }
  return runNode(node);
};
