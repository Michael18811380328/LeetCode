// 双指针练习
// 伪代码
function fn(list) {
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    // 如果满足条件
    if (left === 10) {
      left++;
    }
    right--;
  }
}

// 对撞指针
// 小船逃生问题
var fn = function (people, limit) {
  people.sort((a, b) => (b - a));
  let res = 0;
  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    res++;
  }
  return res;
}

// 快慢指针
// 判断单向链表中是否存在环
function ListNode(val) {
  this.val = val;
  this.next = null;
}

let fn = function(head) {
  if (head === null || head.next === null) {
    return false;
  }
  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || slow === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}

// 删除排序数组中的重复项 
var fn = function(nums) {
  let len = nums.length;
  if (len === 0) {
    return 0;
  }
  let slow = 0;
  for (let fast = 0; fast < len; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}
