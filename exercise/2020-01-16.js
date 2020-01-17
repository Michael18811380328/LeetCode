// 01 two sum
function twoSum1(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

function twoSum(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const another = target - nums[i];
    const index = nums.lastIndexOf(another);
    if (index > -1 && i !== index ) {
      return [i, index];
    }
  }
}

function twoSum3(nums, target) {
  const len = nums.length;
  const hash = {};
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    const index = hash[`${item}`];
    if (index > -1) {
      return [index, i];
    }
    hash[`${target - item}`] = i;
  }
}

// 02 add two linked array
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function handleTen(node) {
  if (node.val !== 10) return;
  if (node.next) {
    node.val = 0;
    node.next.val++;
    handleTen(node.next);
  }
  else {
    node.val = 0;
    node.next = new ListNode(1);
  }
}

function addTwoNumbers(l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) {
    handleTen(l2);
    return l2;
  }
  if (!l2) {
    handleTen(l1);
    return l1;
  }
  let value = l1.val + l2.val;
  if (value > 9)  {
    if (l1.next) {
      l1.next.val++;
    } else {
      l1.next = new ListNode(1);
    }
    value -= 10;
  }
  const result = new ListNode(value);
  result.next = addTwoNumbers(l1.next, l2.next);
  return result;
}

// 04
function findMedianSortedArray(nums1, nums2) {
  const arr = nums1.concat(nums2);
  arr.sort((a, b) => a - b);
  const len = arr.length;
  const middle = len / 2;
  let index1 = null, index = null;
  if (middle % 1 !== 0) {
    index1 = middle - 0.5;
  } else {
    index1 = middle - 1;
    index2 = middle;
  }
  if (index2) {
    return (arr[index1] + arr[index2]) / 2;
  }
  return arr[index1];
}

// 07 反转数字
function revserse1(x) {
  const isMinus = x < 0;
  const arr = String(Math.abs(x)).split('').reverse();
  const result = Number(arr.join(''));
  if (resule >= (2 ** 31) - 1 || result <= ((-2) ** 31) + 1) {
    return 0;
  }
  return isMinus ? -result : result;
}

function reverse(x) {
  if (x === 0) {
    return x;
  }
  const isMinus = x < 0;
  let result = 0;
  x = Math.abs(x);
  while (x > 0) {
    const a = x % 10;
    result = result * 10 + a;
    x = (x - a) / 10;
  }
  if (result >= (2 ** 31) - 1 || result <= ((-2) ** 31) + 1) {
    return 0;
  }
  return isMinus ? -result : result;
}
