// 罗马字符串转化成数值
// 思路：不同字符串对应不同的数值，这里使用一个Map存储对应表；
// 首先把字符串转化一个数值（while字符串长度大于0）
// 如果当前的值比后面的大，直接转化后加入数值；如果当前的值和后面的相等，直接加入这个数值（这两个情况属于一类）
// 如果当期的值比后面的小（XV）,使用后面的减去前面的值，字符串减去2；
// 168 ms, 在所有 JavaScript 提交中击败了 94.41% 的用户
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
    } else if (dir[s0] < dir[s1]) {
      result = result - dir[s0] + dir[s1];
      s = s.substring(2);
    }
  }
  return result;
}

// console.log(romanToInt('MCMXCIV')); // 1994
export { romanToInt };
