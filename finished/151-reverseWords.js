// 151
// 给定一个字符串，逐个翻转字符串中的每个单词。
// 输入: "the sky is blue"
// 输出: "blue is sky the"
// 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括
// 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
// 无空格字符构成一个单词。


// 思路
// 如果字符串中没有空格，那么直接返回字符串
// 如果有空格，那么首先去掉首尾的空格，然后split, 然后 reverse 然后 join
// 需要处理连续空格的情况（是否需要遍历数组，还是使用正则表达式替换连续的空格？）
// 60 ms , 在所有 javascript 提交中击败了 94.95%
function reverseWords(s) {
  if (s.indexOf(' ') === -1) {
    return s;
  }
  let arr = s.trim().split(' ');
  for (let i = 0; i < arr.length;) {
    if (arr[i] === '') {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  arr.reverse();
  return arr.join(' ');
}

export { reverseWords };
