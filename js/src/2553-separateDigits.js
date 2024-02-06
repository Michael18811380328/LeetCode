/**
 * @param {number[]} nums
 * @return {number[]}
 */
const separateDigits = function(nums) {
  const result = [];
  nums.forEach((num) => {
    const tmp = String(num).split('').map((item) => Number(item));
    result.push(...tmp);
  });
  return result;
};

// console.log(separateDigits([13,25,83,77]), [1,3,2,5,8,3,7,7]);

export { separateDigits };
