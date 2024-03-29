/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = function(A) {
  // 循环一次数组，把不是奇数的放在一个数组中，
  // 把不是偶数的放在另一个偶数中
  // 然后更换两个数值的位置，对应的数组处理
  const arr1 = [];
  const arr2 = [];
  const len = A.length;
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0 && A[i] % 2 === 1) {
      arr1.push(i);
    } else if (i % 2 === 1 && A[i] % 2 === 0) {
      arr2.push(i);
    }
  }
  // 调换数组中的位置
  const exchange = function(x, y) {
    const tmp = A[x];
    A[x] = A[y];
    A[y] = tmp;
  };
  for (let j = 0; j < arr1.length; j++) {
    const a = arr1[j]; const
      b = arr2[j];
    exchange(a, b);
  }
  return A;
};

export { sortArrayByParityII };
