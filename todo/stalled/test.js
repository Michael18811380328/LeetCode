// 这部分已经测试通过，需要整理

// 对撞指针
// 小船逃生问题-881
// 180 ms
// , 在所有 JavaScript 提交中击败了
// 95.04%
// 的用户
// 内存消耗：
// 45.4 MB
// , 在所有 JavaScript 提交中击败了
// 12.25%
// 的用户
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

