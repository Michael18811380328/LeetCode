import { titleToNumber } from '../src/0171-Excel-titleToNumber';

test('171-Excel-titleToNumber', () => {
  expect(titleToNumber('A')).toEqual(1);
  expect(titleToNumber('AB')).toEqual(28);
  expect(titleToNumber('BA')).toEqual(53);
  expect(titleToNumber('ZY')).toEqual(701);
  expect(titleToNumber('AAA')).toEqual(703);
});
