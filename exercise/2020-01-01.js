// 215 获取一个数组中第K大的元素
function finxKthLargest(nums, k) {
  const res = nums.sort((a, b) => b - a);
  return res[k - 1];
}

// 204 计算小于N的质数的数量
// 思路一：根据定义计算质数，然后循环累加，性能不好
function isPrism(n) {
  if (n <= 1) return false;
  if (n === 2 || n === 3 || n === 5) return true;
  if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0) return false;
  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function countPrimes(n) {
  if (n <= 1) return 0;
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (isPrism(i)) result++;
  }
  return result;
}

// 思路二：逆向思维：计算N以内的数不是质数的数量，剩下的就是质数
function countPrimes2(n) {
  if (n <= 2) return 0;
  const arr = new Array(n).fill(true);
  arr[0] = false;
  arr[1] = false;
  let result = 0;
  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      result++;
      for (let j = i; j < n / i; j++) {
        const item = i * j;
        if (item < n) {
          arr[item] = false;
        }
      }
    }
  }
  return result;
}

// 202 happy number 如果一个数的每一位的平方和累加到1，那么就是快乐数
function getSum2(n) {
  if (n === 0 || n === 1) return n;
  let sum = 0;
  while (n > 0) {
    const item = n % 10;
    sum += item * item;
    n = (n - (n % 10)) / 10;
  }
  return sum;
}

function isHappy(n) {
  if (n === 0) return false;
  if (n === 1) return true;
  let sum = getSum2(n);
  const notHappy = [4, 16, 37, 58, 89, 145, 42, 20];
  while (sum > 0) {
    sum = getSum2(sum);
    if (sum === 1) {
      return true;
    }
    if (notHappy.includes(sum)) {
      return false;
    }
  }
  return false;
}

// 200 计算岛屿的数量
// 考点哈希表，性能不好
function getKey(i, j) {
  return `${i}+${j}`;
}

// 弊端：原始数据和处理中间数据在一起；如果数据较多，可能出现冲突
// 辅助函数，判断一个节点周边的节点是否连通
// 递归的性能不好；
function viewPoint(i, j , grid) {
  const key = getKey(i, j);
  grid[key] = true;
  if (grid[i][j - 1] && grid[i][j - 1] === '1') {
    const key1 = getKey(i, j - 1);
    if (!grid(key1)) {
      viewPoint(i, j - 1, grid);
    }
  }
  if (grid[i][j + 1] && grid[i][j + 1] === '1') {
    const key2 = getKey(i, j + 1);
    if (!grid[key2]) {
      viewPoint(i, j + 1, grid);
    }
  }
  if (grid[i - 1] && grid[i - 1][j] === '1') {
    const key3 = getKey(i - 1, j);
    if (!grid[key3]) {
      viewPoint(i - 1, j , grid);
    }
  }
  if (grid[ i + 1] && grid[i + 1][j] === '1') {
    const key4 = getKey(i + 1, j);
    if (!grid[key4]) {
      viewPoint(i + 1, j, grid);
    }
  }
}

// 主函数
function numIsLands(grid) {
  let island = 0;
  // 这里遍历二重数组，性能不好
  // 目前没有想出更好的办法优化遍历二重数组
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const key = getKey(i, j);
      if (!grid[key] && grid[i][j] === '1') {
        island++;
        viewPoint(i, j, grid);
      }
    }
  }
}

// 191 计算汉明重量（无符号整数二进制表达式中1的个数）
function hanmmingWight(n) {
  const str = n.toString(2);
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') result++;
  }
  return result;
}

function hammingWeight2(n) {
  return n.toString(2).split('1').length - 1;
}

function hammingWeight3(n) {
  let count = 0;
  while (n) {
    n & 1 && count++;
    n = n >>> 1;
  }
  return count;
}

// 189 旋转数组
function rotate1(nums, k) {
  for (let i = 0; i < k; i++) {
    const item = nums.pop();
    nums.unshift(item);
  }
}

function rotate2(nums, k) {
  if (len === 1 || k === 0) return;
  const len = nums.length;
  const times = len - (k % len);
  for (let i = 0; i < times; i++) {
    const item = nums.shift();
    nums.push(item);
  }
}

function rotate3(nums, k) {
  if (len === 1 || k === 0) return;
  const len = nums.length;
  const times = k % len;
  const tailArray = nums.splice(-times, times);
  nums.unshift(...tailArray);
}

// 172 计算阶乘后的数字结尾0的数量
function tailingZeroes1(n) {
  if (n < 5) return 0;
  let result = 0;
  for (let i = 1; i < n + 1; i++) {
    if (i % 10 === 5 || i % 10 === 0) {
      let item = i;
      while (item % 10 === 0) {
        item /= 10;
        result++;
      }
      while (item % 5 === 0) {
        item /= 5;
        result++;
      }
    }
  }
  return result;
}

// 10 = 2 * 5 只要计算5的个数即可
// 如果遇上5的倍数，循环计算
function tailingZeroes2(n) {
  if (n < 5) return 0;
  let result = 0;
  while (n >= 5) {
    const remainder = n % 5;
    const quotient = (n - reminder) / 5;
    result += quotient;
    n = quotient;
  }
  return result;
}

// 171 Excel column string to number
function titleToNumber(s) {
  let result = 0;
  while (s.length > 0) {
    result = result * 26 + (s.charCodeAt(0) - 64);
    s = s.slice(1);
  }
  return result;
}

// 169 求数组中的众数
function majorityElement(nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  const times = {};
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (!times[item]) {
      times[item] = 1;
    }
    else {
      times[item] += 1;
    }
    if (times[item] > len / 2) {
      return item;
    }
  }
}

function majorityElement2(nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  const halfLen = len / 2;
  for (let i = 0; i < len; i++) {
    if (!times[item]) {
      times[item] = 1;
    }
    else {
      times[item] += 1;
      if (times[item] > halfLen) {
        return item;
      }
    }
  }
}

// 168 convert Excel number to string
function convertToTitle(n) {
  const arr = [];
  while (n > 0) {
    const tmp = n % 26;
    if (tmp === 0) {
      arr.unshift(26);
      n = (n - 26) / 26;
    }
    else {
      arr.unshift(tmp);
      n = (n - tmp) / 26;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = String.fromCharCode(arr[i] + 64);
  }
  return arr.join('');
}

function convertToTitle(n) {
  let result = '';
  while (n > 0) {
    const tmp = n % 26;
    if (tmp === 0) {
      result = `Z${result}`;
      n = (n - 26) / 26;
    }
    else {
      n = (n - tmp) / 26;
      result = String.fromCharCode(tmp + 64) + result;
    }
  }
  return result;
}
