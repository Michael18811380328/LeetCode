/**
 * [2103] 环和杆
 * @param {string} rings
 * @return {number}
 */
// 思路
// 1 新建一个空数组，表示初始的10个杆
// 2 遍历字符串，然后增加杆子的属性（这个需要分三种情况）
// 3 遍历数组，如果都有环，那么就是正确的
// Your runtime beats 96.15 % of javascript submissions
const countPoints = function(rings) {
  if (rings.length < 5) {
    return 0;
  }
  const poles = new Array(10);
  for (let i = 0; i < 10; i++) {
    poles[i] = {
      R: null,
      G: null,
      B: null,
    };
  }
  for (let i = 0; i < rings.length; i += 2) {
    const key = rings[i];
    const index = parseInt(rings[i + 1], 10);
    poles[index][key] = true;
  }
  let result = 0;
  poles.forEach((pole) => {
    if (pole.R && pole.G && pole.B) {
      result++;
    }
  });
  return result;
};

export { countPoints };
