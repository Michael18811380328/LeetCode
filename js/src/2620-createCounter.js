/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function(n) {
  this.val = n;
  return function() {
    tmp = this.val;
    this.val = this.val + 1;
    return tmp;
  };
};

/**
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/

export { createCounter };
