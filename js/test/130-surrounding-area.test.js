import { solve } from '../src/130-surrounding-area';

test('130-surrounding-area.test.js', () => {
  const arr1 = [['X', 'X', 'X'], ['X', 'O', 'O'], ['X', 'X', 'O'], ['X', 'O', 'X']];
  const arr2 = [['X', 'X', 'X', 'X'], ['X', 'O', 'O', 'X'], ['X', 'X', 'O', 'X'], ['X', 'O', 'X', 'X']];
  const arr3 = [['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'O', 'X', 'X']];
  solve(arr1);
  solve(arr2);
  expect(JSON.stringify(arr1)).toEqual(JSON.stringify([['X', 'X', 'X'], ['X', 'O', 'O'], ['X', 'X', 'O'], ['X', 'O', 'X']]));
  expect(JSON.stringify(arr2)).toEqual(JSON.stringify(arr3));
});
