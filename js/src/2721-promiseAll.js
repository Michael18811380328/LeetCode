/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 * 手写 Promise.all 函数：全部执行返程后返回，如果中间有一个错误，直接返回
 */
const promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
    const resArr = [];
    let resCount = 0;
    functions.forEach((fn, i) => {
      fn().then((r) => {
        resArr[i] = r;
        resCount = resCount + 1;
        if (resCount === functions.length) {
          resolve(resArr);
        }
      }).catch(reject);
    });
  });
};

/**
* const promise = promiseAll([() => new Promise(res => res(42))])
* promise.then(console.log); // [42]
*/

export { promiseAll };
