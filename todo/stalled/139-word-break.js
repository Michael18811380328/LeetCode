// 139 拆分长单词
// 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
// 拆分时可以重复使用字典中的单词。

// 思路一
// 可以使用逆向思路，遍历数组，然后依次indexOf字符串。如果大于-1，那么剪切字符串，直到不大于-1.
// 遍历数组后，判断字符串的长度是否为0.如果在遍历过程中是0，那么就是真的，否则就是假的。
// 可能的问题：数组中第一个是 pen 第二个是 pencake 那么首先减去第一个，结果就是错误的。(的确存在这个情况，现在的解答是错误的)
// 如果出现这样的问题，解决思路是按照数组的长度，首先字典排个序。确保优先检索长字符串
// 长字符串可能不正确： sports 会减掉 sport if 解答错误
// 如果一个情况可以使用多种解决方案，那么是否应该是回溯的速录，依次试验不同的情况是否满足
// 如果所有的子情况都不能满足，才返回错误
// 或者长单词使用字典树的思路试试？
function wordBreakErr(s, wordDict) {
  for (let i = 0; i < wordDict.length; i++) {
    const item = wordDict[i];
    while (s.indexOf(item) > -1) {
      const index = s.indexOf(item);
      const len = item.length;
      const newString = s.slice(0, index) + s.slice(index + len);
      s = newString;
    }
    if (s.length === 0) {
      return true;
    }
  }
  if (s.length > 0) {
    return false;
  }
}

// 新的思路
// 关键问题：如果当前的情况，同时满足多个解答，那怎样处理？把不同的解答情况放在一个队列中，然后循环，直到队列中是空的
// 可以使用这个思路（每次取出剩余的部分，然后查看每一个字典是否可以减去）
// 如果不存在的话，直接下一个
// 这里写一个辅助函数
// 广度优先遍历
function wordBreak(s, wordDict) {
  // 先把字典转换成对象
  let dict = {};
  let subDict = {};
  for (let i = 0; i < wordDict.length; i++) {
    const item = wordDict[i];
    // 先把字典中无关的字符串过滤出去，减少字典的复杂度
    if (s.includes(item)) {
      dict[item] = true;
    }
    for (let j = 0; j < item.length; j++) {
      let key = item[j];
      subDict[key] = true;
    }
  }

  // 检查S中是否有没有出现过的字符
  for (let i = 0; i < s.length; i++) {
    if (!subDict[s[i]]) return false;
  }

  // 创建一个队列，然后深度优先遍历
  let queue = [];
  queue.push(s);
  while (queue.length > 0) {
    // 深度优先遍历
    let current = queue.shift();
    // 如果当前的字符串就在字典中，满足要求，那么直接返回真
    if (dict[current]) {
      return true;
    }
    // 然后遍历字典的各个键
    Object.keys(dict).forEach((key) => {
      if (current.indexOf(key) === 0) {
        const len = key.length;
        let newStr = current.slice(len);
        queue.unshift(newStr);
      }
    });
  }
  // 否则，没有匹配的值，返回错误
  return false;
}

// 更新：改成深度优先遍历，避免广度优先遍历情况太多，栈溢出，还是超时

// 超时: 专门处理特殊情况，但是不能应对全部的情况，再想想其他方法
// "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
// ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]

// 这个情况还是超时
// "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
// ["aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa","ba"]
// 说明现在的算法不好

// 字典能否优化一下？例如 ["a","aa","aaa","aaaa","aaaaa"] 优化成 "a"，这样可以减少不少情况
// 但是不能从整体解决这个问题
// 判断一个字符串能否由其他字符串组成

// console.log(wordBreak("l", []));
// console.log(wordBreak("leetcode", ["leet", "code"]));
// console.log(wordBreak("applepenapple", ["apple", "pen"]));
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat", "a", "bilibili"]));
// console.log(wordBreak("abcd", ["a","abc","b","cd"]));

export { wordBreak };
