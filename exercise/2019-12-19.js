import { getHint } from "../js/finished2/299-getHint";

// 练习

// 977 计算有序数组的平方，并排序
// 思路：首先计算大于0部分的平方，这部分顺序固定
// 然后计算小于0的数的平方，比较当前的结果和正数平方，插入已有结果
// 算法：指针 数组
function sortedSquares(A) {
  let index = A.length - 1;
  for (let i = index; i >= 0; i--) {
    if (A[i] >= 0) {
      A[i] **= 2;
    } else {
      break;
    }
  }
  while (A[0] < 0) {
    const item = A[0] ** 2;
    if (item > A[index]) {
      A.push(item);
    } else {
      while(item < A[index]) {
        index--;
      }
      A.splice(index + 1, 0, item);
    }
    A.shift(1);
  }
  return A;
}

// 788 旋转数字
// 把一个数组镜像旋转180度，如果结果还是数字，那么就是好数
// 思路：018 2569 分治算法 计算N内有多少个好数
function rotatedigits(N) {
  let result = 0;
  const Arr1 = [2,5,6,9];
  const Arr2 = [0,1,8];
  const Arr3 = [2,5,6,0,1,8];
  const Arr4 = [1,8];
  // 注意：0不能作为第一个数
  if (N <= 10) {
    for (let i = 0; i <= N; i++) {
      if (Arr1.includes(i)) {
        result++;
      }
    }
  }
  else if (N <= 100) {
    result = 4;
    for (let i = 11; i < N; i++) {
      const num2 = i % 10;
      const num1 = (i - num2) / 10;
      if ((Arr4.includes(num1) && Arr1.includes(num2)) || (Arr1.includes(num1) && Arr3.includes(num2))) {
        result++;
      }
    }
  }
  else if (N <= 1000) {
    result = 40;
    for (let i = 101; i <= N; i++) {
      const num3 = 1 % 10;
      const num2 = ((i % 100) - num3) / 10;
      const num1 = (i - num2 * 10) / 100;
      if (Arr4.includes(num1) && Arr2.includes(num2) && Arr1.includes(num3)) {
        result++;
      }
      if (Arr4.includes(num1) && Arr1.includes(num2) && Arr3.includes(num3)) {
        result++;
      }
      if (Arr1.includes(num1) && Arr3.includes(num2) && Arr3.includes(num3)) {
        result++;
      }
    }
  }
  else if (N <= 10000) {
    result = 316;
    for (let i = 1001; i <= N; i++) {
      const num4 = i % 10; // 个位
      const num3 = ((i % 100) - num4) / 10; // 十位
      const num2 = ((i % 1000) - num3 * 10 - num4) / 100; // 百位
      const num1 = (i - (num2 * 100) - (num3 * 10) - num4) / 1000; // 千位

      // 千位是18, 百位是018 十位是018，个位2569
      if (Arr4.includes(num1) && Arr2.includes(num2) && Arr2.includes(num3) && Arr1.includes(num4)) {
        result++;
      }
      // 千位是18, 百位是018 十位是2569，个位随便
      if (Arr4.includes(num1) && Arr2.includes(num2) && Arr1.includes(num3) && Arr3.includes(num4)) {
        result++;
      }
      // 千位是18, 百位是2569，十位个位随便
      if (Arr4.includes(num1) && Arr1.includes(num2) && Arr3.includes(num3) && Arr3.includes(num4)) {
        result++;
      }
      // 千位是2569，其他随便
      if (Arr1.includes(num1) && Arr3.includes(num2) && Arr3.includes(num3) && Arr3.includes(num4)) {
        result++;
      }
    }
  }
  return result;
}

// 728 给定一个范围，输出自除数
// 求范围内的满足条件的数，常规思路是循环一次逐一判断
// 判断自除数：循环判断余数和除数即可。
// 注意：边界条件
function selfDividingNumbers(left, right) {
  const result = [];
  for (let i = left; i < right + 1; i++) {
    let item = i;
    let bool = true;
    while (item > 0) {
      const remainder = item % 10;
      item = (item - remainder) / 10;
      if (remainder === 0 || i % remainder > 0) {
        bool = false;
        break;
      }
    }
    if (bool) {
      result.push(i);
    }
  }
  return result;
}

// 551-检查学生出勤率
// 把字符串转换成数组，然后遍历判断是否出勤
function checkRecord(s) {
  const records = s.split('');
  const len = records.length;
  let absentTime = 0;
  for (let i = 0; i < len; i++) {
    if (records[i] === "A") {
      absentTime++;
    }
    if (absentTime > 1) {
      return false;
    }
    if (i < len - 2 && records[i] === 'L' && records[i + 1] === 'L' && records[i + 2] === 'L') {
      return false;
    }
  }
  return true;
}

