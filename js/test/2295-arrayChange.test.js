import { arrayChange } from '../src/2295-arrayChange';

test('arrayChange', () => {
  expect(arrayChange([1,2], [[1,3],[2,1],[3,2]])).toEqual([2,1]);
  expect(arrayChange([1,2,4,6], [[1,3],[4,7],[6,1]])).toEqual([3,2,7,1]);
});
