import { maxSubsequence } from '../src/2099-maxSubsequence';

test('1752-maxSubsequence', () => {
  expect(maxSubsequence([2,1,3,3], 2)).toEqual([3,3]);
  expect(maxSubsequence([-1,-2,3,4], 3)).toEqual([-1,3,4]);
  expect(maxSubsequence([3,4,3,3], 2)).toEqual([3,4]);
});
