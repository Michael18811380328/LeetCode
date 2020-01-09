// 42 trap rain
// 算法：分治法、反向思路
function trapRain(height) {
  const len = height.length;
  if (len === 0) return 0;
  while (height[0] === 0) {
    height.shift();
  }
  while (height[height.length - 1] === 0) {
    height.pop();
  }
  if (height.length === 0) return 0;

  let sum = 0;
  const max = Math.max(...height);
  const maxIndexArr = [];
  height.forEach((item, index) => {
    if (item === max) {
      maxIndexArr.push(index);
    }
  });
  // middle rain
  if (maxIndexArr.length > 1) {
    let middleSum = 0;
    for (let i = maxIndexArr[0]; i < maxIndexArr[maxIndexArr.length - 1]; i++) {
      middleSum += height[i];
    }
    const rain = max * (maxIndexArr[maxIndexArr.length - 1] - maxIndexArr[0]) - middleSum;
    sum += rain;
  }
  // leftRain
  let leftSum = 0;
  let leftRainSum = 0;
  for (let i = 0; i < maxIndexArr[0]; i++) {
    leftSum += height[i];
    if (i > 0 && height[i] < height[i - 1]) {
      height[i] = height[i - 1];
    }
    leftRainSum += height[i];
  }
  sum += leftRainSum - leftSum;
  // rightRain
  let rightSum = 0;
  let rightRainSum = 0;
  for (let i = height.length - 1; i > maxIndexArr[maxIndexArr.length - 1]; i--) {
    rightSum += height[i];
    if (height[i] < height[i + 1]) {
      height[i] = height[i + 1];
    }
    rightRainSum += height[i];
  }
  sum += rightRainSum - rightSum;
  return sum;
}

// 41 get min number
function findMissing(nums) {
  nums = nums.filter(item => item > 0);
  nums = nums.sort((a, b) => a - b);
  if (nums[0] !== 1) return 1;
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1] + 1) {
      return nums[i - 1] + 1;
    }
  }
  return nums[len - 1] + 1;
}

// 39 conut and say
function countAndSay(n) {
  if (n === 1) return '1';
  if (n === 2) return '2';
  const dict = [null, '1', '11'];
  for (let i = 3; i <= n; i++) {
    const lastArr = dict[i - 1].split('');
    let result = '';
    let time = 0;
    let str = null;
    while (lastArr.length > 0) {
      if (lastArr[0] === str) {
        time++;
      } else {
        if (time > 0) {
          result = result + time + str;
        }
        time = 1;
        str = lastArr[0];
      }
      lastArr.shift();
    }
    dict[i] = result + time + str;
  }
  return dict[n];
}

// 36 is valid sudoku
function isDuplicate(arr) {
  for (let i = 0; i < 9; i++) {
    const item = arr[i];
    if (item === '.') continue;
    if (arr.indexOf(item) !== arr.lastIndexOf(item)) {
      return false;
    }
  }
  return true;
}

function isValidSudoku(board) {
  for (let i = 0; i < 9; i++) {
    if (!isDuplicate(board[i])) return false;
  }
  for (let i = 1; i < 9; i++) {
    const column = [];
    for (let j = 0; j < 9; j++) {
      column.push(board[j][i]);
    }
    if (!isDuplicate(column)) return false;
  }
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const cell = [];
      cell.push(board[i][j], board[i][j + 1], board[i][j + 2]);
      cell.push(board[i + 1][j], board[i + 1][j + 1], board[i + 1][j + 2]);
      cell.push(board[i + 2][j], board[i + 2][j + 1], board[i + 2][j + 2]);
      if (!isDuplicate(cell)) return false;
    }
  }
  return true;
}
// 34 search number in ordered array
function searchRange1(nums, target) {
  const startIndex = nums.indexOf(target);
  if (startIndex === -1) {
    return [-1, -1];
  }
  const endIndex = nums.lastIndexOf(target);
  return [startIndex, endIndex];
}

function searchRange2(nums, target) {
  let start = -1, end = -1;
  for (let i = 0, len = nums.length; i <= len; i++) {
    if (nums[i] === target && (nums[i - 1] === undefined || nums[i - 1] !== target)) {
      start = i;
    }
    if (nums[i - 1] === target && (nums[i] === undefined || nums[i] !== target)) {
      end = i - 1;
    }
  }
  return [start, end];
}

// 31 用数组表示一个数，调换位置，获取比这个数大的一个数
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

// 29 不使用divide实现除法（算法不好）
function handleBig(res) {
  if (res > 2147483647) return 2147483647;
  if (res < -2147483648) return -2147483648;
}

function divide(dividend, divisor) {
  if (dividend === 0) return 0;
  if (dividend === divisor) return 1;
  if (dividend === -divisor) return -1;
  if (divisor === 1) return handleBig(dividend);
  if (divisor === -1) return handleBig(-dividend);
  if (Math.abs(dividend) < Math.abs(divisor)) return 0;
  let result = 0;
  if (dividend > 0 && divisor > 0) {
    while (dividend >= divisor) {
      dividend -= divisor;
      result++;
    }
  }
  if (dividend < 0 && divisor < 0) {
    while (-dividend >= -divisor) {
      dividend -= divisor;
      result++;
    }
  }
  if (dividend > 0 && divisor < 0) {
    while (dividend >= -divisor) {
      dividend += divisor;
      result++;
    }
    result = -result;
  }
  if (dividend < 0 && divisor > 0) {
    while (-dividend >= divisor) {
      dividend += divisor;
      result++;
    }
    result = -result;
  }
  return handleBig(result);
}

// 28 获取字符串中首次出现另一个字符串的位置
function strStr(haystack, needle) {
  if (needle === '') return 0;
  return haystack.indexOf(needle);
}

// 27 原地移除数组中的某个元素，并返回新数组中的长度
function removeElement(nums, val) {
  if (!nums.includes(val)) {
    return nums.length;
  }
  for (let i = 0; i < nums.length;) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
}

// 26 原地删除排序数组中的重复出现的元素
function removeDuplicates(nums) {
  for (let i = 0; i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
}
