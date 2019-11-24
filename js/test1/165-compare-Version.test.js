import { compareVersion, compareVersion2, compareVersion3 } from '../finished1/165-compare-Version';

test('165-compare-two-Version', () => {
  expect(compareVersion('1.0.1', '1')).toEqual(1);
  expect(compareVersion('0.1', '1.1')).toEqual(-1);
  expect(compareVersion('7.5.2.4', '7.5.3')).toEqual(-1);
  expect(compareVersion('1.01', '1.001')).toEqual(0);
  expect(compareVersion('1.0', '1.0.0')).toEqual(0);
});

test('165-compare-two-Version', () => {
  expect(compareVersion2('1.0.1', '1')).toEqual(1);
  expect(compareVersion2('0.1', '1.1')).toEqual(-1);
  expect(compareVersion2('7.5.2.4', '7.5.3')).toEqual(-1);
  expect(compareVersion2('1.01', '1.001')).toEqual(0);
  expect(compareVersion2('1.0', '1.0.0')).toEqual(0);
});

test('165-compare-two-Version', () => {
  expect(compareVersion3('1.0.1', '1')).toEqual(1);
  expect(compareVersion3('0.1', '1.1')).toEqual(-1);
  expect(compareVersion3('7.5.2.4', '7.5.3')).toEqual(-1);
  expect(compareVersion3('1.01', '1.001')).toEqual(0);
  expect(compareVersion3('1.0', '1.0.0')).toEqual(0);
});
