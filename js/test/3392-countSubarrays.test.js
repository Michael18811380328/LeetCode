import { countSubarrays } from '../src/3392-countSubarrays';

describe('countSubarrays', () => {
  test('should count subarrays where 2*(nums[i] + nums[i+2]) equals nums[i+1]', () => {
    // 测试用例1: [1, 2, 3] -> 2*(1+3) = 8, 8 != 2 -> 0
    expect(countSubarrays([1, 2, 3])).toBe(0);
    // 测试用例2: [1, 4, 2] -> 2*(1+2) = 6, 6 != 4 -> 0
    expect(countSubarrays([1, 4, 2])).toBe(0);
    // 测试用例3: [1, 4, 1] -> 2*(1+1) = 4, 4 == 4 -> 1
    expect(countSubarrays([1, 4, 1])).toBe(1);
    // 测试用例4: [2, 4, 2] -> 2*(2+2) = 8, 8 != 4 -> 0
    expect(countSubarrays([2, 4, 2])).toBe(0);
  });

  test('should handle multiple valid subarrays', () => {    
    // [1, 4, 1, 2, 1] -> 检查 [1,4,1] 和 [4,1,2] 和 [1,2,1]
    // 第一个: 2*(1+1) = 4 == 4 -> 有效
    // 第二个: 2*(4+2) = 12 != 1 -> 无效
    // 第三个: 2*(1+1) = 4 != 2 -> 无效
    expect(countSubarrays([1, 4, 1, 2, 1])).toBe(1);
    // [1, 6, 2, 3, 4] -> 检查 [1,6,2] 和 [6,2,3] 和 [2,3,4]
    // 第一个: 2*(1+2) = 6 == 6 -> 有效
    // 第二个: 2*(6+3) = 18 != 2 -> 无效
    // 第三个: 2*(2+4) = 12 != 3 -> 无效
    expect(countSubarrays([1, 6, 2, 3, 4])).toBe(1);
  });

  test('should handle edge cases with small arrays', () => {
    // 数组长度小于3，应该返回0
    expect(countSubarrays([])).toBe(0);
    expect(countSubarrays([1])).toBe(0);
    expect(countSubarrays([1, 2])).toBe(0);
    // 数组长度正好为3
    expect(countSubarrays([1, 4, 1])).toBe(1);
    expect(countSubarrays([2, 4, 2])).toBe(0);
  });

  test('should handle arrays with zeros', () => {
    // [0, 0, 0] -> 2*(0+0) = 0 == 0 -> 有效
    expect(countSubarrays([0, 0, 0])).toBe(1);
    // [0, 2, 1] -> 2*(0+1) = 2 == 2 -> 有效
    expect(countSubarrays([0, 2, 1])).toBe(1);
    // [1, 0, 1] -> 2*(1+1) = 4 != 0 -> 无效
    expect(countSubarrays([1, 0, 1])).toBe(0);
  });

  test('should handle arrays with negative numbers', () => {
    // [-1, -4, -1] -> 2*(-1 + -1) = -4 == -4 -> 有效
    expect(countSubarrays([-1, -4, -1])).toBe(1);
    // [1, -4, 1] -> 2*(1+1) = 4 != -4 -> 无效
    expect(countSubarrays([1, -4, 1])).toBe(0);
    // [-2, 0, 2] -> 2*(-2+2) = 0 == 0 -> 有效
    expect(countSubarrays([-2, 0, 2])).toBe(1);
  });

  test('should handle large arrays', () => {
    // 创建一个大数组进行测试
    const largeArray = Array(1000).fill(1);
    // 在特定位置设置有效子数组
    largeArray[100] = 1;
    largeArray[101] = 4;
    largeArray[102] = 1;
    largeArray[500] = 2;
    largeArray[501] = 8;
    largeArray[502] = 2;
    expect(countSubarrays(largeArray)).toBe(2);
  });

  test('should handle consecutive valid subarrays', () => {
    // [1, 4, 1, 4, 1, 4, 1] -> 检查所有可能的子数组
    // 子数组1: [1,4,1] -> 有效
    // 子数组2: [4,1,4] -> 2*(4+4)=16 != 1 -> 无效
    // 子数组3: [1,4,1] -> 有效
    // 子数组4: [4,1,4] -> 无效
    // 子数组5: [1,4,1] -> 有效
    expect(countSubarrays([1, 4, 1, 4, 1, 4, 1])).toBe(3);
  });

  test('should handle complex mathematical cases', () => {
    // 测试各种数学组合
    // [3, 10, 2] -> 2*(3+2)=10 == 10 -> 有效
    expect(countSubarrays([3, 10, 2])).toBe(1);
    
    // [5, 20, 5] -> 2*(5+5)=20 == 20 -> 有效
    expect(countSubarrays([5, 20, 5])).toBe(1);
    
    // [7, 28, 7] -> 2*(7+7)=28 == 28 -> 有效
    expect(countSubarrays([7, 28, 7])).toBe(1);
    
    // [10, 40, 10] -> 2*(10+10)=40 == 40 -> 有效
    expect(countSubarrays([10, 40, 10])).toBe(1);
  });
});
