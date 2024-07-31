/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  const resultObj = {};
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    const key = fn(item);
    if (!resultObj[key]) {
      resultObj[key] = [];
    }
    resultObj[key].push(item);
  }
  return resultObj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
