// 168 给定一个正整数，返回它在 Excel 表中相对应的列名称。
// A 1 + 64 = 65
// B 2
// Z 26
/**
 * @param {number} n
 * @return {string}
 */
// 方法一：68 ms, 在所有 javascript 提交中击败了 66.96%
function convertToTitle1(n) {
  const arr = [];
  while (n > 0) {
    const tmp = n % 26;
    if (tmp === 0) {
      arr.unshift(26);
      n = (n - 26) / 26;
    } else {
      arr.unshift(tmp);
      n = (n - tmp) / 26;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = String.fromCharCode(arr[i] + 64);
  }
  return arr.join('');
}
// 主要是Excel的编号原理是什么？？？
// 首先把数字通过26转化成数组，然后把数组处理（去掉0），转化成字符输出。

// 方法二：直接使用字符串拼接，不需要数组
// 52 ms, 在所有 javascript 提交中击败了99.11%
function convertToTitle(n) {
  let result = '';
  while (n > 0) {
    const tmp = n % 26;
    if (tmp === 0) {
      result = `Z${result}`;
      n = (n - 26) / 26;
    } else {
      n = (n - tmp) / 26;
      result = String.fromCharCode(tmp + 64) + result;
    }
  }
  return result;
}

export { convertToTitle, convertToTitle1 };
