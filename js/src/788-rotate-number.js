// 788. 旋转数字
// 我们称一个数 X 为好数, 如果它的每位数字逐个地被旋转 180 度后，我们仍可以得到一个有效的，且和 X 不同的数。要求每位数字都要被旋转。
// 如果一个数的每位数字被旋转以后仍然还是一个数字， 则这个数是有效的。0, 1, 和 8 被旋转后仍然是它们自己；2 和 5 可以互相旋转成对方；6 和 9 同理，除了这些以外其他的数字旋转以后都不再是有效的数字。
// 现在我们有一个正整数 N, 计算从 1 到 N 中有多少个数 X 是好数？

// 思路一：首先根据N（0，10000）判断是几位数，然后不同位数使用不同的方法（循环太多了）
// 88 ms, 在所有 javascript 提交中击败了62.86%

/**
 * @param {number} N
 * @return {number}
 */
function rotatedDigits(N) {
  let result = 0;
  const Arr1 = [2, 5, 6, 9];
  const Arr2 = [0, 1, 8];
  const Arr3 = [2, 5, 6, 9, 0, 1, 8];
  const Arr4 = [1, 8];

  if (N <= 10) {
    for (let i = 0; i <= N; i++) {
      if (Arr1.includes(i)) result++;
    }
  } else if (N <= 100) {
    result = 4;
    for (let i = 11; i <= N; i++) {
      const num2 = i % 10;
      const num1 = (i - num2) / 10;
      if (Arr4.includes(num1) && Arr1.includes(num2)) {
        result++;
      }
      if (Arr1.includes(num1) && Arr3.includes(num2)) {
        result++;
      }
    }
  } else if (N <= 1000) {
    result = 40;
    for (let i = 101; i <= N; i++) {
      const num3 = i % 10; // 个位
      const num2 = ((i % 100) - num3) / 10; // 十位
      const num1 = (i - num2 * 10 - num3) / 100; // 百位
      // TODO 下面三种情况使用一个IF判断
      // 百位是18, 十位是018，个位必须是2569
      if (Arr4.includes(num1) && Arr2.includes(num2) && Arr1.includes(num3)) {
        result++;
      }
      // 百位是18, 十位是2569，个位随便
      if (Arr4.includes(num1) && Arr1.includes(num2) && Arr3.includes(num3)) {
        result++;
      }
      // 百位是2569，十位个位随便
      if (Arr1.includes(num1) && Arr3.includes(num2) && Arr3.includes(num3)) {
        result++;
      }
    }
  } else if (N <= 10000) {
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

export { rotatedDigits };
