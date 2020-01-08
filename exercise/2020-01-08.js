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

// 31

// 29

// 28

// 27

// 26