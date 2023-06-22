/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = function(arr, fn) {
  return arr.sort((a, b) => {
    return fn(a) > fn(b) ? 1 : -1;
  });
};

export { sortBy };
