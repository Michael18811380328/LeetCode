import { myPow, myPow2 } from '../finished/50-myPow';

test('50-getpow', () => {
  expect(myPow(2.00000, 10)).toEqual(1024.00000);
  expect(myPow(2.10000, 3)).toEqual(9.26100);
  expect(myPow(2.00000, -2)).toEqual(0.25000);
});

test('50-getpow', () => {
  expect(myPow2(2.00000, 10)).toEqual(1024.00000);
  expect(myPow2(2.10000, 3)).toEqual(9.26100);
  expect(myPow2(2.00000, -2)).toEqual(0.25000);
  // 2.00000 -2147483648 这样计算会超时
});
