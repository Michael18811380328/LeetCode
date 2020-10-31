import { romanToInt, romanToInt2 } from '../finished/13-romanToInt';

test('13-romanNumber-to-int', () => {
  expect(romanToInt('MCMXCIV')).toEqual(1994);
  expect(romanToInt('I')).toEqual(1);
  expect(romanToInt('DCXXI')).toEqual(621);
  expect(romanToInt('MCMXCVI')).toEqual(1996);
  expect(romanToInt('MDCCCLXXXIV')).toEqual(1884);
  expect(romanToInt2('MCMXCIV')).toEqual(1994);
  expect(romanToInt2('I')).toEqual(1);
  expect(romanToInt2('DCXXI')).toEqual(621);
  expect(romanToInt2('MCMXCVI')).toEqual(1996);
  expect(romanToInt2('MDCCCLXXXIV')).toEqual(1884);
});
