import { majorityElement } from '../finished2/229-majorityElement';

test('229', () => {
  expect(majorityElement([3, 2, 3])).toEqual([3]);
  expect(majorityElement([1, 1, 1, 3, 3, 2, 2, 2])).toEqual([1, 2]);
});
