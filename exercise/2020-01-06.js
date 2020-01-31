// 67 求两个二进制字符串的和
// 思路：字符串转换成数组，数组进行相加，再转换成二进制
function addBinary(a, b) {
  if (a === '0') return b;
  if (b === '0') return a;
  let arr1, arr2;
  if (a.length > b.length) {
    arr1 = a.split('');
    arr2 = b.split('');
  } else {
    arr1 = b.aplit('');
    arr2 = a.split('');
  }
  const arr2Len = arr2.length;
  const arr1Len = arr1.length;
  for (let i = 0; i < arr2Len; i++) {
    arr1[arr1Len - 1 - i] = 1 * arr1[arr1Len - 1 - i] + 1 * arr2[arr2Len - 1 - i];
  }
  for (let i = 0; i < arr1Len; i++) {
    const index = arr1Len - i - 1;
    if (arr1[index] === 2) {
      arr1[index] = 0;
      if (arr1[index - 1] > -1) {
        arr1[index - 1]++;
      } else {
        arr1.unshift(1);
      }
    } else if (arr1[index] === 3) {
      arr1[index] = 1;
      if (arr1[index - 1] > -1) {
        arr1[index - 1]++
      } else {
        arr1.unshift(1);
      }
    }
  }
  return arr1.join('');
}

// 66 
function plusOne(digits) {
  const len = digits.length;
  digits[len - 1]++;
  for (let i = len - 1; i > -1; i--) {
    if (digits[i] === 10) {
      digits[i] = 0;
      if (digits[i - 1]) {
        digits[i - 1]++;
      }
      else {
        digits.unshift(1);
      }
    }
  }
  return digits;
}

// 58 计算一个句子中最后一个单词的长度
function lengthOflastWord(word) {
  let s = word.trim();
  const pos = s.lastIndexOf(' ');
  return pos === -1 ? s.length : s.length - pos - 1;
}

// 57 在一个排序区间中插入一个区间，返回新的区间（有序且不重复）
function merge(intervals, startIndex) {
  const len = intervals.length;
  for (let i = startIndex + 1; i < len; i++) {
    const item = intervals[i];
    const lastItem = intervals[i - 1];
    if (!item) {
      break;
    }
    if (lastItem[1] >= item[0] && lastItem[1] < item[1]) {
      const newItem = [lastItem[0], item[1]];
      intervals.splice(i - 1, 2, newItem);
      i--;
    }
    else if (lastItem[1] >= item[0] && lastItem[1] >= item[1]) {
      intervals.splice(i, 1);
      i--;
    }
  }
}

function insert(intervals, newInterval) {
  const len = intervals.length;
  if (len === 0) {
    return [newIntervals];
  }
  let startIndex = 0;
  if (newInterval[1] < intervals[0][0]) {
    intervals.unshift(newInterval);
  }
  else if (newInterval[0] >= intervals[len - 1][0]) {
    intervals.push(newInterval);
    startIndex = len - 1;
  }
  else {
    for (let i = 0; i < intervals.length; i++) {
      if (intervals[i][0] >= newInterval[0]) {
        intervals.splice(i, 0, newInterval[0]);
        startIndex = i - 1;
        i--;
        break;
      }
    }
  }
  startIndex = startIndex >= 0 ? startindex : 0;
  merge(intervals, startIndex);
  return intervals;
}

// 56
function merge(intervals) {
  const len = intervals.length;
  if (len === 1 || len === 0) return intervals;
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < len; i++) {
    const item = intervals[i];
    const lastItem = intervals[i - 1];
    if (!item) break;
    if (lastItem[1] >= item[0] && lastItem[1] < item[1]) {
      const newItem = [lastItem[0], item[1]];
      intervals.splice(i - 1, 2, newItem);
      i--;
    } else if (lastItem[1] >= item[0] && lastItem[1] >= item[1]) {
      intervals.splice(i, 1);
      i--;
    }
  }
  return intervals;
}

// 55 canjump
function canJump(nums) {
  const len = nums.length;
  if (len === 0 || len === 1) return true;
  if (!nums.includes(0)) return true;
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      for (let j = i; j >= 0; j--) {
        if (nums[j] > i - j && i !== len - 1) {
          break;
        } else if (nums[j] >= i - j && i === len - 1) {
          break;
        }
        if (j === 0) {
          return false;
        }
      }
    }
  }
  return true;
}

