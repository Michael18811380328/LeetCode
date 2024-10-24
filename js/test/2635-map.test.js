import { map } from '../src/2635-map';

test('mostFrequentEven', () => {
  let arr = [1,2,3];
  let fn = function plusone(n) { return n + 1; };
  expect(map(arr, fn)).toEqual([2,3,4]);
});
