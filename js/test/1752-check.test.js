import { check } from '../src/1752-check';

test('1752-check', () => {
  expect(check([3,4,5,1,2])).toEqual(true);
  expect(check([2,1,3,4])).toEqual(false);
  expect(check([1,2,3])).toEqual(true);
  expect(check([1,1,1])).toEqual(true);
  expect(check([2,1])).toEqual(true);
});