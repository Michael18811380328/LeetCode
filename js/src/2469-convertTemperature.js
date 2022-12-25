/**
 * @param {number} celsius
 * @return {number[]}
 * 摄氏度转换成华氏度和开氏度（简单）
 */
const convertTemperature = function(celsius) {
  return [celsius + 273.15, celsius * 1.80 + 32.00];
};

export { convertTemperature };
