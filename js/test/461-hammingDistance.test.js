import { hammingDistance } from '../src/461-hammingDistance';

test('461-hammingDistance', () => {
  expect(hammingDistance(1, 4)).toEqual(2);
  expect(hammingDistance(26, 83)).toEqual(3);
});
