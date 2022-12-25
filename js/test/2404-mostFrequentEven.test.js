import { mostFrequentEven } from '../src/2404-mostFrequentEven.js';

test('mostFrequentEven', () => {
  expect(mostFrequentEven([0,1,2,2,4,4,1])).toEqual(2);
  expect(mostFrequentEven([4,4,4,9,2,4,2,2])).toEqual(4);
  expect(mostFrequentEven([29,47,21,41,13,37,25,7])).toEqual(-1);
  expect(mostFrequentEven([1, 1, 1])).toEqual(-1);
  expect(mostFrequentEven([2, 1])).toEqual(2);
});
