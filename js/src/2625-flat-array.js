/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 * 思路1：如果嵌套深度是990，某一项特别深，其他的都正常，那么会超时，时间复杂度为 O(n^2)，还有优化空间
 */
const flat1 = function (arr, n) {
  if (n === 0) return arr;
  let result = [...arr];
  let times = n;
  while (times > 0) {
    const newResult = [];
    result.forEach((item) => {
      if (Array.isArray(item)) {
        newResult.push(...item);
      } else {
        newResult.push(item);
      }
    });
    times = times - 1;
    result = newResult;
  }
  return result;
};

// 思路2：如果已经是数字，应该直接返回，不要重新拼接数组，原地算法，可以满足需求，但是时间复杂度为 O(n^2)，还有优化空间
const flat2 = function (arr, n) {
  while (n > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const len = arr[i].length;
        arr.splice(i, 1, ...arr[i]);
        i = i + len - 1;
      }
    }
    n = n - 1;
  }
  return arr;
};

// 思路3，直接递归某一项层级很深的情况，其他的数字遍历一次即可
const flat3 = function (arr, n) {
  const res = [];
  const _flat = (nums, depth) => {
    for (const num of nums) {
      if (Array.isArray(num) && depth > 0) {
        _flat(num, depth - 1);
      } else {
        res.push(num);
      }
    }
  };
  _flat(arr, n);
  return res;
};

// const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// console.log(flat(arr, 0));
// console.log(flat(arr, 1));
// console.log(flat(arr, 2));

export { flat1, flat2, flat3 };