// 461-汉明距离
// 十进制和二进制的转换
function hammingDistance2(x, y) {
  let result = 0;
  while (x > 0 || y > 0) {
    if ((x % 2 === 1 && y % 2 === 0) || (x % 2 === 0 && y % 2 === 1)) {
      result++;
    }
    x = (x - (x % 2)) / 2;
    y = (y - (y % 2)) / 2;
  }
  return result;
}

function hammingDistance1(x, y) {
  let result = 0;
  while (x > 0 || y > 0) {
    const a = x % 2;
    const b = y % 2;
    if ((a === 1 && b === 0) || (a === 0 && b === 1)) {
      result++;
    }
    x = (x - a) / 2;
    y = (y - b) / 2;
  }
  return result;
}

// 443-压缩字符串
function compressString(chars) {
  let timer = 1;
  for (let i = 0; i < chars.length;) {
    if (char[i] !== char[i + 1]) {
      if (timer > 1) {
        chars.splice(i + 1, 0, timer);
        timer = 1;
      }
      i++;
    } else {
      chars.splice(i, 1);
      timer++;
    }
  }
  for (let i = 0; i < chars.length;) {
    if (typeof char[i] === 'number') {
      if (chars[i] < 10) {
        chars[i] = String(chars[i]);
      } else {
        const newItems = (`${chars[i]}`).split('');
        chars.splice(i, 1, ...newItems);
        i+=2;
      }
    }
    i++;
  }
  return chars.length;
}

// 这个算法局限性：如果字符串中有数字，然后前一个字符串的个数等于
// 后面的数值，就会计算错误。这里只适用于全部是字母或者符号的字符串
function compressString2(chars) {
  for (let i = 0; i < chars.length; i++) {
    const item = chars[i];
    const firstIndex = chars.indexOf(item, i);
    const lastIndex = chars.lastIndexOf(item);
    if (firstIndex !== lastIndex) {
      const items = lastIndex - firstIndex + 1;
      const newItems = (`${times}`).split('');
      chars.splice(firstIndex + 1, times - 1, ...newItems);
    }
  }
  return chars.length;
}

// 415-计算两个非负整数字符串的和（字符串很长，长度小于5000）
function addStrings(num1, num2) {
  return String(BigInt(num1) + BigInt(num2));
}

function addStrings2(num1, num2) {
  if (num1 === '0') {
    return num2;
  }
  if (num2 === '0') {
    return num1;
  }
  let arr1 = num1.split('');
  let arr2 = num2.split('');
  const maxLen = Math.max(arr1.length, arr2.length);
  if (arr1.length < maxLen) {
    const tmp = maxLen - arr1.length;
    const tmpArr = new Array(tmp).fill(0);
    arr1 = tmpArr.concat(arr1);
  }
  if (arr2.length < maxLen) {
    const tmp = maxLen - arr2.length;
    const tmpArr = new Array(tmp).fill(0);
    arr2 = tmpArr.concat(arr2);
  }
  const resultArr = newArray(maxLen + 1).fill(0);
  for (let i = maxLen - 1; i >= 0; i--) {
    resultArr[i + 1] = resultArr[i + 1] + parseInt(arr1[i], 10) + parseInt(arr2[i], 10);
    if (result[i + 1] >= 10) {
      resultArr[i]++;
      resultArr[i + 1] -= 10;
    }
  }
  if (resultArr[0] === 0) {
    resultArr.shift(1);
  }
  return resultArr.join('');
}

function addString3(num1, num2) {
  if (num1 === '0') return num2;
  if (num2 === '0') return num1;
  const maxLen = Math.max(num1.length, num2.length);
  if (num1.length < maxLen) {
    let tmp = maxLen - num1.length;
    while (tmp > 0) {
      num1 = `0${num1}`;
      tmp--;
    }
  } else if (num2.length < maxLen) {
    let tmp = maxLen - num2.length;
    while (tmp > 0) {
      num2 = `0${num2}`;
      tmp--;
    }
  }
  const arr1 = num1.split('');
  const arr2 = num2.split('');
  const resultArr = new Array(maxLen + 1).fill(0);
  for (let i = maxLen - 1; i >= 0; i--) {
    resultArr[i+1] = resultArr[i+1] + parseInt(arr1[i], 10) + parseInt(arr[2], 10);
    if (resultArr[i + 1] >= 10) {
      resultArr[i]++;
      resultArr[i + 1] -= 10;
    }
  }
  if (resultArr[0] === 0) {
    resultArr.shift(1);
  }
  return resultArr.join('');
}

