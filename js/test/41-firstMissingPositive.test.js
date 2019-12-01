import { firstMissingPositive } from '../finished/41-firstMissingPositive.js';

test('41-firstMissingPositive', () => {
  expect(firstMissingPositive([1,2,0])).toEqual(3);
  expect(firstMissingPositive([3,4,-1,1])).toEqual(2);
  expect(firstMissingPositive([7,8,9,11,12])).toEqual(1);
  expect(firstMissingPositive([0,2,2,1,1])).toEqual(3);
});
