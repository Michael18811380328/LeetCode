
// 131 回文字符串（回溯算法，或者动态规划）
// https://leetcode-cn.com/problems/palindrome-partitioning/
// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
// 可以使用回溯算法
// 循环条件是剩余字符串的长度
// 如果当前的字符串是回文，那么继续执行
// 如果全部的字符串长度等于目标字符串，那么就放入结果中
// 字符串最长只有16个，通过每两个之间，加入分隔符，然后就是 2 ^ 15 个情况，这样可以算出来，也就是30000次左右
// 基本是回溯的思路，设置第一个指针，然后逐步向后回溯？
check = (a) => {
  return a.split('').reverse().join('') === a;
}

var partition = function(s) {
  // 动态规划的思想
  // 循环字符串，新加入时，把之前的全部拿出来，然后每次加一个，判断情况是否符合
  const len = s.length;
  let arr = [[s[0]]];
  if (len === 1) {
    return arr;
  }
  for (let i = 1; i < len; i++) {
    let curr = s[i];
    for (let j = 0; j < arr.length; j++) {
      arr[j].push(curr);
    }
    // 新加入时，循环一次之前全部的情况，然后把满足的加入结果数组中 i 
    for (let k = 1; k <= i; k++) {
      // 这里可能有问题
      let left = s.slice(0, k + 1);
      let right = s.slice(k + 1, i + 1);
      // 如果左边和右边都是回文字符串，那么就满足，就放到数组中
      // 这里逻辑有问题
      console.log(left, right);
      if (check(left) && check(right)) {
        if (right) {
          arr.push([left, right]);
        } else {
          arr.push([left]);
        }
      }
    }
  }
  return arr;
};

// console.log(partition("aab"));
// console.log(partition("a"));
// console.log(partition("abcde"));
// console.log(partition("aabaa")); // [["a","a","b","a","a"],["a","a","b","aa"],["a","aba","a"],["aa","b","a","a"],["aa","b","aa"],["aabaa"]]