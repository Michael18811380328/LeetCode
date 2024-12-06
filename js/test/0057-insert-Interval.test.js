import { insert } from '../src/0057-insert-Interval';

test('57-insert-Interval', () => {
  expect(insert([[1, 3], [6, 9]], [2, 5])).toEqual([[1, 5], [6, 9]]);
  expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])).toEqual([[1, 2], [3, 10], [12, 16]]);
  // 特殊情况：集合是空
  expect(insert([], [5, 7])).toEqual([[5, 7]]);
  expect(insert([[1, 5]], [2, 7])).toEqual([[1, 7]]);
  expect(insert([[1, 5]], [1, 7])).toEqual([[1, 7]]);
  expect(insert([[1, 5]], [0, 3])).toEqual([[0, 5]]);
});
