import { plusOne } from '../src/0066-arrayplusOne';

test('07-reverse-number', () => {
  expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  expect(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
});
