import { threeSum } from '../src/0015-threeSum';

describe('threeSum', () => {
  it('should return [] when input is empty', () => {
    expect(threeSum([])).toEqual([]);
  });
  it('should return [] when input is [-1, 0, 1, 2]', () => {
    expect(threeSum([-1, 0, 1, 2])).toEqual([[-1, 0, 1]]);
  });
  it('should return [[-1,-1,2],[-1,0,1]] when input is [-1, 0, 1, 2]', () => {
    expect(threeSum([-1, 0, 1, 2])).toEqual([[-1, 0, 1]]);
  });
  it('should return [[-4,2,2]] when input is [-4,-2,-2,0,1,2]', () => {
    expect(threeSum([-4, -2, -2, 0, 1, 2])).toEqual([[-2, 0, 2]]);
  });
  it('should return [[-2,1,1],[-2,0,2]] when input is [-2,0,0,2,1,1]', () => {
    expect(threeSum([-2, 0, 0, 2, 1, 1])).toEqual([[-2, 0, 2], [-2, 1, 1]]);
  });
});
