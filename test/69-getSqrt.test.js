import { getSqrt1, getSqrt2, getSqrt3 } from '../finished/69-getSqrt';

test('69-getSqrt-1', () => {
  expect(getSqrt1(4)).toEqual(2);
  expect(getSqrt1(8)).toEqual(2);
  expect(getSqrt1(27)).toEqual(5);
});


test('69-getSqrt-2', () => {
  expect(getSqrt2(4)).toEqual(2);
  expect(getSqrt2(8)).toEqual(2);
  expect(getSqrt2(27)).toEqual(5);
});


test('69-getSqrt-3', () => {
  expect(getSqrt3(4)).toEqual(2);
  expect(getSqrt3(8)).toEqual(2);
  expect(getSqrt3(27)).toEqual(5);
});
