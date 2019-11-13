// 42 接雨水（困难）
// 思路一：正向计算（一层一层计算水量）较复杂
// 思路二：反向计算（阴影部分总面积-已有的深色的面积=雨水的面积） 72ms 94%
/**
 * @param {number[]} height
 * @return {number}
 */
function trapRain(height) {
  // 如果初始化是空数组，直接返回0
  if (height.length === 0) return 0;

  // 首先处理特殊值：如果开始和结尾是0， 那么直接去掉这部分项
  while (height[0] === 0) {
    height.shift();
  }
  while (height[height.length - 1] === 0) {
    height.pop();
  }
  // 如果处理完是一个空数组，直接返回
  if (height.length === 0) return 0;

  // 雨水的总量
  let sum = 0;

  // 获取最大值（峰值）
  const max = Math.max(...height);

  // 获取峰值数组
  const maxIndexArr = [];
  height.forEach((item, index) => {
    if (item === max) maxIndexArr.push(index);
  });

  // 多峰型处理, 需要计算第一个峰和最后一个峰之间的雨水(计算正确)
  if (maxIndexArr.length > 1) {
    let middleSum = 0;
    for (let i = maxIndexArr[0]; i < maxIndexArr[maxIndexArr.length - 1]; i++) {
      middleSum += height[i];
    }
    const rain = max * (maxIndexArr[maxIndexArr.length - 1] - maxIndexArr[0]) - middleSum;
    sum += rain;
  }

  // 计算开始到第一个峰左侧的水量
  let leftSum = 0;
  let leftRainSum = 0;
  for (let i = 0; i < maxIndexArr[0]; i++) {
    leftSum += height[i];
    if (i > 0 && height[i] < height[i - 1]) {
      height[i] = height[i - 1];
    }
    leftRainSum += height[i];
  }
  sum += leftRainSum - leftSum;

  // 计算最后一个峰右侧的水量
  let rightSum = 0;
  let rightRainSum = 0;
  for (let i = height.length - 1; i > maxIndexArr[maxIndexArr.length - 1]; i--) {
    rightSum += height[i];
    if (height[i] < height[i + 1]) {
      height[i] = height[i + 1];
    }
    rightRainSum += height[i];
  }
  sum += rightRainSum - rightSum;

  return sum;
}
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));  // 0 + 5 + 1 = 6
// console.log(trapRain([1,0,2,0,2,3])); // 3
// console.log(trapRain([3,0,2,0,2])); // 4
// console.log(trapRain([0,1,0,2,0,2,3,0,0,3,1,2,0,0,1,0])); // 6 + 3 + 3 = 12

export { trapRain };
