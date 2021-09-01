import { reverse, reverse1 } from '../src/0007-reverse';

test('07-reverse-number', () => {
  expect(reverse(123)).toEqual(321);
  expect(reverse(-123)).toEqual(-321);
  expect(reverse(120)).toEqual(21);
  expect(reverse1(123)).toEqual(321);
  expect(reverse1(-123)).toEqual(-321);
  expect(reverse1(120)).toEqual(21);
});
