function lda(X, y) {
  const classes = [...new Set(y)];
  const meanOverall = X.reduce((acc, row) => acc.map((val, i) => val + row[i]), Array(X[0].length).fill(0)).map(val => val / X.length);
  const meanClasses = classes.map(c => X.filter((_, i) => y[i] === c).reduce((acc, row) => acc.map((val, i) => val + row[i]), Array(X[0].length).fill(0)).map(val => val / X.filter(label => label === c).length));

  let S_B = Array(X[0].length).fill(0).map(() => Array(X[0].length).fill(0));
  let S_W = Array(X[0].length).fill(0).map(() => Array(X[0].length).fill(0));

  classes.forEach((c, idx) => {
      const n_c = X.filter((_, i) => y[i] === c).length;
      const meanDiff = meanClasses[idx].map((val, i) => val - meanOverall[i]);
      for (let i = 0; i < meanDiff.length; i++) {
          for (let j = 0; j < meanDiff.length; j++) {
              S_B[i][j] += n_c * meanDiff[i] * meanDiff[j];
          }
      }
  });

  X.forEach((row, i) => {
      const meanDiff = row.map((val, j) => val - meanClasses[y[i]]);
      for (let j = 0; j < meanDiff.length; j++) {
          for (let k = 0; k < meanDiff.length; k++) {
              S_W[j][k] += meanDiff[j] * meanDiff[k];
          }
      }
  });

  // Calculate weights (not fully implemented, just a placeholder)
  const weights = S_B.map((row, i) => row[i] / S_W[i][i]);
  return weights;
}

const X = [[1, 2], [2, 3], [1.5, 2.5], [6, 7], [7, 8], [6.5, 7.5]];
const y = [0, 0, 0, 1, 1, 1];
const weights = lda(X, y);
console.log(`LDA weights: ${weights}`);
