/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = function(arr1, arr2) {
  // 1 把 arr1 转换成 map
  const dict = {};
  arr1.forEach((item) => {
    dict[item.id] = item;
  });
  // 2 遍历 arr2 如果不重复，直接放入 map; 如果 ID 重复，那么 Object.assign() 合并属性
  arr2.forEach((item) => {
    const id = item.id;
    if (!dict[id]) {
      dict[id] = item;
    } else {
      dict[id] = { ...dict[id], ...item };
    }
  });
  // 3 遍历 map-key 转换成数组，然后根据 ID 排序输出
  let arr3 = [];
  for (const key in dict) {
    arr3.push(dict[key]);
  }
  arr3 = arr3.sort((a, b) => {
    return a.id > b.id ? 1 : -1;
  });
  return arr3;
};

// join([{"id": 1, "x": 2, "y": 3},{"id": 2, "x": 3, "y": 6}], [{"id": 2, "x": 10, "y": 20},{"id": 3, "x": 0, "y": 0}]) ===
// [{"id":1,"x":2,"y":3},{"id":2,"x":10,"y":20},{"id":3,"x":0,"y":0}]

export { join };
