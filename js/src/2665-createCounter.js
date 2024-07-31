// 模拟计数器，简单，实现加减存储
const createCounter = function(init) {
  this.init = init;
  this.val = init;
  this.increment = function() {
    this.val++;
    return this.val;
  };
  this.decrement = function() {
    this.val--;
    return this.val;
  };
  this.reset = function() {
    this.val = this.init;
    return this.val;
  };
  return this;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

export { createCounter };
