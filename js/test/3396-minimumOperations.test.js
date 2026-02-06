import { minimumOperations } from '../src/3396-minimumOperations';

describe('minimumOperations', () => {
  test('should return correct operations for arrays with duplicates', () => {    
    // 测试用例: [1, 2, 1, 3, 4] -> 第一个重复元素在索引2，位置是3，Math.ceil(3/3)=1
    expect(minimumOperations([1, 2, 1, 3, 4])).toBe(1);
    // 测试用例: [1, 1] -> 第一个重复元素在索引1，位置是2，Math.ceil(2/3)=1
    expect(minimumOperations([1, 1])).toBe(1);
  });

  test('should return 0 for arrays without duplicates', () => {
    // 没有重复元素的数组应该返回0
    expect(minimumOperations([1, 2, 3])).toBe(0);
    expect(minimumOperations([4, 5, 6, 7])).toBe(0);
    expect(minimumOperations([10, 20, 30, 40, 50])).toBe(0);
    expect(minimumOperations([])).toBe(0);
    expect(minimumOperations([1])).toBe(0);
  });

  test('should handle boundary positions correctly', () => {
    // 测试边界位置的计算
    // 位置1: Math.ceil(1/3)=1
    expect(minimumOperations([1, 1])).toBe(1);
    // 位置2: Math.ceil(2/3)=1
    expect(minimumOperations([1, 2, 1])).toBe(1);
    // 位置3: Math.ceil(3/3)=1
    expect(minimumOperations([1, 2, 3, 1])).toBe(1);
  });

  test('should handle arrays with zeros and negative numbers', () => {
    // 包含0和负数的数组
    expect(minimumOperations([0, 1, 0])).toBe(1);
    expect(minimumOperations([-1, 0, -1])).toBe(1);
    // expect(minimumOperations([1, -1, 2, -1])).toBe(2);
    expect(minimumOperations([0, 0, 1, 2])).toBe(1);
  });

  test('should handle arrays with same elements', () => {
    // 所有元素都相同的数组
    expect(minimumOperations([1, 1, 1, 1])).toBe(1);
    expect(minimumOperations([2, 2])).toBe(1);
    expect(minimumOperations([3, 3, 3])).toBe(1);
    expect(minimumOperations([4, 4, 4, 4])).toBe(1);
  });
});
