// 165 比较版本号码
function compareVersion(version1, version2) {
  // 这两个代码相同可以封装成一个函数，然后直接调用即可
  const arr1 = version1.split('.');
  for (let i = 0; i < arr1.length; i++) {
    arr[i] = parseInt(arr1[i], 10);
  }
  while (arr1[arr1.length - 1] === 0) {
    arr1.pop();
  }
  const arr2 = version2.split('.');
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = parseInt(arr2[i], 10);
  }
  while (arr2[arr2.length - 1] === 0) {
    arr2.pop();
  }
  // 参数预处理结束
  const len = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    if (arr1[i] < arr2[i]) return 1;
    if (arr1[i] > arr2[i]) return -1;
  }
  if (arr1.length === arr2.length) return 0;
  if (arr1.length < arr2.length) return -1;
  return 1;
}

// 方法2 正则
function compareTwo(a, b) {
  return a === b ? 0 : (a > b ? 1 : -1);
}

function compareVersion2(version1, version2) {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;
  const minLen = Math.min(arr1Len, arr2Len);
  for (let i = 0; i < minLen; i++) {
    const res = campareTwo(parseInt(arr1[i], 10), parseInt(arr2[i], 10));
    if (res !== 0) return res;
  }
  arr1.splice(0, minLen);
  arr2.splice(0, minLen);
  const res1 = arr1.join('').replace(/0/g, '');
  const res2 = arr2.join('').replace(/0/g, '');
  if (res1 !== '') return 1;
  if (res2 !== '') return -1;
  return 0;
}

// 思路三：优化后的正则表达式
function compareVersion(version1, version2) {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;
  const minLen = arr1Len < arr2Len ? arr1Len : arr2Len;
  for (let i = 0; i < minLen; i++) {
    const res = compareTwo(parseInt(arr1[i], 10), parseInt(arr2[i], 10));
    if (res !== 0) return res;
  }
  arr1.splice(0, minLen);
  arr2.splice(0, minLen);
  let arr;
  let isArr1 = null;
  if (arr1.length > 0) {
    isArr1 = true;
    arr = arr2;
  } else {
    isArr1 = false;
    arr = arr2;
  }
  for (let i = 0; i < arr.length; i++) {
    const item = parseInt(arr[i], 10);
    if (item > 0) {
      return isArr1 ? 1 : -1;
    }
  }
  return 0;
}

// 155 使用JS设置栈(数组基本实现)
function MinStack() {
  this.value = [];
}
MinStack.prototype.push = function(x) {
  this.value.push(x);
  return null;
}
MinStack.prototype.pop = function() {
  this.value.pop();
  return null;
}
MinStach.prototype.top = function() {
  const len = this.value.length;
  return this.value[len - 1];
}
MinStack.prototype.getMin = function() {
  return Math.min(...this.value);
}

// 151 反转字符串中的每个单词
function reverseWords(s) {
  if (s.indexOf(' ') === -1) return s;
  const arr = s.trim().split(' ');
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

// 149 给定一个二维平面，判断平面上多少个点共线
// 辅助函数
function samePoints(a, b) {
  return (a[0] === b[0] && a[1] === b[1]);
}
function pointLine(a, b, c) {
  if (samePoints(a, b) || samePoints(b, c) || samePoints(a, c)) {
    return true;
  }
  const num1 = (((a[0] - b[0]) % 10000 * (a[1] - c[1]) % 10000));
  const num2 = (((a[0] - c[0]) % 10000 * (a[1] - b[1]) % 10000));
  return num1 === num2;
}
function getKey(a) {
  return `${a[0]}+${a[1]}`;
}
function duplicatePoints(points) {
  const obj = {};
  for (let i = 0; i < points.length;) {
    const key = getKey(points[i]);
    if (!obj[key]) {
      obj[key] = 1;
      i++;
    } else {
      obj[key]++;
      points.splice(i, 1);
    }
  }
  return {obj, points};
}
// 主函数
function maxPoints(points) {
  const defaultLen = points.length;
  if (defaultLen === 0) return 0;
  const { obj: numbers, points: newPoints } = duplicatePoints(points);
  const len = newPoints.length;
  if (len === 1 || len === 2) return defaultLen;
  let max = 2;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const item1 = newPoints[i];
      const item2 = newPoints[j];
      const key1 = getKey(item1);
      const key2 = getKey(item2);
      let res = numbers[key1] + number2[key2];
      for (let k = j + 1; k < len; k++) {
        if (pointLine(item1, item2, newPoints[k])) {
          const key3 = getKey(newPoints[k]);
          res += numbers[key3];
        }
      }
      max = Math.max(max, res);
    }
  }
  return max;
}

