import { intersection, intersection2 } from '../src/2248-intersection';

test('intersection', () => {
  expect(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]])).toEqual([3,4]);
  expect(intersection([[1,2,3],[4,5,6]])).toEqual([]);
  expect(intersection2([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]])).toEqual([3,4]);
  expect(intersection2([[1,2,3],[4,5,6]])).toEqual([]);
});
