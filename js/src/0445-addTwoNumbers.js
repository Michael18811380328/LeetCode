/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

// Your runtime beats 15.71 % of javascript submissions
// 现在性能很差
// @lc code=start
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = function(l1, l2) {
  const arr1 = [];
  const arr2 = [];
  toNumber(l1, arr1);
  toNumber(l2, arr2);
  const arr3 = getSum(arr1, arr2);
  const result = toList(arr3);
  return result;
};

// list to number array
const toNumber = function(list, arr) {
  if (!list) return;
  arr.push(list.val);
  if (list.next) {
    toNumber(list.next, arr);
  }
};

// add two array
const getSum = (arr1, arr2) => {
  let arr3 = [];
  while (arr1.length > 0 && arr2.length > 0) {
    const sum = arr1.pop() + arr2.pop();
    arr3.unshift(sum);
  }
  if (arr1.length > 0) {
    arr3 = arr1.concat(arr3);
  }
  if (arr2.length > 0) {
    arr3 = arr2.concat(arr3);
  }
  // 处理大于10的情况
  for (let i = arr3.length; i >= 0; i--) {
    if (arr3[i] >= 10) {
      arr3[i] = arr3[i] - 10;
      if (arr3[i - 1] || arr3[i - 1] === 0) {
        arr3[i - 1] = arr3[i - 1] + 1;
      } else {
        arr3.unshift(1);
      }
    }
  }
  return arr3;
};

// number array to list
const toList = function(arr) {
  if (arr.length === 0) {
    return null;
  }
  const value = arr.shift();
  const listNode = new ListNode(value);
  listNode.next = toList(arr);
  return listNode;
};

// @lc code=end

export { addTwoNumbers };