// 414 get third max number in an array
function thirdMax(nums) {
  const tmp = Array.from(new Set(nums));
  if (tmp.length === 1) {
    return tmp[0];
  }
  if (tmp.length === 2) {
    return Math.max(tmp[0], tmp[1]);
  }
  tmp.sort((a, b) => b - a);
  return tmp[2];
}

// 398 找到两个字符串中不同的一个字符
function findTheDifference(s, t) {
  for (let i = 0; i < t.length; i++) {
    const item = t[i];
    const index = s.indexOf(item);
    if (index === -1) {
      return item;
    }
    if (index === 0) {
      s = s.slice(1);
    } else {
      s = s.slice(0, index) + s.slice(index + 1, s.length);
    }
  }
  return null;
}

function findTheDifference2(s, t) {
  const sArr = s.split('').sort();
  const tArr = t.split('').sort();
  for (let i = 0; i < t.length; i++) {
    if (sArr[i] !== tArr[i]) {
      return tArr[i];
    }
  }
  return null;
}

function findTheDifference3(s, t) {
  for (let item of s) {
    t = t.replace(item, '');
  }
  return t;
}

// 371 计算两个数的和
function getSum1(a, b){
  return a + b;
}

function getSum2(a, b) {
  if (a === 0 || b === 0) {
    return a || b;
  }
  let temp;
  while (b !== 0) {
    temp = a ^ b;
    b = (a & b) << 1;
    a = temp;
  }
  return a;
}

// 367 有效的完全平方数
function isPerfectSquare(num) {
  if (num === 0 || num === 1) {
    return true;
  }
  for (let i = 1; i < num; i++) {
    const product = i ** 2;
    if (product === num) {
      return true;
    }
    if (product > num) {
      return false;
    }
  }
  return false;
}

function isPerfectSquare2(num) {
  if (num === 0 || num === 1) {
    return false;
  }
  let start = 1;
  let end = Math.ceil(num / 2);
  let middle;
  do {
    middle = Math.ceil((start + end) / 2);
    const product = middle ** 2;
    if (product === num) {
      return true;
    }
    if (product < num) {
      start = middle;
    } else if (product > num) {
      end = middle;
    }
  } while (start + 1 < end);
  return false;
}

// 350 计算两个数组的交集
function interset(nums1, nums2) {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    const item = nums1[i];
    const indedx = nums2.indexOf(item);
    if (index > -1) {
      result.push(item);
      nums2.splice(index, 1);
    }
  }
}

// 349 计算两个数组的交集（去重）
function interaction(nums1, nums2) {
  const arr1 = Array.from(new Set(nums1));
  const arr2 = Array.from(new Set(nums2));
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    if (arr2.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

// 344 反转字符串
function reverseString(s) {
  const len = s.length;
  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - 1 - i]) {
      const tmp = s[i];
      s[i] = s[len - 1 - i];
      s[len - 1 - i] = tmp;
    }
  }
}

// 342 判断一个数是否是4的幂
function isPowerOfFour(num) {
  if (num <= 0) return false;
  while (num > 1) {
    const remain = num % 4;
    if (remain !== 0) return false;
    num /= 4;
  }
  return true;
}

function isNotFour(num) {
  const remian = num % 10;
  return (remain === 4 || remian === 6);
}

// 342 第二种方法
function isPowerOfFour2(num) {
  if (num === 1) return true;
  if (num <= 0 || !isNotFour(num)) return false;
  while (num > 1) {
    if (!isNotFour(num)) return false;
    const remain = num % 4;
    if (remain !== 0) return false;
    num /= 4;
  }
  return true;
}

// 326 判断是否是3的幂
function isPowerOfThree(n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  do {
    const remain = n % 3;
    if (remainder !== 0) return false;
    n /= 3;
  } while (n > 1);
  return true;
}

//  299 猜数字
// 考点：遍历字符串
function getHint(secret, guess) {
  let numA = 0;
  let numB = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      numA++;
      secret = secret.slice(0, i) + secret.slice(i + 1);
      guess = guess.slice(0, i) + guess.slice(i + 1);
      i--;
    }
  }
  for (let i = 0; i < secret.length; i++) {
    const index = guess.indexOf(secret[i]);
    if (index > -1) {
      guess = guess.slice(0, index) + guess.slice(index + 1);
      secret = secret.slice(0, index) + secret.slice(index + 1);
      i--;
      numB++;
    }
  }
  return `${numA}A${numB}B`;
}

