import { intToRoman } from '../finished/12-intToRoman';

test('12-intToRoman.test', () => {
  expect(intToRoman(1)).toEqual('I');
  expect(intToRoman(3)).toEqual('III');
  expect(intToRoman(4)).toEqual('IV');
  expect(intToRoman(9)).toEqual('IX');
  expect(intToRoman(58)).toEqual('LVIII');
  expect(intToRoman(1994)).toEqual('MCMXCIV');
  expect(intToRoman(2427)).toEqual('MMCDXXVII');
  expect(intToRoman(3999)).toEqual('MMMCMXCIX');
});
