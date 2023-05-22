/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function(arr, fn) {
  const res = [];
  arr.forEach((item, index) => {
    if (fn(item, index)) res.push(item);
  });
  return res;
};

export { filter };
