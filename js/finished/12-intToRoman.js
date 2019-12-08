// 12-罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

// 这几种情况特殊处理
// 不断取余数，然后存放在数组中，最后遍历数组，转化成字符串输出
// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。


// 148 ms, 在所有 javascript 提交中击败了94.84%
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
  // 1994 [ 1, 1, 4, 1, 4, 0, 4 ] M CM XC IV
  // if null , ''
  let result = '';

  // 1000
  while (res[0] > 0) {
    result += 'M';
    res[0]--;
  }

  // 100
  if (res[2] === 4) {
    result = res[1] === 1 ? `${result}CM` : `${result}CD`;
  } else {
    // while (res[1] > 0) {
    //   result += 'D';
    //   res[1]--;
    // }
    if (res[1] === 1) {
      result += 'D';
    }
    while (res[2] > 0) {
      result += 'C';
      res[2]--;
    }
  }

  // 10
  if (res[4] === 4) {
    result = res[3] === 1 ? `${result}XC` : `${result}XL`;
  } else {
    // while (res[3] > 0) {
    //   result += 'L';
    //   res[3]--;
    // }
    if (res[3] === 1) {
      result += 'L';
    }
    while (res[4] > 0) {
      result += 'X';
      res[4]--;
    }
  }

  // 1
  if (res[6] === 4) {
    result = res[5] === 1 ? `${result}IX` : `${result}IV`;
  } else {
    // while (res[5] > 0) {
    //   result += 'V';
    //   res[5]--;
    // }
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

export { intToRoman };
