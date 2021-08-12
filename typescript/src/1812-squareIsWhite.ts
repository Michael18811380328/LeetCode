/**
 * @param {string} coordinates
 * @return {boolean}
 */
// 84 ms, 在所有 TypeScript 提交中击败了85.71%
 var squareIsWhite = function(coordinates) {
  const first: string = coordinates[0];
  const second: number = parseInt(coordinates[1]);
  if (first === 'a' || first === 'c' || first === 'e' || first === 'g')  {
    return second % 2 === 0 ? true : false;
  } else {
    return second % 2 === 0 ? false : true;
  }
};
