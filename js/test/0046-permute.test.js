import { permute } from '../src/0046-permute';

describe('permute', () => {
  it('nums = [1, 2, 3]', () => {
    const nums = [1, 2, 3];
    const result = permute(nums);
    expect(result).toEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]);
  });
  it('nums = [0, 1]', () => {
    const nums = [0, 1];
    const result = permute(nums);
    expect(result).toEqual([[0, 1], [1, 0]]);
  });
});
