/*
 * [492] 构造矩形
 */
/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = function(area) {
  // 处理特殊情况： 0
  if (area === 0) {
    return [];
  }
  if (area < 4) {
    return [area, 1];
  }
  const large = Math.floor(Math.sqrt(area));
  for (let i = large; i > 1; i++) {
    if (area / i === Math.floor(area / i)) {
      const max = Math.max(i, area / i);
      const min = i === max ? area / i : i;
      return [max, min];
    }
  }
  return [area, 1];
  // 长度和宽度相等，那么就是 Math.sqrt(area) 这个值
  // 然后获取小于这个数的最大的整数，然后求余数
  // 如果余数是0， 那么这个数就是满足的最合适的数字
  // 否则 7 = 【7， 1】
};

export { constructRectangle };
