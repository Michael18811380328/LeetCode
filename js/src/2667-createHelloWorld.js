/**
 * @return {Function}
 */
// 返回固定字符串，简单
const createHelloWorld = function() {
   
  return function(...args) {
    return 'Hello World';
  };
};

/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/

export { createHelloWorld };
