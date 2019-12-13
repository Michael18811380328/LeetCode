// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

// 注意：
// num1 和num2 的长度都小于 5100.
// num1 和num2 都只包含数字 0-9.
// num1 和num2 都不包含任何前导零。
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

// 思路一：实际工作中，使用大数计算，是最快的办法(不符合题目要求)
// 68 ms, 在所有 javascript 提交中击败了98.72%
function addStrings(num1, num2) {
  return String(BigInt(num1) + BigInt(num2));
}

// 思路二，转换成数组相加，然后计算结果转换成字符串
// 104 ms, 在所有 javascript 提交中击败了26.28% 性能不好
function addStrings2(num1, num2) {
  if (num1 === '0') return num2;
  if (num2 === '0') return num1;
  // 首先处理特殊情况
  let arr1 = num1.split('');
  let arr2 = num2.split('');
  let maxLen = Math.max(arr1.length, arr2.length);
  // 增加前导0（这里能否优化） 字符串前面加0比数组的性能更好
  if (arr1.length < maxLen) {
    let tmp = maxLen - arr1.length;
    let tmpArr = new Array(tmp).fill(0);
    arr1 = tmpArr.concat(arr1);
  }
  if (arr2.length < maxLen) {
    let tmp = maxLen - arr2.length;
    let tmpArr = new Array(tmp).fill(0);
    arr2 = tmpArr.concat(arr2);
  }
  let resultArr = new Array(maxLen + 1).fill(0);
  // 循环增加
  for (let i = maxLen - 1; i >= 0; i--) {
    resultArr[i + 1] = resultArr[i + 1] + parseInt(arr1[i]) + parseInt(arr2[i]);
    if (resultArr[i + 1] >= 10) {
      resultArr[i]++;
      resultArr[i + 1] -= 10;
    }
  }
  // 去掉前导0
  if (resultArr[0] === 0) {
    resultArr.shift(1);
  }
  return resultArr.join('');
}


// 方法三更好（可能网速较快）
// 72 ms, 在所有 javascript 提交中击败了92.35%
function addStrings3(num1, num2) {
  // 首先处理特殊情况
  if (num1 === '0') return num2;
  if (num2 === '0') return num1;
  // 字符串增加前导0
  const maxLen = Math.max(num1.length, num2.length);
  if (num1.length < maxLen) {
    let tmp = maxLen - num1.length;
    while (tmp > 0) {
      num1 = '0' + num1;
      tmp--;
    }
  }
  if (num2.length < maxLen) {
    let tmp = maxLen - num2.length;
    while (tmp > 0) {
      num2 = '0' + num2;
      tmp--;
    }
  }
  const arr1 = num1.split('');
  const arr2 = num2.split('');
  let resultArr = new Array(maxLen + 1).fill(0);
  // 循环增加
  for (let i = maxLen - 1; i >= 0; i--) {
    resultArr[i + 1] = resultArr[i + 1] + parseInt(arr1[i]) + parseInt(arr2[i]);
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

export { addStrings, addStrings2, addStrings3 };
