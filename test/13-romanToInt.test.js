import { romanToInt } from '../finished/13-romanToInt';

test('13-romanNumber-to-int', () => {
  expect(romanToInt('MCMXCIV')).toEqual(1994);
  expect(romanToInt('I')).toEqual(1);
});
