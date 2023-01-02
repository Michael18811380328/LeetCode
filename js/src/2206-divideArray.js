/**
 * @param {number[]} nums
 * @return {boolean}
 * [2206] 将数组划分成相等数对
 * 直接循环一次，然后记录出现的次数，最后次数都是偶数即可
 * Your runtime beats 42.16 % of javascript submissions
 */
const divideArray = function(nums) {
  const dict = {};
  nums.forEach((item) => {
    if (!dict[item]) {
      dict[item] = true;
    } else {
      delete dict[item];
    }
  });
  return Object.keys(dict).length === 0;
};

export { divideArray };
