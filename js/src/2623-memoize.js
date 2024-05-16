/**
 * @param {Function} fn
 * @return {Function}
 * 记忆函数，如果是相同的输入，不需要重复计算，直接从缓存中拿结果
 */
function memoize(fn) {
  const dict = {};
  return function(...args) {
    // 目前 key 只考虑一个函数名，不考虑不同函数名相同参数的情况，如需考虑 key = args + fnName
    // 这里需要判断 0 false 等值，本次题目纯数字只需考虑 0 即可
    if (!dict[args] && dict[args] !== 0) {
      dict[args] = fn(...args);
    }
    return dict[args];
  };
}

/**
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*   callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1
*/

export { memoize };
