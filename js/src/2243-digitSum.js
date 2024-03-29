/**
 * [2243] 计算字符串的数字和
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// Your runtime beats 24.84 % of javascript submissions
const digitSum = function(s, k) {
  let arr = s.split('').map((item) => parseInt(item, 10));
  while (arr.length > k) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += k) {
      let sum = 0;
      for (let j = i; j < i + k; j++) {
        if (arr[j] > -1) {
          sum += arr[j];
        }
      }
      newArr.push(sum);
    }
    arr = newArr.join('').split('').map((item) => parseInt(item, 10));
  }
  return arr.join('');
};

export { digitSum };
