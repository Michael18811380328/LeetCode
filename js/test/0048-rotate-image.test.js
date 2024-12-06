import { rotateImage } from '../src/0048-rotate-image';

test('02-addTwoNumbers', () => {
  // rotate matrix length is three
  const test1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const result1 = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ];
  expect(rotateImage(test1)).toEqual(result1);
  // rotate matrix length is four
  const testmatrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ];
  const resultMatrix = [
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11],
  ];
  expect(rotateImage(testmatrix)).toEqual(resultMatrix);
});
