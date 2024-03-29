/**
 * @param {number[]} nums
 * @return {number[]}
 * 判断一个数组中有几个数对，有几个单独的数
 */
const numberOfPairs = function(nums) {
  const dict = {};
  let pair = 0;
  let remain = 0;
  nums.forEach((num) => {
    if (dict[num]) {
      dict[num] = null;
      pair++;
      remain--;
    } else {
      dict[num] = true;
      remain++;
    }
  });
  return [pair, remain];
};

export { numberOfPairs };
