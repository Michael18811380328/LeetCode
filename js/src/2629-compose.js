/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function(functions) {
  if (!functions || functions.length === 0) {
    return function(x) {
      return x;
    };
  }
  // 把最后一个函数拿出来执行，然后递归前面的函数
  const fn = functions.pop();
  return function(x) {
    return compose(functions)(fn(x));
  };
};

export { compose };
