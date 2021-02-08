// 43-multiply
// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 思路一：直接转换成整数处理（如果数字特别大那么计算错误）不符合题目要求
// 72 ms, 在所有 javascript 提交中击败了91.55%
function multiply(num1, num2) {
  return String(BigInt(num1) * BigInt(num2));
}
// 由于BigInt还在提案中，测试无法通过，使用时监测浏览器兼容

// 方法二：模拟乘法计算，一位一位相乘，然后把结果相加
// 120 ms, 在所有 javascript 提交中击败了43.11%

// 辅助函数
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

// 辅助函数
function handleSum(arr) {
  if (arr.length === 1) {
    return handleAdd(arr[0]);
  }
  // 1、获取最长的一个数组的长度，然后将其他的长度增加0
  let maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    const itemLen = arr[i].length;
    if (itemLen > maxLen) {
      maxLen = itemLen;
    }
  }
  // 2、其他数组的长度补0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < maxLen) {
      const dec = maxLen - arr[i].length;
      const newArr = new Array(dec).fill(0);
      arr[i] = newArr.concat(arr[i]);
    }
  }
  const result = new Array(maxLen).fill(0);
  // 3/加起来求和
  for (let i = 0; i < arr.length; i++) {
    for (let j = maxLen - 1; j >= 0; j--) {
      result[j] += arr[i][j];
    }
  }
  return handleAdd(result);
}

// 主函数
function multiply2(num1, num2) {
  // 首先处理特殊情况
  if (num1 === '0' || num2 === '0') return '0';
  if (num1 === '1') return num2;
  if (num2 === '1') return num1;
  // 判断大数和小数
  const bigNum = num1.length > num2.length ? num1 : num2;
  const smallNum = num1.length > num2.length ? num2 : num1;
  // 小数外循环，大数内循环，然后把结果加起来
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

export { multiply, multiply2 };
