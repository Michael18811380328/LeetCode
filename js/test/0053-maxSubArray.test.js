import { maxSubArray } from '../src/0053-maxSubArray';

describe('maxSubArray', () => {
  it('nums = [-2,1,-3,4,-1,2,1,-5,4]', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
  });
  it('nums = [1]', () => {
    expect(maxSubArray([1])).toBe(1);
  });
  it('nums = [0]', () => {
    expect(maxSubArray([0])).toBe(0);
  });
  it('nums = [-1]', () => {
    expect(maxSubArray([-1])).toBe(-1);
  });
  it('nums = [-2, -3, 4]', () => {
    expect(maxSubArray([-2, -3, 4])).toBe(4);
  });
  it('nums = [-2, -1]', () => {
    expect(maxSubArray([-2, -1])).toBe(-1);
  });
  it('nums = [-1, -2]', () => {
    expect(maxSubArray([-1, -2])).toBe(-1);
  });
});