// 137 判断一个数组中出现一次的元素
function singleThree(nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  const obj = {};
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (obj[item] === 0 || obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  for (const key in obj) {
    if (obj[key] === 1) {
      return Number(key);
    }
  }
}
// 方法二：优化
function singleThree2(nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  const obj = {};
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (obj[item] === 0 || obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  const res = Object.keys(obj).filter((key) => {
    if (obj[key] === 1) {
      return obj[key];
    }
    return false;
  });
  return Number(res[0]);
}

// 136 只出现一次的数字（其他都是两个）
function singleNumber(nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  for (let i = 0; i < len; i++) {
    const item = `k${String(nums[i])}`;
    if (nums[item] === 0 || nums[item]) {
      delete nums[item];
    } else {
      nums[item] = nums[i];
    }
  }
  for (const key in nums) {
    if (key.indexOf('k') > -1) return nums[key];
  }
}
// 优化后方法
function singleNumber2(nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  const obj = {};
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (obj[item] === 0 || obj[item]) {
      delete obj[item];
    } else {
      obj[item] = item;
    }
  }
  for (const key in obj) {
    if (key) return Number(key);
  }
}

// 134 在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
function canCompleteCircuit(gas, cost) {
  const len = gas.length;
  const leftOver = newArray(len);
  for (let i = 0; i < len; i++) {
    leftOver[i] = gas[i] - cost[i];
  }
  return canCompleteCircuit(leftOver);
}
function canComplete(leftArr) {
  let sum = 0;
  const len = leftArr.length;
  leftArr.forEach((item) => sum += item);
  if (sum < 0) return -1;
  sum = 0;
  for (let i = 0; i < len; i++) {
    const tmpArr = [].concat(leftArr.slice(i, len).concat(leftArr.slice(0, i)));
    for (let j = 0; j < len; j++) {
      sum += tmpArr[j];
      if (sum < 0) break;
    }
    if (sum >= 0) return i;
    sum = 0;
  }
}
// 130
// 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
// 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
function getKey(i, j) {
  return `${i}+${j}`;
}
function deep(i, j, arr) {
  if (!arr[i][j]) return;
  const key = getKey(i, j);
  if (arr[i][j] === 'O' && !arr[key]) {
    arr[key] = true;
    deep(i, j - 1, arr);
    deep(i, j + 1, arr);
    deep(i + 1, j, arr);
    deep(i - 1, j, arr);
  }
}
function solve(board) {
  let len = board.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i === 0 || i === len - 1 || j === 0 || j === board[i].length - 1) {
        deep(i, j, board);
      }
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'O') {
        const key = getKey(i, j);
        if (!board[key]) {
          board[i][j] = 'X';
        }
      }
    }
  }
}
// 125 验证回文字符串
function isPalindrome(s) {
  if (s.trim() === '') return true;
  let b = s.replace(/\s*/, '').replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/ig, '');
  b = b.toLowerCase();
  const len = b.length;
  if (len === 0) return true;
  let max = Math.floor(len / 2);
  for (let i = 0; i < max; i++) {
    if (b[i] !== b[len - i - 1]) return false;
  }
  return true;
}

// 122
function maxProfit(prices) {
  const len = prices.length;
  if (len === 0) return 0;
  let profit = 0;
  for (let i = 1; i < len; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += (prices[i] - prices[i - 1]);
    }
  }
  return profit;
}
