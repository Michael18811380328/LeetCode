import { threeSum } from '../src/0015-threeSum';

describe('threeSum', () => {
  it('should return [] when input is empty', () => {
    expect(threeSum([])).toEqual([]);
  });
  
  it('should return [] when input length is less than 3', () => {
    expect(threeSum([1])).toEqual([]);
    expect(threeSum([1, 2])).toEqual([]);
  });
  
  it('should return [] when all numbers are positive', () => {
    expect(threeSum([1, 2, 3])).toEqual([]);
  });
  
  it('should return [] when all numbers are negative', () => {
    expect(threeSum([-1, -2, -3])).toEqual([]);
  });
  
  it('should return [[-1, 0, 1]] when input is [-1, 0, 1, 2]', () => {
    expect(threeSum([-1, 0, 1, 2])).toEqual([[-1, 0, 1]]);
  });
  
  it('should handle duplicate triplets correctly', () => {
    expect(threeSum([-1, -1, 0, 0, 1, 1])).toEqual([[-1, 0, 1]]);
  });
  
  it('should handle multiple valid triplets', () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(result).toContainEqual([-1, -1, 2]);
    expect(result).toContainEqual([-1, 0, 1]);
    expect(result.length).toBe(2);
  });
  
  it('should handle zeros correctly', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
    expect(threeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  it('should return [[-2,1,1],[-2,0,2]] when input is [-2,0,0,2,1,1]', () => {
    expect(threeSum([-2, 0, 0, 2, 1, 1])).toEqual([[-2, 0, 2], [-2, 1, 1]]);
  });

  it('should handle edge case with all zeros', () => {
    expect(threeSum([0, 0, 0, 0, 0, 0])).toEqual([[0, 0, 0]]);
  });
  
  it('should handle case with no solution', () => {
    expect(threeSum([1, 2, -2, -1])).toEqual([]);
  });
});
