import { generateMatrix } from '../src/0059-generateMatrix-ii';

describe('59. 螺旋矩阵 II', () => {
  test('3', () => {
    expect(generateMatrix(3)).toEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
  });
  test('4', () => {
    expect(generateMatrix(4)).toEqual([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]);
  });
});
