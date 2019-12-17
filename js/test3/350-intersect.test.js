import { intersect } from '../finished3/350-intersect';

test('', () => {
  const nums1 = [1, 2, 2, 1]; const
    nums2 = [2, 2];
  expect(intersect(nums1, nums2)).toEqual([2, 2]);

  const nums3 = [4, 9, 5]; const
    nums4 = [9, 4, 9, 8, 4];
  expect(intersect(nums3, nums4)).toEqual([4, 9]);
});
