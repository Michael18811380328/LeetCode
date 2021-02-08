import { isUgly, isUgly2 } from '../src/263-ugly-number';

test('27-removeArrayElement', () => {
  expect(isUgly(-2)).toEqual(false);
  expect(isUgly(0)).toEqual(false);
  expect(isUgly(1)).toEqual(true);
  expect(isUgly(6)).toEqual(true);
  expect(isUgly(10)).toEqual(true);
  expect(isUgly(14)).toEqual(false);
  expect(isUgly(-2147483648)).toEqual(false);
});

test('27-removeArrayElement', () => {
  expect(isUgly2(-2)).toEqual(false);
  expect(isUgly2(0)).toEqual(false);
  expect(isUgly2(1)).toEqual(true);
  expect(isUgly2(6)).toEqual(true);
  expect(isUgly2(10)).toEqual(true);
  expect(isUgly2(14)).toEqual(false);
  expect(isUgly2(-2147483648)).toEqual(false);
});
