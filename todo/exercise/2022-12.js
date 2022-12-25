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

