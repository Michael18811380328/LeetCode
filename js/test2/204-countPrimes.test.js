import {
  isPrism, countPrimes, countPrimes2, countPrimes3,
} from '../finished2/204-countPrimes.js';

test('judge a number is Prism', () => {
  expect(isPrism(10)).toEqual(false);
  expect(isPrism(1)).toEqual(false);
  expect(isPrism(2)).toEqual(true);
  expect(isPrism(3)).toEqual(true);
  expect(isPrism(30)).toEqual(false);
});

test('count Primes1', () => {
  expect(countPrimes(1)).toEqual(0);
  expect(countPrimes(2)).toEqual(0);
  expect(countPrimes(3)).toEqual(1);
  expect(countPrimes(10)).toEqual(4);
  expect(countPrimes(50)).toEqual(15);
});

// 思路2
test('count Primes2', () => {
  expect(countPrimes2(1)).toEqual(0);
  expect(countPrimes2(2)).toEqual(0);
  expect(countPrimes2(3)).toEqual(1);
  expect(countPrimes2(10)).toEqual(4);
  expect(countPrimes2(50)).toEqual(15);
  expect(countPrimes2(1000)).toEqual(168);
  expect(countPrimes2(20000)).toEqual(2262);
  expect(countPrimes2(499979)).toEqual(41537);
});

// 思路3：分段函数
test('count Primes3', () => {
  expect(countPrimes3(1)).toEqual(0);
  expect(countPrimes3(2)).toEqual(0);
  expect(countPrimes3(3)).toEqual(1);
  expect(countPrimes3(10)).toEqual(4);
  expect(countPrimes3(50)).toEqual(15);
  expect(countPrimes3(1000)).toEqual(168);
  expect(countPrimes3(20000)).toEqual(2262);
});
