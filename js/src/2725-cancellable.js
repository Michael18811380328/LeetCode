/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function(fn, args, t) {
  // 0s 先执行一次函数
  fn(...args);
  // 间隔 t 执行一次函数
  const timer = setInterval(() => {
    fn(...args);
  }, t);
  // 返回取消定时器的函数
  return () => { clearInterval(timer); };
};

export { cancellable };
