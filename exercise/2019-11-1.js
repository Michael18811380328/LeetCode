// 01 twoSum
// 思路一：循环数组。外循环和内循环一次获取数组中的两个元素。时间复杂度最差
function twoSum(nums, target) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
// 思路二：使用外循环遍历数组的元素，然后计算出两一个树的位置。
function twoSum(nums, target) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let another = target - nums[i];
    let index = nums.latIndexOf(another);
    if (index > -1 && i !== index) {
      return [i, index];
    }
  }
}
// 还没想到最好的办法的思路

// 07 reverse number
// 思路一：首先判断并存储正负数；把数值变成字符串再反转后，再转化成字符串
// 字符串再转化成数值并判断越界
// 性能问题主要是数值转化成数组字符串过程中存在四次转化
function reverse(x) {
  const isMinus = x < 0;
  let arr = String(Math.abs(x)).split('').reverse();
  let result = Number(arr.join());
  if (result >= Math.pow(2, 31) - 1 || result <= Math.pow(-2, 31) + 1) {
    return 0;
  }
  return isMinus ? -result : result;
}

// 第二种思路：处理正负数和越界相同
// 直接把一个正数通过余数进行反转，这样避免数组转化，性能好
function reverse(x) {
  if (x ===0) return;
  const isMinus = x < 0;
  let result = 0;
  x = Math.abs(x);
  while(x > 0) {
    let a = x % 10;
    result = result * 10 + a;
    x = (x - a) / 10;
  }
  if (result >= Math.pow(2, 31) - 1 || result <= Math.pow(-2, 31) + 1) {
    return 0;
  }
  return isMinus ? -result : result;
}


// 09 判断回文数
// 思路：处理特殊值：0是回文数；0结尾或者负数不是回文数
// 然后把数值转化成字符串，判断
function isPalindrome(x) {
  if (x ===0) return true;
  if (x < 0 || x % 10 === 0) return false;
  let arr = String(x).split('');
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[len - i - 1]) {
      return false;
    }
  }
  return true;
};

// 121 maxProfit
// 给定一个数组表示股票的价格。计算买入卖出的最大收益
// 思路：循环获取最小值以及当前值，计算最大的差值
 function maxProfit(prices) {
  if (prices.length === 1) return 0;
  let profit = 0;
  let minPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    let bonus = prices[i] - minPrice;
    if (bonus > profit) {
      profit = bonus;
    }
  }
  return profit;
 }

// 13 罗马数字转化成字符
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
    const s1 = s.charAt(1);
    if (s1 === '' || s0 === s1 || dir[s0] > dir[s1]) {
      result += dir[s0];
      s = s.substring(1);
    }
    else if(dir[s0] < dir[s1]) {
      result = result - dir[s0] + dir[s1];
      s = s.substring(2);
    }
  }
  return result;
}

// 14-最长公共前缀
function longCommonPrefix(strs) {
  if (strs.length === 0) retrun '';
  if (strs.length === 1) {
    return strs[0];
  }
  let commonPrefix = '';
  for (let i = 0; i < strs[0].length; i++) {
    let str = strs[0].charAt(i);
    for (let j = 1; j < strs.length; j++) {
      if (str !== strs[j].charAt(i)) {
        return commonPrefix;
      }
    }
    commonPrefix += str;
  }
  return commonPrefix;
}

// 17-电话号码九键组合
function letterCombimations(digits) {
  let resultArr = [];
  if (digits.length === 0) return resultArr;
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
    let newResultArr = [];
    if (resultArr.length === 0) {
      resultArr = firstStr.split('');
    }
    else {
      for (let i = 0; i < resultArr.length; i++) {
        let item = resultArr[i];
        newResultArr.push(item + firstStr[0], item + firstStr[1], item + firstStr[2]);
        if (firstStr[3]) {
          newResultArr.push(item + firstStr[3]);
        }
        resultArr = newResultArr;
      }
    }
  }
  return resultArr;
}

// 171 excel 序号
function titleToNumber(s) {
  let result = 0;
  while (s.length > 0) {
    result = result * 26 + (s.charCodeAt(0) - 64);
    s = s.slice(1, s.length);
  }
  return result;
}


// 18 四数之和（算法不好）

// 189 旋转数组
function rotate(nums, k) {
  for (let i = 0; i < k; i++) {
    let item = nums.pop();
    nums.nushift();
  }
}

function rotate2(nums, k) {
  const len = nums.length;
  if (len === 1 &&& k === 0) return;
  const times = len - k % len;
  for (let i = 0; i < times; i++) {
    let item = nums.shift();
    nums.push(item);
  }
}

