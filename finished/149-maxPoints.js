// 149. 直线上最多的点数
// 给定一个二维平面，平面上有 n 个点，求最多有多少个点在同一条直线上。
// 输入: [[1,1],[2,2],[3,3]] 输出: 3
// 注意：点可以重复，点的坐标没有顺序，点的坐标可能超出JS数值计算最大值

// 思路1 正确
// 执行用时 : 96 ms , 在所有 javascript 提交中击败了 80.77%
// 首先把坐标数组去重并获取数量；然后使用两次循环获取两个点组成一条线
// 当前共线的数量是这两个点对应的属性和；再次遍历剩下的节点，如果共线，那么属性和加上第三个点的属性

// 辅助函数1：判断两点是否相同
function samePoints(point1, point2) {
  return (point1[0] === point2[0] && point1[1] === point2[1]);
}

// 辅助函数2：判断三点是否共线
function pointLine(point1, point2, point3) {
  // 如果三点中任意两点是同一个点，那么三点一定在一条线上
  if (samePoints(point1, point2) || samePoints(point1, point3) || samePoints(point2, point3)) {
    return true;
  }
  // 如果点太大，取余数10000（这里可以通过测试，有潜在问题）
  // 否则 [0,0],[94911151,94911150],[94911152,94911151] 这三个点计算错误
  // 解决1：计算斜率有很好的办法，可以避免溢出
  // 解决2：使用 BigInt 把普通数字转换成大数计算
  const num1 = (((point1[0] - point2[0]) % 10000) * ((point1[1] - point3[1]) % 10000));
  const num2 = (((point1[0] - point3[0]) % 10000) * ((point1[1] - point2[1]) % 10000));
  return num1 === num2;
}

// 辅助函数3：产生一个坐标对应的Key值
function getKey(point) {
  const x = point[0];
  const y = point[1];
  const key = `${x}+${y}`;
  return key;
}

// 辅助函数4: 去掉数组中的重复项；返回值是去重后的数组，以及数组元素重复次数对象
function duplicatePoints(points) {
  const obj = {};
  for (let i = 0; i < points.length;) {
    const key = getKey(points[i]);
    if (!obj[key]) {
      obj[key] = 1;
      i++;
    } else {
      obj[key]++;
      points.splice(i, 1);
    }
  }
  return { obj, points };
}

function maxPoints(points) {
  // defaultLength: 点原始的总个数
  const defaultLen = points.length;
  // 0、处理特殊0
  if (defaultLen === 0) {
    return 0;
  }

  // 1 数组坐标去重
  const { obj: numbers, points: newPoints } = duplicatePoints(points);
  const len = newPoints.length;
  // 去重后，如果只剩一个或者两个点，那么返回原始点的个数
  if (len === 1 || len === 2) {
    return defaultLen;
  }

  // 2 两次循环获取两个不重复的点点组成一条线
  let max = 2;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const item1 = newPoints[i];
      const item2 = newPoints[j];
      const key1 = getKey(item1);
      const key2 = getKey(item2);
      // 遍历的两个点，在一条直线上的总个数
      let res = numbers[key1] + numbers[key2];
      // 遍历剩下的点：如果剩下的点共线，那么把第三个点的属性加上去
      for (let k = j + 1; k < len; k++) {
        if (pointLine(item1, item2, newPoints[k])) {
          // 这三个点不共线
          const key3 = getKey(newPoints[k]);
          res += numbers[key3];
        }
      }
      max = Math.max(max, res);
    }
  }
  return max;
}

// 思路2 不正确
// 任意两点可以构成一条直线，然后可以判断剩下的点是否在这条只直线上
// 首先可以进行组合，Cn2 外循环和内循环分别获取两个点的全部组合。
// 循环内部，根据斜率 k = (y2-y1)/(x2-x1) 判断其他的点是否在这条直接上，获取数量
// 问题：如果有多个重复的点，计算错误：无法处理 11,11,22,22 这种情况。尝试使用另一个方案

function maxPointsError(points) {
  const len = points.length;
  // 处理0-1-2个点
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return 1;
  }
  if (len === 2) {
    return 2;
  }
  let result = 2;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let max = 2;
      // 1 如果两个点重复，max=3；剩下的继续遍历，如果和这两个点继续重复，max++
      // (points[j][1] === points[i][1]) && (points[j][0] === points[i][0])
      if (samePoints(points[i], points[j])) {
        max++;
        for (let k = j + 1; k < len; k++) {
          if ((samePoints(points[i], points[k]) || samePoints(points[j], points[k])) && points[k + 1]) {
            max++;
          } else if ((points[j][1] === points[k][1]) && (points[j][0] === points[k][0]) && points[k + 1]) {
            max++;
          }
        }
      }
      // 2 处理斜率不存在; 如果斜率不存在，即 (points[j][0] - points[i][0]) === 0
      else if (points[j][1] === points[i][1]) {
        // 如果后面的一个点和前面的任意一个重合，那么需要加一
        for (let k = j + 1; k < len; k++) {
          if (samePoints(points[i], points[k]) || samePoints(points[j], points[k]) || points[j][1] === points[k][1]) {
            max++;
          }
        }
      } else if (points[j][0] === points[i][0]) {
        // 如果后面的一个点和前面的任意一个重合，那么需要加一
        for (let k = j + 1; k < len; k++) {
          if (samePoints(points[i], points[k]) || samePoints(points[j], points[k]) || points[j][0] === points[k][0]) {
            max++;
          }
        }
      }
      // 3 斜率存在
      else {
        const slope1 = (points[j][1] - points[i][1]) / (points[j][0] - points[i][0]);
        // 遍历剩下的节点，如果Y值相同，就在一条线上；如果后面的一个点和前面的任意一个重合，那么需要加一
        for (let k = j + 1; k < len; k++) {
          if (samePoints(points[i], points[k]) || samePoints(points[j], points[k])) {
            max++;
          } else {
            const slope2 = (points[k][1] - points[i][1]) / (points[k][0] - points[i][0]);
            if (slope1 === slope2) {
              max++;
            }
          }
        }
      }
      result = max > result ? max : result;
    }
  }
  return result;
}

export { maxPointsError, maxPoints, samePoints, pointLine, getKey, duplicatePoints };
