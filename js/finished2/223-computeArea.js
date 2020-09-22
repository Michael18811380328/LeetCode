// 在二维平面上计算出两个由直线构成的矩形重叠后形成的总面积。
// 每个矩形由其左下顶点和右上顶点坐标表示，如图所示。

// 思路：首先计算两个矩形的面积 S1 S2（已经算出）
// 判断两个矩形是否有交集
// （一个矩形的右上角顶点是否小于另一个矩形的左下角顶点）或者取反
// 如果没有交集，直接返回两个矩形的面积的和；
// 如果有交集，那么返回两个矩形的面积的和减去交集的部分
// 如何计算两个矩形交集的面积？把四个顶点组成一个数组【x1, x2, x3, x4】[y1, y2, y3, y4],然后排序后取中间两个值的差
// 此时计算的面积就是矩形交集的面积

// 执行用时 : 164 ms 40.48%
// 内存消耗 : 44.2 MB

function computeArea(A, B, C, D, E, F, G, H) {
  const abs = Math.abs;
  const s1 = abs((C - A) * (D - B));
  const s2 = abs((G - E) * (H - F));
  const sum = s1 + s2;
  if (F > D || B > H || A > G || C < E) {
    // 两个矩形没有交集
    return sum;
  }
  if ((C < E && D < F) || (G < A && H < B) || (G < A && F > D) || (E > C && H < B)) {
    // 两个矩形没有交集，直接返回面积之和
    return sum;
  }
  // 两个矩形有交集，计算相交区域的面积
  const x = [A, C, E, G].sort((a, b) => a - b);
  const y = [B, D, F, H].sort((a, b) => a - b);
  const deltaX = x[2] - x[1];
  const deltaY = y[2] - y[1];
  const s3 = deltaX * deltaY;
  return sum - s3;
}

export { computeArea };
