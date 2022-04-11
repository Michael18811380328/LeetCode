// 139 拆分长单词
// 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
// 拆分时可以重复使用字典中的单词。

// 思路一：广度优先遍历，超时
// 关键问题：如果当前的情况，同时满足多个解答，那怎样处理？把不同的解答情况放在一个队列中，然后循环，直到队列中是空的
// 可以使用这个思路（每次取出剩余的部分，然后查看每一个字典是否可以减去）
function wordBreak(s, wordDict) {
  // 先把字典转换成对象
  let dict = {};
  let subDict = {};
  for (let i = 0; i < wordDict.length; i++) {
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
    if (!subDict[s[i]]) {
      return false;
    }
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

// 官方的思路是动态规划
// https://leetcode-cn.com/problems/word-break/solution/dan-ci-chai-fen-by-leetcode-solution/


export { wordBreak };
