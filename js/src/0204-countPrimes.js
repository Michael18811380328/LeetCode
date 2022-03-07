// 204
// 统计所有小于非负整数 n 的质数的数量。

// 示例:输入: 10 输出: 4
// 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

// 思路一：根据定义：首先循环一次，如果不能被小于自己的全部数整除，那么就是质数。可以写一个内部函数
// 注意：小于N
// 948 ms , 在所有 javascript 提交中击败了21.09% 性能非常差
function isPrism(n) {
  if (n <= 1) {
    return false;
  }
  // 884 ms, 在所有 javascript 提交中击败了26.30%
  // 使用235优化后，性能还是不好
  if (n === 2 || n === 3 || n === 5) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function countPrimes(n) {
  if (n <= 1) return 0;
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (isPrism(i)) {
      result++;
    }
  }
  return result;
}

// 思路三：先判断一下是否是1000内的数。然后循环这个质数数组；如果输入值大于这个数，返回当前的N
// 执行用时 :952 ms, 在所有 javascript 提交中击败了20.17%
function getPrism(n) {
  const arr = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
    53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
    151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
    211, 223, 227, 229, 233, 239, 241,
    251, 257, 263, 269, 271, 277, 281, 283, 293,
    307, 311, 313, 317, 331, 337, 347, 349,
    353, 359, 367, 373, 379, 383, 389, 397,
    401, 409, 419, 421, 431, 433, 439, 443, 449,
    457, 461, 463, 467, 479, 487, 491, 499,
    503, 509, 521, 523, 541, 547,
    557, 563, 569, 571, 577, 587, 593, 599,
    601, 607, 613, 617, 619, 631, 641, 643, 647,
    653, 659, 661, 673, 677, 683, 691,
    701, 709, 719, 727, 733, 739, 743,
    751, 757, 761, 769, 773, 787, 797,
    809, 811, 821, 823, 827, 829, 839,
    853, 857, 859, 863, 877, 881, 883, 887,
    907, 911, 919, 929, 937, 941, 947,
    953, 967, 971, 977, 983, 991, 997,
  ];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] > n) {
      return i;
    }
  }
  return len;
}

function isPrism3(n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2 || n === 3 || n === 5) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function countPrimes3(n) {
  if (n <= 2) return 0;
  let result = 0;
  if (n <= 1000) {
    result = getPrism(n - 1);
  } else {
    result = 168;
    for (let i = 1001; i < n; i++) {
      if (isPrism3(i)) {
        result++;
      }
    }
  }
  return result;
}

// 思路二：逆向思维计算n以内的数，哪些不是质数，剩下的就是质数
// 104 ms, 在所有 javascript 提交中击败了 91.48%
function countPrimes2(n) {
  if (n <= 2) return 0;
  const arr = new Array(n);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i < n; i++) {
    arr[i] = true;
  }
  let result = 0;
  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      for (let j = i; j < n / i; j++) {
        const item = i * j;
        if (item < n) {
          arr[item] = false;
        }
      }
      result++;
    }
  }
  return result;
}

export {
  isPrism, countPrimes, countPrimes2, countPrimes3,
};
