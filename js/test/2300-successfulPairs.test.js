import { successfulPairs, successfulPairs2 } from '../src/2300-successfulPairs';

test('successfulPairs', () => {
  expect(successfulPairs([5,1,3], [1,2,3,4,5], 7)).toEqual([4,0,3]);
  expect(successfulPairs([3,1,2], [8,5,8], 16)).toEqual([2,0,2]);
  expect(successfulPairs([3,1,2,0], [8,5,8], 16)).toEqual([2,0,2,0]);
  expect(successfulPairs([4], [8,5,8], 16)).toEqual([3]);
  expect(successfulPairs([36,36,22,11,35,21,4,25,30,35,31,10,8,39,7,22,18,9,23,30,9,37,22,7,36,40,17,37,38,27,6,15,1,15,7,31,36,29,9,15,3,37,15,17,25,35,9,21,5,17,25,8,18,25,7,19,4,33,9,5,29,13,9,18,5,10,31,6,7,24,13,11,8,19,2],
    [30,11,5,20,19,36,39,24,20,37,33,22,32,28,36,24,40,27,36,37,38,23,39,11,40,19,37,32,25,29,28,37,31,36,32,40,38,22,17,38,20,33,29,17,36,33,35,25,28,18,17,19,40,27,40,28,40,40,40,39,17,34,36,11,22,29,22,35,35,22,18,34],
    135)).toEqual([72,72,71,68,72,71,29,71,72,72,72,68,68,72,59,71,71,68,71,72,68,72,71,59,72,72,71,72,72,72,51,71,0,71,59,72,72,72,68,71,0,72,71,71,71,72,68,71,46,71,71,68,71,71,59,71,29,72,68,46,72,71,68,71,46,68,72,51,59,71,71,68,68,71,0]);

  expect(successfulPairs2([5,1,3], [1,2,3,4,5], 7)).toEqual([4,0,3]);
  expect(successfulPairs2([3,1,2], [8,5,8], 16)).toEqual([2,0,2]);
  expect(successfulPairs2([3,1,2,0], [8,5,8], 16)).toEqual([2,0,2,0]);
  expect(successfulPairs2([4], [8,5,8], 16)).toEqual([3]);
  expect(successfulPairs2([36,36,22,11,35,21,4,25,30,35,31,10,8,39,7,22,18,9,23,30,9,37,22,7,36,40,17,37,38,27,6,15,1,15,7,31,36,29,9,15,3,37,15,17,25,35,9,21,5,17,25,8,18,25,7,19,4,33,9,5,29,13,9,18,5,10,31,6,7,24,13,11,8,19,2],
    [30,11,5,20,19,36,39,24,20,37,33,22,32,28,36,24,40,27,36,37,38,23,39,11,40,19,37,32,25,29,28,37,31,36,32,40,38,22,17,38,20,33,29,17,36,33,35,25,28,18,17,19,40,27,40,28,40,40,40,39,17,34,36,11,22,29,22,35,35,22,18,34],
    135)).toEqual([72,72,71,68,72,71,29,71,72,72,72,68,68,72,59,71,71,68,71,72,68,72,71,59,72,72,71,72,72,72,51,71,0,71,59,72,72,72,68,71,0,72,71,71,71,72,68,71,46,71,71,68,71,71,59,71,29,72,68,46,72,71,68,71,46,68,72,51,59,71,71,68,68,71,0]);
});
