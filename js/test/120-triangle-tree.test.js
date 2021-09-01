import { minimumTotal1, minimumTotal2, minimumTotal3 } from '../src/0120-triangle-tree';

test('minimumTotal', () => {
  const arr = [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3],
  ];
  expect(minimumTotal1(arr)).toEqual(11);
  expect(minimumTotal2(arr)).toEqual(11);
  expect(minimumTotal3(arr)).toEqual(11);
  expect(minimumTotal2([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3], [1, 2, 3, 18, 7]])).toEqual(13);
  expect(minimumTotal3([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3], [1, 2, 3, 18, 7]])).toEqual(13);
});
