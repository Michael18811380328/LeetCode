import { deleteAndEarn } from '../src/0740-deleteAndEarn.js';

test('788-rotate-number', () => {
  expect(deleteAndEarn([4,4])).toEqual(8);
  expect(deleteAndEarn([3,4])).toEqual(4);
  expect(deleteAndEarn([2,2,3,3,3,4])).toEqual(9);
  expect(deleteAndEarn([3,4,2])).toEqual(6);
  expect(deleteAndEarn([3,4,2, 8, 20, 21,23,22,90,76, 234,355,27,2,3,6,9,8,356])).toEqual(857);
  expect(deleteAndEarn([10,8,4,2,1,3,4,8,2,9,10,4,8,5,9,1,5,1,6,8,1,1,6,7,8,9,1,7,6,8,4,5,4,1,5,9,8,6,10,6,4,3,8,4,10,8,8,10,6,4,4,4,9,6,9,10,7,1,5,3,4,4,8,1,1,2,1,4,1,1,4,9,4,7,1,5,1,10,3,5,10,3,10,2,1,10,4,1,1,4,1,2,10,9,7,10,1,2,7,5])).toEqual(338);
});
