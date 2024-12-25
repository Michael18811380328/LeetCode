import { searchRange1, searchRange2, searchRange3 } from '../src/0034-searchRange';

test('34-searchRange.test.js', () => {
  expect(searchRange1([1, 2, 2, 2, 2, 3], 2)).toEqual([1, 4]);
  expect(searchRange1([1, 3], 2)).toEqual([-1, -1]);
  expect(searchRange1([1, 3, 5, 6, 7], 3)).toEqual([1, 1]);

  expect(searchRange2([1, 2, 2, 2, 2, 3], 2)).toEqual([1, 4]);
  expect(searchRange2([1, 3], 2)).toEqual([-1, -1]);
  expect(searchRange2([1, 3, 5, 6, 7], 3)).toEqual([1, 1]);

  expect(searchRange3([1, 2, 2, 2, 2, 3], 2)).toEqual([1, 4]);
  expect(searchRange3([1, 3], 2)).toEqual([-1, -1]);
  expect(searchRange3([1, 3, 5, 6, 7], 3)).toEqual([1, 1]);
});
