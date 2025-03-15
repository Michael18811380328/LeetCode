function linearRegression(x, y) {
  const n = x.length;
  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;

  for (let i = 0; i < n; i++) {
      sumX += x[i];
      sumY += y[i];
      sumXY += x[i] * y[i];
      sumX2 += x[i] * x[i];
  }

  const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const b = (sumY - m * sumX) / n;

  return { m, b };
}

const x = [1, 2, 3, 4, 5];
const y = [2, 3, 5, 7, 11];
const { m, b } = linearRegression(x, y);
console.log(`y = ${m.toFixed(2)}x + ${b.toFixed(2)}`);