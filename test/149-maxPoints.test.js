import { maxPoints, samePoints, pointLine, getKey, duplicatePoints } from '../finished/149-maxPoints';

test('test 149-max-points-in-one-line', () => {
  // 测试常规情况
  expect(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]])).toEqual(4);
  expect(maxPoints([[1, 1], [0, 0], [0, 0], [2, 1]])).toEqual(3);
  expect(maxPoints([[1, 1], [2, 2], [3, 3]])).toEqual(3);
  // 测试负数
  expect(maxPoints([[4, 0], [4, -1], [4, 5]])).toEqual(3);
  // 测试3个相同的点
  expect(maxPoints([[1, 1], [1, 1], [1, 1]])).toEqual(3);
  // 测试多个相同的点
  expect(maxPoints([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]])).toEqual(6);
  // 测试多个相同点的组合
  expect(maxPoints([[1, 1], [1, 1], [2, 2], [2, 2]])).toEqual(4);
  // 测试数字特别大，计算斜率错误的情况
  expect(maxPoints([[0, 0], [94911151, 94911150], [94911152, 94911151]])).toEqual(2);
});

test('test two points is same points', () => {
  expect(samePoints([1, 1], [3, 2])).toEqual(false);
  expect(samePoints([0, 0], [0, 0])).toEqual(true);
});

test('test three points is in one line', () => {
  expect(pointLine([0, 0], [1, 1], [3, 2])).toEqual(false);
  expect(pointLine([0, 0], [0, 0], [0, 0])).toEqual(true);
  expect(pointLine([0, 0], [1, 1], [2, 2])).toEqual(true);
});

test('test get a point key', () => {
  expect(getKey([1, 1])).toEqual('1+1');
  expect(getKey([0, 0])).toEqual('0+0');
});

test('test get a point key', () => {
  const obj1 = { '1+1': 3 };
  const points1 = [[1, 1]];
  expect(duplicatePoints([[1, 1], [1, 1], [1, 1]])).toEqual({ obj: obj1, points: points1 });
  const obj2 = { '1+1': 2, '2+2': 2 };
  const points2 = [[1, 1], [2, 2]];
  expect(duplicatePoints([[1, 1], [1, 1], [2, 2], [2, 2]])).toEqual({ obj: obj2, points: points2 });
});
