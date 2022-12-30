// 740 删除并获得点数
// 考点：动态规划（打家劫舍）+ 哈希表缓存
const deleteAndEarn = function(nums) {
  // 哈希表缓存次数
  const dict = {};
  nums.forEach(item => {
    if (dict[item]) {
      dict[item]++;
    } else {
      dict[item] = 1;
    }
  });
  // 构建纯净数组并排序
  const list = Array.from(new Set(nums)).sort((a, b) => a > b ? 1 : -1);
  // 循环数组，获取连续的二维数组
  if (list.length === 1) {
    return list[0] * nums.length;
  }
  const arr = [];
  let startIndex = null;
  if (list[1] === list[0] + 1) {
    startIndex = list[0];
  }
  // 这里是6种情况
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] - list[i] > 1) {
      if (startIndex) {
        arr.push([startIndex, list[i]]);
        startIndex = null;
      }
      else {
        arr.push(list[i]);
      }
    }
    else if (list[i + 1] = list[i] + 1) {
      if (startIndex) {
        continue;
      }
      else {
        startIndex = list[i];
      }
    }
    else if (!list[i + 1]) {
      if (startIndex) {
        arr.push([startIndex, list[i]]);
      }
      else {
        arr.push(list[i]);
      }
    }
  }
  // 辅助函数：动态规划（计算连续数组的最大值）
  const getMax = (start, end) => {
    const maxList = [];
    maxList[start] = start * dict[start];
    maxList[start + 1] = Math.max(maxList[start], (start + 1) * dict[start + 1]);
    for (let i = start + 2; i <= end; i++) {
      maxList[i] = Math.max(maxList[i - 1], maxList[i - 2] + i * dict[i]);
    }
    return maxList[maxList.length - 1];
  };

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      result += arr[i] * dict[arr[i]];
    }
    else {
      result += getMax(arr[i][0], arr[i][1]);
    }
  }
  return result;
};

// 0738 获取递增数字
// 贪心算法
const monotoneIncreasingDigits = function(n) {
  if (n < 10) {
    return n;
  }
  const check = (num) => {
    if (n < 10) return true;
    while (num >= 10) {
      const tmp1 = num % 10;
      const tmp2 = (num - tmp1) / 10 % 10;
      if (tmp2 > tmp1) {
        return false;
      }
      num = (num - tmp1) / 10;
    }
    return true;
  };
  const calculateNum = (num) => {
    const arr = String(number).split('');
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        arr[i - 1] = arr[i - 1] - 1;
        for (let j = i ; j < arr.length; j++) {
          arr[j] = 9;
        }
        break;
      }
    }
    return Number(arr.join(''));
  };
  while (!check(n)) {
    n = calculateNum(n);
  }
  return n;
}

// 127 广度优先遍历（无向图）
const ladderLength = function(beginWord, endWord, wordList) {
  canConvert = (a, b) => {
    let num = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        num++;
      }
      if (num > 1) {
        return false;
      }
    }
    return true;
  };
  // 去重
  const index = wordList.indexOf(beginWord);
  if (index > -1) {
    wordList.splice(index, 1);
  }
  const list = [];
  list.push(beginWord);
  // 初始化的长度是2
  let times = 2;
  while (list.length > 0) {
    let currentLen = list.length;
    while (currentLen) {
      currentLen--;
      for (let i = 0; i < wordList.length; i++) {
        if (canConvert(item, wordList[i])) {
          if (wordList[i] === endWord) {
            return times;
          } else {
            list.push(wordList[i]);
            wordList.splice(i, 1);
            i--;
          }
        }
      }
    }
    times++;
  }
  return 0;
}

// 2255 统计满足前缀的字符串个数
const countPrefixes = function(words, s) {
  let num = 0;
  const cache = {};
  for (let i = 0; i < words.length; i++) {
    if (!cache[words[i]]) {
      // A.startsWith(B) return bool
      const result = s.startsWith(words[i]) ? 1 : 0;
      cache[words[i]] = result;
    }
    num = num + cache[words[i]];
  }
  return num;
};

// 279 完全平方数（无向图）
const numSquares = function(n) {
  const list = [];
  list.push([n, 0]);
  const map = new Map();
  map.set(n, true);
  // BFS
  while (list.length > 0) {
    const current = list.shift();
    const [num, times] = current;
    // 这里细节
    for (let i = 1; ;i++) {
      const newNumber = num - i ** 2;
      if (newNumber < 0) {
        break;
      }
      if (newNumber === 0) {
        return times + 1;
      }
      if (!map.get(newNumber)) {
        map.set(newNumber, true);
        list.push([newNumber, times + 1]);
      }
    }
  }
};

// 打家劫舍 198
const rob = function(nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  const res = [];
  res[0] = nums[0];
  res[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    res[i] = Math.max(nums[i - 1], res[i - 2] + nums[i]);
  }
  return res[res.length - 1];
};

// 0089 格雷编码 位运算
const grayCode = function(n) {
  const result = [0];
  for (let i = 1; i <= n; i++) {
    const len = result.length;
    for (let j = len - 1; j >= 0; j--) {
      result.push(result[j] | (1 << (i - 1)));
    }
  }
  return result;
};

// 0010 正则表达式，矩阵动态规划
const isMath = (s, p) => {
  if (s == null || p == null) {
    return false;
  }
  const sLen = s.length, pLen = p.length;
  const dp = new Array(sLen + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(pLen + 1).fill(false);
  }
  dp[0][0] = true;
  for (let j = 1; j < pLen + 1; j++) {
    if (p[j - 1] == '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }
  // 动态规划
  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      }
      else if (p[j - 1] == '*') {
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        }
        else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[sLen][pLen];
};

