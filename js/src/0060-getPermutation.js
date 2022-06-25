// 60 https://leetcode-cn.com/problems/permutation-sequence/
// 排列序列 困难（做出来了，但是方法不好）
// 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
// 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// 给定 n 和 k，返回第 k 个排列。

// 提交1
// 1588 ms, 在所有 javascript 提交中击败了19.16%
// 辅助函数：下一个排列（31题）
// 然后调用这个函数，循环K次，获取
function nextPermutation(nums) {
  const len = nums.length;
  let index = -1;
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i + 1] > nums[i]) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    nums.reverse();
    return;
  }
  let tmp;
  let tmpIndex;
  for (let j = index + 1; j < len; j++) {
    if (nums[j] > nums[index] && (!tmp || nums[j] <= tmp)) {
      tmp = nums[j];
      tmpIndex = j;
    }
  }
  nums[tmpIndex] = nums[index];
  nums[index] = tmp;
  const arr = nums.splice(index + 1, len - index - 1);
  arr.sort((a, b) => a - b);
  nums.push(...arr);
}

// 思路二：结果的长度是n, 结果的长度是[1,n]组成的全部数的第K个排列，
// 首先获取当前数构成的最小的树（123456），然后调用辅助函数
// 这样性能一般，因为需要一次次计算比这个数大的数字
function getPermutation(n, k) {
  if (n === 1 && k === 1) {
    return '1';
  }
  const init = [];
  for (let i = 1; i <= n; i++) {
    init.push(i);
  }
  if (k === 1) {
    return init.join('');
  }
  for (let i = 0; i < k - 1; i++) {
    nextPermutation(init);
  }
  return init.join('');
}

// 思路2, 2308ms, 37 MB
// function nextPermutation(nums) {
//   const len = nums.length;
//   let index = -1;
//   for (let i = len - 2; i >= 0; i--) {
//     if (nums[i + 1] > nums[i]) {
//       index = i;
//       break;
//     }
//   }
//   if (index === -1) {
//     nums.reverse();
//     return;
//   }
//   let tmp;
//   let tmpIndex;
//   for (let j = index + 1; j < len; j++) {
//     if (nums[j] > nums[index] && (!tmp || nums[j] <= tmp)) {
//       tmp = nums[j];
//       tmpIndex = j;
//     }
//   }
//   nums[tmpIndex] = nums[index];
//   nums[index] = tmp;
//   let arr = nums.splice(index + 1, len - index - 1);
//   arr.sort((a, b) => {return a - b;});
//   nums.push(...arr);
// }

// var getPermutation = function(n, k) {
//   if (n === 1 && k === 1) {
//     return '1';
//   }
//   let init = [];
//   for (let i = 1; i <= n; i++) {
//     init.push(i);
//   }
//   if (k === 1) {
//     return init.join('');
//   }
//   for (let i = 0; i < k - 1; i++) {
//     nextPermutation(init);
//   }
//   return init.join('');
// };

// 现在性能比较差，未来需要改进

export { getPermutation };
