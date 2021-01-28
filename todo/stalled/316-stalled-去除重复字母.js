/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */
// 错误的思路（看看能否优化）
// 276/289 cases passed (N/A)
// var removeDuplicateLetters = function(s) {
//   // 从后向前遍历字符串
//   // 把遍历到的放在字典中
//   // 如果有重复的，那么比较这两个重复的，看去除哪个后，字典序比较小
//   // 然后继续放置
//   let dict = {};
//   let stack = [];
//   while (s.length > 0) {
//     let last = s[s.length - 1];
//     // console.log(dict);
//     if (!dict[last]) {
//       dict[last] = true;
//       stack.unshift(last);
//     } else {
//       // 已经有，那么判断和第一个比是哪个大
//       // 如果当前的小于第一个，那么删除原来第一个，增加到栈中
//       // 判断条件不正确
//       let front = s.substring(0, s.length - 1);
//       if ((front + last) < (front + stack[0])) {
//         let index = stack.indexOf(last);
//         stack.splice(index, 1);
//         stack.unshift(last);
//       }
//     }
//     s = s.substring(0, s.length - 1);
//   }
//   return stack.join('');
// };
// 现在是局部最优解，不是全局最优解
// 需要优化一下，变成全局最优解
// @lc code=end

// 316 去除重复的字符，并且使得去除后的字典序最大
// 1、遍历一次字符串，把重复的字符记录到字典中，以及重复的位置
// 2、遍历重复的字典，比较删除哪个后，字典序最少。然后就删除哪一个。保留剩下的部分。
// 3、其他的类推，把全部删除的字符拿出来。
// ？上面的思路不合适
// 正确的思路：遍历字符串，放在在栈中，如果出现新的字符字典序小于栈顶元素，如果栈顶的元素和后面的相同，那么就删除栈顶元素。

/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  if (s.length === 1) {
    return s;
  }
  let stack = [];
  let dict = {};
  while (s && s.length > 0) {
    let s0 = s[0];
    if (stack.length === 0) {
      stack.push(s0);
    } else {
      if (!dict[s0]) {
        // 如果新的大于栈顶的元素
        // 如果栈顶的元素后面出现了，那么删除栈顶的元素
        if (s0 < stack[stack.length - 1]) {
          while (s.indexOf(stack[stack.length - 1]) > -1) {
            let old = stack.pop();
            dict[old] = false;
          } 
        }
        stack.push(s0);
      }
    }
    dict[s0] = true;
    s = s.slice(1);
    console.log(stack);
    console.log(dict);
  }
  return stack.join('');
}

// "cbaasdfghjkjhgfdasdfghjsasdfghasdasd"
// "dfghjkas" 输出
// "adfghjks" 正确
// 这个例子现在不正确

// @lc code=end

