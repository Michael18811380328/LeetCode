import { fourSum } from '../src/18-fourSum';

test('18-four-sum', () => {
  // 这个道题的答案不唯一，每个子数组内部顺序正确即可
  const result = [
    [-1, 0, 0, 1],
    [-1, -2, 1, 2],
    [-2, 0, 0, 2],
  ];
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual(result);
});
