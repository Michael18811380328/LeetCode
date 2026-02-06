import { sortArrayByParityII } from '../src/0922-sortArrayByParityII';

describe('sortArrayByParityII', () => {
  test('should sort array by parity II', () => {
    const input = [4, 2, 5, 7];
    const result = sortArrayByParityII(input);    
    for (let i = 0; i < result.length; i += 2) {
      expect(result[i] % 2).toBe(0);
    }    
    for (let i = 1; i < result.length; i += 2) {
      expect(result[i] % 2).toBe(1);
    }
  });

  test('should handle already sorted array', () => {
    const input = [2, 3, 4, 5];
    const result = sortArrayByParityII(input);
    
    for (let i = 0; i < result.length; i += 2) {
      expect(result[i] % 2).toBe(0);
    }
    for (let i = 1; i < result.length; i += 2) {
      expect(result[i] % 2).toBe(1);
    }
  });

  test('should handle array with all even numbers', () => {
    const input = [2, 4, 6, 8];
    const result = sortArrayByParityII(input);
    
    for (let i = 0; i < result.length; i += 2) {
      expect(result[i] % 2).toBe(0);
    }
    for (let i = 1; i < result.length; i += 2) {
      expect(result[i] % 2).toBe(0);
    }
  });

  test('should handle array with all odd numbers', () => {
    const input = [1, 3, 5, 7];
    const result = sortArrayByParityII(input);
    for (let i = 1; i < result.length; i += 2) {
      expect(result[i] % 2).toBe(1);
    }
  });

  test('should handle empty array', () => {
    const input = [];
    const result = sortArrayByParityII(input);
    expect(result).toEqual([]);
  });

  test('should handle single element array', () => {
    const input = [2];
    const result = sortArrayByParityII(input);
    expect(result).toEqual([2]);
  });
});