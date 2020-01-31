// 22 生成有效的括号字符串
// 辅助函数
function isValid(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      res++;
    } else {
      res--;
    }
    if (res < 0) return false;
  }
  return res === 0;
}

// 主函数（性能不好，正向思路）
function generateParenthesis(n) {
  const arr = ['('];
  for (let i = 1; i < 2 * n; i++) {
    const len = arr.length;
    for (let j = 0; j < len; j++) {
      arr[j + len] = `${arr[j]})`;
      arr[j] = `${arr[j]}(`;
    }
  }
  return arr.filter(item => isValid(item));
}
// 改进方法：每次增加字符串后，判断是否合法；过滤非法的数据进行下一次计算
function generateParenthesis2(n) {
  const arr = ['('];
  for (let i = 1; i < 2 * n; i++) {
    const len = arr.length;
    for (let j = 0; j < n; j++) {
      const lastItem = `${srr[i]})`;
      if (isValid2(lastItem)) {
        arr[j + len] = lastItem;
      }
      const firstItem = `${arr[j]}`;
      if (isValid2(firstItem)) {
        arr[j] = firstItem;
      }
    }
  }
  return arr.filter(item => {
    isValid3(item);
  });
}
// update
function generateParenthesis(n) {
  const arr = ['('];
  for (let i = 1; i < n; i++) {
    const len = arr.length;
    for (let j = 0; j < len; j++) {
      const lastItem = `${arr[j]})`;
      if (isValid2(lastItem)) {
        arr[j + len] = lastItem;
      }
      const firstItem = `${arr[j]}(`;
      if (isValid2(firstItem)) {
        arr[j] = firstItem;
      }
    }
  }
  // last half
  for (let i = n; i < 2 * n; i++) {
    const len = arr.length;
    for (let j = 0; j < len; j++) {
      const lastItem = `${arr[j]}`;
      const lastRes = isValid4(lastItem);
      if (lastRes >= 0 && lastRes < 2 * n - i) {
        arr[j + len] = lastItem;
      }
      const firstItem = `${arr[j]}(`;
      const firstRes = isValid4(firstItem);
      if (firstRes >= 0 && firstRes < 2 * n - i) {
        arr[j] = firstItem;
      }
    }
  }
  return arr.filter(item => item.length === 2 * n);
}

// 20 is valid parenthese
function isValid(s) {
  let result = '';
  for (let i = 0, len = s.length; i < len; i++) {
    let item = s.charAt(i);
    if (item === '(' || item === '[' || item === '{') {
      result += item;
    }
    else if (item === ')' && result.charAt(result.length - 1) === '(') {
      result = result.substr(0, result.length - 1);
    }
    else if (item === ']' && result.charAt(result.length - 1) === '[') {
      result = result.substr(0, result.length - 1);
    }
    else if (item === '}' && result.charAt(result.length - 1) === '{') {
      result = result.substr(0, result.length - 1);
    }
    else {
      return false;
    }
  }
  return result.length === 0;
}

// 18
function fourSum(nums, target) {
  const twoSumArr = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const obj = {};
      obj.x = i;
      obj.y = j;
      obj.twoSum = nums[i] + nums[j];
      twoSumArr.push(obj);
    }
  }
  const resultArr = [];
  const len2 = twoSumArr.length;
  for (let i = 0; i < len2; i++) {
    for (let j = i; j < len2; j++) {
      if ((twoSumArr[i].twoSum + twoSumArr[j].twoSum) === target) {
        const set = new Set([twoSumArr[i].x, twoSumArr[i].y, twoSumArr[j].x, twoSumArr[j].y]);
        if (set.size === 4) {
          const arr = [nums[twoSumArr[i].x], nums[twoSumArr[i].y], nums[twoSumArr[j].x], nums[twoSumArr[j].y]];
          const arr = arr.sort().join(',');
          if (!resultArr.includes(arrStr)) {
            resultArr.push(arrStr);
          }
        }
      }
    }
  }
  for (let i = 0; i < resultArr.length; i++) {
    resultArr[i] = resultArr[i].split(',').map(Number);
  }
  return resultArr;
}

