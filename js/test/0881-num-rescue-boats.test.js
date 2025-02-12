import { numRescueBoats } from '../src/0881-num-rescue-boats';

test('881 numRescueBoats', () => {
  expect(numRescueBoats([1, 2], 3)).toEqual(1);
  expect(numRescueBoats([3, 2, 2, 1], 3)).toEqual(3);
  expect(numRescueBoats([3, 5, 3, 4], 5)).toEqual(4);
});
