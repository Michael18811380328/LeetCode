const _ = require('lodash');
/*
 * @lc app=leetcode.cn id=316 lang=javascript
 * [316] 去除重复字母
 * 贪心 + 单调栈
 */

// 思路一，不合适，276/289 cases passed (N/A)
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

// 思路2，不合适
// 316 去除重复的字符，并且使得去除后的字典序最大
// 1、遍历一次字符串，把重复的字符记录到字典中，以及重复的位置
// 2、遍历重复的字典，比较删除哪个后，字典序最少。然后就删除哪一个。保留剩下的部分。
// 3、其他的类推，把全部删除的字符拿出来。
// ？上面的思路不合适
// 正确的思路：遍历字符串，放在在栈中，如果出现新的字符字典序小于栈顶元素，如果栈顶的元素和后面的相同，那么就删除栈顶元素。
const removeDuplicateLetters2 = function(s) {
  if (s.length === 1) {
    return s;
  }
  const stack = [];
  const dict = {};
  while (s && s.length > 0) {
    const s0 = s[0];
    if (stack.length === 0) {
      stack.push(s0);
    } else {
      if (!dict[s0]) {
        // 如果新的大于栈顶的元素
        // 如果栈顶的元素后面出现了，那么删除栈顶的元素
        if (s0 < stack[stack.length - 1]) {
          while (s.indexOf(stack[stack.length - 1]) > -1) {
            const old = stack.pop();
            dict[old] = false;
          }
        }
        stack.push(s0);
      }
    }
    dict[s0] = true;
    s = s.slice(1);
  }
  return stack.join('');
};

// "cbaasdfghjkjhgfdasdfghjsasdfghasdasd"
// "dfghjkas" 输出
// "adfghjks" 正确

// 官方解答：贪心 + 单调栈
// 自己没有想出来
// 链接：https://leetcode.cn/problems/remove-duplicate-letters/solutions/527359/qu-chu-zhong-fu-zi-mu-by-leetcode-soluti-vuso/
const removeDuplicateLetters = function(s) {
  const vis = new Array(26).fill(0);
  // 全局答题环境中引入了 lodash，这里直接使用
  const num = _.countBy(s);
  const sb = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (!vis[ch.charCodeAt() - 'a'.charCodeAt()]) {
      while (sb.length > 0 && sb[sb.length - 1] > ch) {
        if (num[sb[sb.length - 1]] > 0) {
          vis[sb[sb.length - 1].charCodeAt() - 'a'.charCodeAt()] = 0;
          sb.pop();
        } else {
          break;
        }
      }
      vis[ch.charCodeAt() - 'a'.charCodeAt()] = 1;
      sb.push(ch);
    }
    num[ch]--;
  }
  return sb.join('');
};

export { removeDuplicateLetters, removeDuplicateLetters2 };
