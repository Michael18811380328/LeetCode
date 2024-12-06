import { isValidSudoku, isDuplicate, isDuplicate2, isValidSudoku2, isValidHash } from '../src/0036-isValidSudoku';

test('36-isValidSudoku.test', () => {
  // 判断9个数中的元素是否重复
  expect(isDuplicate(['5', '3', '.', '.', '7', '.', '.', '.', '.'])).toEqual(true);
  expect(isDuplicate(['5', '3', '.', '.', '7', '.', '.', '.', '7'])).toEqual(false);
  expect(isDuplicate2(['5', '3', '.', '.', '7', '.', '.', '.', '.'])).toEqual(true);
  expect(isDuplicate2(['5', '3', '.', '.', '7', '.', '.', '.', '7'])).toEqual(false);

  const arr1 = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ];
  const arr2 = [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ];
  expect(isValidSudoku(arr1)).toEqual(true);
  expect(isValidSudoku(arr2)).toEqual(false);

  // 判断点的集合是否在共线，是否在一个小单元格内部，通过
  expect(isValidHash([[1, 1], [9, 8], [5, 6]])).toEqual(true);
  expect(isValidHash([[1, 1], [8, 8], [5, 1]])).toEqual(false);
  expect(isValidHash([[1, 1], [2, 2], [5, 5]])).toEqual(false);

  // 使用哈希计算，通过
  expect(isValidSudoku2(arr1)).toEqual(true);
  expect(isValidSudoku2(arr2)).toEqual(false);
});