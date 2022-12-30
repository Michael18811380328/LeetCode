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

// 1952 三除数
const isThree = function(n) {
  // 辅助函数，判断质数
  const isPrime = (number) => {
    if (num <= 3) return true;
    for (let i = 2; i < num / 2; i++) {
      if (num % 1 === 0) {
        return false;
      }
    }
    return true;
  };
  // 主函数
  if (n === 1) {
    return false;
  }
  const m = Math.sqrt(n);
  if (m === Math.floor(m)) {
    return isPrime(m);
  } else {
    return false;
  }
}

// 0142 环形链表
// 循环链表，判断下一个节点是否出现过，也就是存在环
const detectCycle = function(head) {
  const dict = new Set();
  while (head) {
    if (dict.has(head)) {
      return head;
    }
    dict.add(head);
    head = head.next;
  }
  return null;
};

// 0082 删除排序列表中的重复元素
const deleteDuplicateds = function(head) {
  if (!head || !head.next) {
    return head;
  }
  if (head.val !== head.next.val) {
    head.next = deleteDuplicateds(head.next);
    return head;
  }
  // 因为列表已经排序，所以直接比较前后的元素是否相同即可
  // 时间复杂度是N，不需要额外的内存开销
  if (head.val === head.next.val) {
    if (!head.next.next) {
      return null;
    }
    if (head.next.val !== head.next.next.val) {
      head = head.next.next;
      head = deleteDuplicateds(head);
      return head;
    }
    if (head.next.val === head.next.next.val) {
      head.next = head.next.next;
      head = deleteDuplicateds(head);
      return head;
    }
  }
}

// 0190 位运算
const reverseBits = function(n) {
  let rev = 0;
  for (let i = 0; i < 32 && n > 0; i++) {
    rev |= (n & 1) << (31 - i);
    n >>>= 1;
  }
  return rev >>> 0;
};

// 21 合并两个升序的有序列表（可以改变原始链表）
const mergeTwoLists = function(l1, l2) {
  if (l1 === null || l2 === null) {
    return null;
  }
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

// 0096 不同的二叉搜索树
// 困难：动态规划两层，卡特兰数
const numTrees = function(n) {
  if (n <= 1) return 1;
  const arr = new Array(n + 1);
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = 0;
    // 以i作为树的根节点，那么左右子树组成的集合的笛卡尔积
    for (let j = 1; j <= i; j++) {
      arr[i] += arr[i - j] * arr[j - 1];
    }
  }
  return arr[n];
};

// 方法2：卡特兰数
const numTree2 = function(n) {
  let res = 1;
  for (let i = 0; i < n; i++) {
    res = res * 2 * (2 * i + 1) / (i + 2);
  }
  return res;
};
