import { sortColors, sortColors2 } from '../finished/75-sortColors.js';

test('75-sortColors.js', () => {
  // 思路一
  // expect(sortColors([0,1,2,1,1,0,0,2,2,1,0,0,1,0,0,0,1])).toEqual( [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2 ]);
  expect(sortColors([2,0,2,1,1,0])).toEqual([0,0,1,1,2,2]);
  expect(sortColors([2,1,0])).toEqual([0,1,2]);
  // expect(sortColors([2,2,2,2,2,0,1,2,1,1,0,0,0,0,1,1,0,2,1,1,1,2,2,0,2,2,1,0,0,1,0,0,0,1])).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
  expect(sortColors([0,0,0,0])).toEqual([0,0,0,0]);
  expect(sortColors([1,1,1,1])).toEqual([1,1,1,1]);
  expect(sortColors([2,2,2])).toEqual([2,2,2]);
  expect(sortColors([0,0,1])).toEqual([0,0,1]);
});