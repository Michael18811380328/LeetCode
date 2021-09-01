import { checkPerfectNumber } from '../src/0507-checkPerfectNumber';

test('507', () => {
  expect(checkPerfectNumber(28)).toEqual(true);
  expect(checkPerfectNumber(6)).toEqual(true);
  expect(checkPerfectNumber(1)).toEqual(false);
  expect(checkPerfectNumber(12580)).toEqual(false);
});
