import { majorityElement, majorityElement2 } from '../finished1/169-majorityElement';

test('169-get-majority-Element-in-an-array', () => {
  expect(majorityElement([9])).toEqual(9);
  expect(majorityElement([3, 2, 3])).toEqual(3);
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
});

test('169-get-majority-Element-in-an-array', () => {
  expect(majorityElement2([9])).toEqual(9);
  expect(majorityElement2([3, 2, 3])).toEqual(3);
  expect(majorityElement2([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
});
