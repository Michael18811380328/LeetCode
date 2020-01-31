// 121 calculate stock max price
function maxProfit(prices) {
  const len = prices.length;
  if (len === 1) {
    return 0;
  }
  let profit = 0;
  let minPrice = prices[0];
  for (let i = 0; i < len; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    const bonus = prices[i] - minPrice;
    if (bonus > profit) {
      prifit = bonus;
    }
  }
}

// 119 pascle-triangle k row
function getRow(rowIndex) {
  const index = rowIndex + 1;
  const result = [];
  for (let i = 1; i < index + 1; i++) {
    if (i === 1) {
      result.push(1);
    }
    else if (i === 2) {
      result.push([1, 1]);
    }
    else {
      const innerArr = [1];
      for (let j = 1; j < Math.ceil(i / 2); j++) {
        innerArr[j] = result[i - 2][j - 1] + result[i - 2][j];
      }
      for (let j = Math.ceil(i / 2); j < i; j++) {
        innerArr[j] = innerArr[i - j - 1];
      }
      result.push(innerArr);
    }
  }
  return result[index - 1];
}

// 119 pascle-triangle return all triangle
function generate(numRows) {
  if (numRows === 1) {
    return [[1]];
  }
  if (numRows === 2) {
    return [[1],[1,1]];
  }
  const result = [[1],[1,1]];
  for (let i = 3; i < numRows; i++) {
    const innerArr= [1];
    for (let j = 1; j < Math.ceil(i / 2); j++) {
      innerArr[j] = result[i - 2][j - 1] + result[i - 2][j];
    }
    for (let j = Math.ceil(i / 2); j < i; j++) {
      innerArr[j] = innerArr[i - j - 1];
    }
    result.push(innerArr);
  }
  return result;
}

// 111 min tree depth
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function minDepth(root) {
  if (root === null) return 0;
  if (!root.left && !root.right) return 1;
  if (!root.left) return 1 + minDepth(root.right);
  if (!root.right) return 1 + minDepth(root.left);
  return 1 + Math.min(minDepth(root.right), minDepth(root.left));
}

// 104-maxDepth of binary tree node
function maxDepth(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  if (root.left || root.right) {
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  }
}

// 100 is same binary tree
function isSameArray(p, q) {
  if (p.length !== q.length) return false;
  for (let i = 0; i < p.length; i++) {
    if (p[i] !== q[i]) return false;
  }
  return true;
}
function isSameTree(p, q) {
  if (p === null && q === null) {
    return true;
  }
  if ((p && !q) || (!p && q) || (p && q && p.val !== q.val)) {
    return false;
  }
  if ((p.left && !q.left) || (!p.left && q.left) || (p.right && !q.right) || (!p.right && q.right)) {
    return false;
  }
  return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
}

// 88 merge two sequenced array
function mergeTwoArray(nums1, m, nums2, n) {
  if (n === 0) {
    return;
  }
  if (m === 0) {
    nums1.splice(0, n, ...nums2);
    return nums1;
  }
  nums1.splice(m, n);
  let index = 0;
  for (let i = 0; i < n; i++) {
    while (nums2[i] > nums1[index]) {
      index++;
    }
    nums1.splice(index, 0, nums2[i]);
  }
  return nums1;
}

// 75
function sortColor(nums) {
  const len = nums.length;
  if (len === 0 || len === 1) return nums;
  let timer = 0;
  let timer0 = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      timer0++;
      if (i === 0) {
        continue;
      }
      nums.splice(i, 1);
      nums.unshift(0);
      while (nums[i] === 0 && timer0 < i) i--;
      if (timer0 === len) break;
    }
    else if (nums[i] === 2) {
      timer++;
      if (i === len - 1) continue;
      nums.splice(i, 1);
      nums.push(2);
      while ((nums[i] === 2 && timer < len - i) || nums[i] === 0) {
        i--;
      }
    }
  }
  return nums;
}

// 70 climbStairs
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
function climbStairs(n) {
  if (n === 1) {
    return 1;
  }
  let result = 0;
  for (let i = 0; i <= n / 2; i++) {
    const j = n - 2 * j;
    const res = factorial(i + j) / factorial(i) / factirial(j);
    result += res;
  }
  return result;
}
// 69 get Sqrt
function getSqrt(x) {
  if (x === 0) return 0;
  if (x < 4) return 1;
  for (let i = 1; i < x; i++) {
    const sqrt = i * i;
    if (sqrt === x) return i;
    if (sqrt > x) return i - 1;
  }
  return null;
}
function getSqrt2(x) {
  if (x === 0) return 0;
  return Math.floor(Math.sqrt(x));
}
function getSqrt3(x) {
  return parseInt(Math.sqrt(x), 0);
}