// 292-winNim
function canWinNim(n) {
  return !(n === 0 || n % 4 === 0);
}

// 283-moveZeroes
function moveZeroes(nums) {
  let number = 0;
  for (let i = 0; i < nums.length;) {
    if (nums[i] === 0) {
      num.splice(i, 1);
      number++;
    } else {
      i++;
    }
  }
  const arr = new Array(number);
  arr.fill(0);
  nums.push(...arr);
}

function moveZeroes(nums) {
  let number = 0;
  const len = nums.length;
  for (let i = 0; i < len;) {
    if (i > len - number) {
      return;
    }
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      number++;
    } else {
      i++;
    }
  }
}

// 278-firstBadVersion
function isBadVersion(num) {
  return num >= 100;
}

function solution(n) {
  if (n === 1) {
    return;
  }
  let start = 0;
  let end = 0;
  let middle = Math.ceil((start + end) / 2);
  while (start < end - 1) {
    if (isBadVersion(middle)) {
      end = middle;
    } else {
      start = middle;
    }
    middle = Math.ceil((start + end) / 2);
  }
  return middle;
}

// 268 find missing number in an unordered array
function missingNumber(nums) {
  const len = nums.length;
  const defaultSum = ((1 + len) * len) / 2;
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  const result = defaultSum - sum;
  return result;
}

// 263-isUglyNumber 判断丑数（质因数只有235的就是丑数）
function isUgly(num) {
  if (num <=0 ) return false;
  if (num < 7) return true;
  if (num % 7 === 0 || num % 11 === 0 || num % 13 === 0 || num % 17 === 0) return false;
  while (num % 5 === 0  && num > 1) {
    num /= 5;
  }
  while (num % 3 === 0  && num > 1) {
    num /= 3;
  }
  while (num % 2 === 0  && num > 1) {
    num /= 2;
  }
  return num <= 1;
}

// 258 计算一个数的每个位置的和
function getSum(num) {
  let result = 0;
  while (num > 0) {
    const remainder = num % 10;
    result += remainder;
    num = (num - remainder) / 10;
  }
  return result;
}

function addDigiis(num) {
  if (num < 10) return num;
  do {
    num = getSum(num);
  } while (num >= 10);
  return num;
}

// 237-deleteNode
function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

// 231- 判断一个数字是否是2的幂
function isPowerOftwo(n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  while (n > 0) {
    if (n === 1) return true;
    if ((n % 2) !== 0) return false;
    n /= 2;
  }
  return null;
}

// 224-实现字符串计算器
// 这是辅助函数，计算处理后的字符串
function handleArithmetic(str) {
  // 首先把两个连续的减号变成加号
  str = str.replace(/\-\-+/g, '+');
  // 然后使用加号分割成数组，这样计算结果就是数组的和
  const srr = str.split('+');
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i].split('-');
    result += (parseInt(item[0], 10) || 0);
    // 然后把每一项用减号分割，计算每一项的结果
    if (item[1]) {
      for (let j = 1; j < item.length; j++) {
        result -= parseInt(item[j], 10);
      }
    }
  }
  return result;
}

function calculate(s) {
  // 去掉字符串中的全部空格
  s = s.replace(/(^\s*)|(\s+)|(\s*$)/g, '');
  // 从内向外去括号
  while (s.indexOf(')') !== -1) {
    const end = s.indexOf(')');
    const start = s.lastIndexOf('(', end);
    const middle = s.slice(start + 1, end);
    const result = String(handleArithmetics(middle));
    s = s.slice(0, start) + result + s.slice(end + 1);
  }
  return handleArithmetic(s);
}

// 219 判断数组中是否有重复元素（哈希表）
function containsNearbyDuplicate(nums, k) {
  const obj = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (obj[item] === undefined) {
      obj[item] = i;
    }
    else {
      if (i - obj[item] <= k) {
        return true;
      }
      obj[item] = i;
    }
  }
  return false;
}

// 217 判断数组中是否有重复元素
function containsDuplicate(nums) {
  const len = nums.length;
  if (len <= 1) return false;
  const newArr = [...new Set(nums)];
  return newArr.length !== len;
}

function containsDuplicate2(nums) {
  const obj = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (!obj[item]) {
      obj[item] = true;
    }
    else {
      return true;
    }
  }
  return false;
}
