import { decrypt } from '../src/1652-decrypt';

test('1752-decrypt', () => {
  expect(decrypt([5,7,1,4], 3)).toEqual([12,10,16,13]);
  expect(decrypt([1,2,3,4], 0)).toEqual([0,0,0,0]);
  expect(decrypt([2,4,9,3], -2)).toEqual([12,5,6,13]);
});