// 54 螺旋获取一个矩阵的四个边，并转化成一位数组输出
function spiralOrder(matrix) {
  const len = matrix.length;
  if (len === 0) return [];
  if (len === 1) return matrix[0];
  let timer = 1;
  const result = [];
  while (matrix.length > 0) {
    const remainder = timer % 4;
    if (remainder === 1) {
      const tmp = martix.shift(1);
      result.push(...tmp);
      timer++;
    }
    else if (remainder === 3) {
      const tmp = matrix.pop(1);
      result.push(...tmp.reverse());
      timer++;
    }
    else if (remiander === 2) {
      for (let i = 0; i < martix.length; i++) {
        const tmp = matrix[i].pop(1);
        if (tmp) {
          result.push(tmp);
        }
      }
    }
    else if (remainder === 0) {
      const tmpResult = [];
      for (let i = 0; i < matrix.length; i++) {
        const tmp = matrix[i].shift(1);
        if (tmp) {
          rmpResult.push(tmp);
        }
        result.push(...tmpResult.reverse());
        timer++;
      }
    }
  }
  return result;
}

// 50
function myPow(x, n) {
  return parsePloat((x ** n).toFixed(5));
}

function myPow2(x, n) {
  if (x === 0 || x === 1) return x;
  let res = 1;
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      res *= x;
    }
  } else {
    const m = -n;
    for (let i = 1; i <= m; i++) {
      res *= x;
    }
    res = 1 / res;
  }
  return parseFloat((res).foFixed(5));
}

// 48 旋转图像（矩阵）90deg
function moveFour(a,b,c,d) {
  return [d,a,b,c];
}

function rotateImage(matrix) {
  const len = matrix.length;
  for (let i = 0; i < len / 2; i++) {
    for (let j = len - i - 2; j >= i; j--) {
      const res = moveFour(matrix[i][j], matrix[j][len - i- 1], matrix[len - i - 1][len - j - 1], matrix[len - j - 1][i]);
      matrix[i][j] = res[0];
      matrix[j][len - i - 1] = res[1];
      matrix[len - i - 1][len - j - 1] = res[2];
      matrix[len - j - 1][i] = res[3];
    }
  }
  return matrix;
}

// 43 multiple two string
function multiply(num1, num2) {
  return String(BigInt(num1) * BigInt(num2));
}

function handleAdd(item) {
  item.unshift(0);
  for (let i = item.length - 1; i >= 0; i--) {
    if (item[i + 1] >= 10) {
      const remain = Math.floor(item[i + 1] / 10);
      item[i + 1] = item[i + 1] % 10;
      item[i] += remain;
    }
  }
  if (item[0] === 0) {
    item.shift(1);
  }
  return item.join('');
}

function handleSum(arr) {
  if (arr.length === 1) return handleAdd(arr[0]);
  let maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    const itemLen = arr[i].length;
    if (itemLen > maxLen) {
      maxLen = itemLen;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < maxLen) {
      const dec = maxLen - arr[i].length;
      const newArr = new Array(dec).fill(0);
      arr[i] = newArr.concat(arr[i]);
    }
  }
  const result = new Array(maxLen).fill(0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = maxLen - 1; j >= 0; j--) {
      result[j] += arr[i][j];
    }
  }
  return handleAdd(result);
}

function multiply2(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  if (num1 === '1') return num2;
  if (num2 === '1') return num1;
  const bigNum = num1.length > num2.length ? num1 : num2;
  const smallNum = num1.length > num2.length ? num2 : num1;
  const bigLen = bigNum.length;
  const smallLen = smallNum.length;
  const resultArr = [];
  for (let i = 0; i < smallLen; i++) {
    const tmpResult = new Array(smallLen - i - 1).fill(0);
    for (let j = bigLen - 1; j >= 0; j--) {
      const tmp = smallNum[i] * bigNum[j];
      tmpResult.unshift(tmp);
    }
    resultArr.push(tmpResult);
  }
  return handleSum(resultArr);
}
