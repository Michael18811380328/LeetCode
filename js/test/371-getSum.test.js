import { getSum1, getSum2 } from '../src/371-getSum';

test('371-getSum.test.js', () => {
  expect(getSum1(1, 2)).toEqual(3);
  expect(getSum1(-2, 3)).toEqual(1);
});

test('371-getSum.test.js-2', () => {
  expect(getSum2(1, 2)).toEqual(3);
  expect(getSum2(-2, 3)).toEqual(1);
});
