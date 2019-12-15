// 258
// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
import { getSum, addDigits } from '../finished2/258-addDigits';

test('getSum', () => {
  expect(getSum(10)).toEqual(1);
  expect(getSum(12345)).toEqual(15);
});

test('addDigits', () => {
  expect(addDigits(38)).toEqual(2);
  expect(addDigits(12345)).toEqual(6);
});
