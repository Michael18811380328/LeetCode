import { reverse, reverse1 } from '../src/0007-reverse';

test('0007-reverse-number', () => {
  expect(reverse(123)).toEqual(321);
  expect(reverse(-123)).toEqual(-321);
  expect(reverse(120)).toEqual(21);
  expect(reverse1(123)).toEqual(321);
  expect(reverse1(-123)).toEqual(-321);
  expect(reverse1(120)).toEqual(21);
});

test('0007-reverse overflow cases', () => {
  // 32位整数边界测试
  const MAX_INT = 2 ** 31 - 1; // 2147483647
  const MIN_INT = -(2 ** 31); // -2147483648
  
  // 反转后超过最大正数
  expect(reverse(1534236469)).toEqual(0);
  expect(reverse1(1534236469)).toEqual(0);
  
  // 反转后超过最小负数
  expect(reverse(-1534236469)).toEqual(0);
  expect(reverse1(-1534236469)).toEqual(0);
  
  // 边界值测试
  expect(reverse(MAX_INT)).toEqual(0);
  expect(reverse(MIN_INT)).toEqual(0);
  expect(reverse1(MAX_INT)).toEqual(0);
  expect(reverse1(MIN_INT)).toEqual(0);
  
  // 接近边界的值
  expect(reverse(2147483641)).toEqual(1463847412);
  expect(reverse(-2147483641)).toEqual(-1463847412);
  expect(reverse1(2147483641)).toEqual(1463847412);
  expect(reverse1(-2147483641)).toEqual(-1463847412);
});

test('0007-reverse edge cases', () => {
  // 0测试
  expect(reverse(0)).toEqual(0);
  expect(reverse1(0)).toEqual(0);
  
  // 单个数字
  expect(reverse(5)).toEqual(5);
  expect(reverse(-5)).toEqual(-5);
  expect(reverse1(5)).toEqual(5);
  expect(reverse1(-5)).toEqual(-5);
  
  // 以0结尾的数字
  expect(reverse(100)).toEqual(1);
  expect(reverse(-100)).toEqual(-1);
  expect(reverse1(100)).toEqual(1);
  expect(reverse1(-100)).toEqual(-1);
});