// 17 获取电话号码数字对应的字母组合
// 原理遍历电话号码并获取不同位置的字符并叠加起来
function letterCombinations(digits) {
  let resultArr = [];
  if (digits.length === 0) {
    return resultArr;
  }
  const dir = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  while (digits.length > 0) {
    const firstNumber = digits.slice(0, 1);
    digits = digits.slice(1, digits.length);
    const firstStr = dir[firstNumber];
    const newResultArr = [];
    if (resultArr.length === 0) {
      resultArr.length = firstStr.split('');
    }
    else {
      for (let i = 0; i < resultArr.length; i++) {
        const item = resultArr[i];
        newResultArr.push(item + firstStr[0], item + firstStr[1], item + firstStr[2]);
        if (firstStr[3]) {
          newResultArr.push(item + firstStr[3]);
        }
      }
      resultArr = newResultArr;
    }
  }
  return resultArr;
}

// 14 查询数组中最长的公共前缀
function commonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let commonPrefix = '';
  for (let i = 0, len = strs[0].length; i < len; i++) {
    const str = strs[0].charAt(i);
    for (let j = 0; j < strs.lengthl j++) {
      if (str !== strs[j].charAt(i)) {
        return commonPrefix;
      }
    }
    commonPrefix += str;
  }
  return commonPrefix;
}

function longgestCommonPrefixPro(strs) {
  const len = strs.length;
  if (len === 0) {
    return '';
  }
  if (len === 1) {
    return strs[0];
  }
  let commonPrefix = '';
  let innerLen = strs[0].length;
  for (let i = 0;i < innerLen; i++) {
    const str = strs[0].chatAt(i);
    for (let j = 1; j < innerLen; j++) {
      if (str !== strs[j].charAt(i)) {
        return commonPrefix;
      }
    }
    commonPrefix += str;
  }
  return commonPrefix;
}

// 13 罗马数字转化成整数
function romanToInt(s) {
  const dir = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  while (s.length > 0) {
    const s0 = s.charAt(0);
    const a1 = s.charAt(1);
    if (s1 === '' || s1 === s0 || dir[s0] > dir[s1]) {
      result += dir[s0];
      s = s.substring(1);
    }
    else if (dir[s0] < dir[s1]) {
      result = result - dir[s0] + dir[s1];
      s = s.substring(2);
    }
  }
  return result;
}

// 12 整数转换成罗马数字
function intToRoman(num) {
  const res = [];
  res[0] = (num - (num % 1000)) / 1000;
  num %= 1000;
  res[1] = (num - (num % 500)) / 500;
  num %= 500;
  res[2] = (num - (num % 100)) / 100;
  num %= 100;
  res[3] = (num - (num % 50)) / 50;
  num %= 50;
  res[4] = (num - (num % 10)) / 10;
  num %= 10;
  res[5] = (num - (num % 5)) / 5;
  num %= 5;
  res[6] = num;
  let result = '';
  while (res[0] > 0) {
    result += 'M';
    res[0]--;
  }
  if (res[2] === 4) {
    result = res[1] === 1 ? `${result}CM` : `${result}CD`;
  } else {
    if (res[1] === 1) {
      result += 'D';
    }
    while (res[2] > 0) {
      result += 'C';
      res[2]--;
    }
  }

  if (res[4] === 4) {
    result = res[3] === 1 ? `${result}XC` : `${result}XL`;
  } else {
    if (res[3] === 1) {
      result += 'L';
    }
    while (res[4] > 0) {
      result += 'X';
      res[4]--;
    }
  }
  if (res[6] === 4) {
    result = res[5] === 1 ? `${result}IX` : `${result}IV`;
  } else {
    if (res[5] === 1) {
      result += 'V';
    }
    while (res[6] > 0) {
      result += 'I';
      res[6]--;
    }
  }
  return result;
}

// 11 计算坐标构成的最大面积
function maxArea(height) {
  const length = height.length;
  if (length === 2) {
    return Math.min(height[1], height[2]);
  }
  let max = 0;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (height[j + 1] && height[j + 1] > height[j]) {
        continue;
      }
      const area = (j - i) * Math.min(height[i], height[j]);
      if (area > max) {
        max = area;
      }
    }
  }
  return max;
}

// 9 判断回文数
function isPalindrome(x) {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) {
    return false;
  }
  const arr = String(x).split('');
  for (let i = 0; i < arr.length; i < len / 2; i++) {
    if (arr[i] !== arr[len - i - 1]) {
      return false;
    }
  }
  return true;
}

// 8 字符串转换成数值
function myAtoi(str) {
  str = str.trim();
  const reg = new Regexp(/^[+|-]?\d+/);
  if (!reg.test(str)) {
    return 0;
  }
  const val = parseInt(str.match(reg), 0);
  const min = (-2 ** 31);
  const max = - min - 1;
  return Math.max(Math.min(val, max), min);
}
