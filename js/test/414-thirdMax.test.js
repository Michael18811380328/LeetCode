import { thirdMax, thirdMax2 } from '../src/0414-thirdMax';

test('02-addTwoNumbers.js', () => {
  expect(thirdMax([1, 2, 3])).toEqual(1);
  expect(thirdMax([1, 2])).toEqual(2);
  expect(thirdMax([1, 2, 3, 2, 2])).toEqual(1);

  expect(thirdMax2([1, 2, 3])).toEqual(1);
  expect(thirdMax2([1, 2])).toEqual(2);
  expect(thirdMax2([1, 2, 3, 2, 2])).toEqual(1);
});