function rotate3(nums, k) {
  const len = nums.length;
  if (len ==== 1 || k === 0) return;
  const times = k % len;
  let tailArr = nums.splice(-times, times);
  nums.unshift(...tailArr);
}

// 20 valid 括号
function inValid(s) {
  let result = '';
  const left = ['(', '[', '{'];
  for (let i = 0; i < s.length; i++) {
    if (left.includes(s.charAt(i))) {
      result += s.charAt(i);
    }
    else {
      if ((s.charAt(i) === ')' && result.charAt(result.length - 1) === '(') || (s.charAt(i) === ']' && result.charAt(result.length - 1) === '[') || (s.charAt(i) === '}' && result.charAt(result.length - 1) === '{')) {
        result = result.subStr(0, result.length - 1);
      }
      else {
        return false;
      }
    }
  }
  return result.length === 0;
}

// 26 排序的数组去重
function removeDuplicates(nums) {
  for (let i = 0; i < nums.length;) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
}

// 27 移除数组中的某些元素
function removeElement(nums, val) {
  if (!nums.includes(val)) {
    return nums.length;
  }
  for (let i = 0; i < nums.length;) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
    else {
      i++;
    }
  }
  return nums.length;
}

// 28 strstr 
function strStr(haystack, needle) {
  if (needle === '') return 0;
  return haystack.indexOf(needle);
}

// 35 搜索插入位置
function searchInsert(nums, target) {
  let index = nums.indexOf(target);
  if (index > -1) return index;
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  let min = 0;
  let max = nums.length;;
  while(max > min) {
    let middle = Math.ceil((max + min) / 2);
    if (nums[middle] > target) {
      if (middle === max) return middle;
      max = middle;
    }
    else {
      min = middle;
    }
  }
}

// 42-接雨水
function trap(height) {
  if (height.length === 0) return 0;
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
    if (item === max) maxIndexArr.push(index);
  });

  if (maxIndexArr.length > 1) {
    let middleSum = 0;
    for (let i = maxIndexArr[0]; i < maxIndexArr[maxIndexArr.length - 1]; i++) {
      middleSum += height[i];
    }
    let rain = max * (maxIndexArr[maxIndexArr.length - 1] - maxIndeArr[0] - middleSum);
    sum += rain;
  }
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

  let rightSum = 0;
  let rightRainSum = 0;
  for (let i = height.length - 1; i < maxIndexArr[maxIndexArr.length - 1]; i--) {
    rightSum += height[i];
    if (height[i] < height[i + 1]) {
      height[i] = height[i + 1];
    }
    rightRainSum += height[i];
  }
  sum += rightRainSum - rightSum;
  return sum;
}

// 66 array plus one
function plusOne(digits) {
  const len = digits.length;
  digits[len - 1]++;
  for (let i = len - 1; i > -1; i--) {
    if (digits[i] === 10) {
      digits[i] = 0;
      if (digits[i - 1]) {
        digits[i - 1]++;
      } else {
        digits.unshift(1);
      }
    }
  }
  return digits;
}

// 67-二进制数组求和
function addBinary(a, b) {
  if (a === '0') return b;
  if (b === '0') return a;
  let arr1, arr2;
  if (a.length > b.length) {
    arr1 = a.split('');
    arr2 = b.split('');
  } else {
    arr2 = a.split('');
    arr1 = b.split('');
  }

  const arr2Len = arr2.length;
  const arr1Len = arr1.length;
  for (let i = 0; i < arr2Len; i++) {
    arr1[arr1Len - i - 1] = 1 * arr1[arr1Len - 1 - i] + 1 * arr2[arr2Len - 1 - i];
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
    }
    else if (arr1[index] === 3) {
      arr1[index] = 1;
      if (arr1[index - 1] > -1) {
        arr1[index - 1]++;
      } else {
        arr1.unshift(1);
      }
    }
  }
  return arr1.join('');
}

// 69 sqrt
function mySqrt(x) {
  if (x === 0) return 0;
  return Math.floor(Math.sqrt(x));
}

function mySqrt2(x) {
  return parseInt(Math.sqrt(x));
}

// 08 myAtoi
function myAnti(str) {
  const reg = new Regexp(/^[+|-]?d+/);
  if (!reg.test(str)) {
    return 0;
  }
  let val = parstInt(str.match(reg));
  const min = -Math.pow(2, 31);
  const max = -min - 1;
  return Math.max(Math.min(val, max), min);
} 





