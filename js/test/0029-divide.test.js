import { divide } from '../src/0029-divide';

test('divide', () => {
  expect(divide(7, -3)).toEqual(-2);
  expect(divide(10, 3)).toEqual(3);
});

describe('divide', () => {
  it('should return 3 when dividend is 10 and divisor is 3', () => {
    expect(divide(10, 3)).toBe(3);
  });
  it('should return 0 when dividend is 0 and divisor is 3', () => {
    expect(divide(0, 3)).toBe(0);
  });
  it('should return 1 when dividend is 10 and divisor is 10', () => {
    expect(divide(10, 10)).toBe(1);
  });
  it('should return -1 when dividend is -10 and divisor is 10', () => {
    expect(divide(-10, 10)).toBe(-1);
  });
  it('should return 0 when dividend is 1 and divisor is 0', () => {
    expect(divide(1, 0)).toBe(0);
  });
  it('should return 0 when dividend is 0 and divisor is 0', () => {
    expect(divide(0, 0)).toBe(0);
  });
  it('should return 0 when dividend is -1 and divisor is 0', () => {
    expect(divide(-1, 0)).toBe(0);
  });
  it('should return 0 when dividend is 0 and divisor is -1', () => {
    expect(divide(0, -1)).toBe(0);
  });
});

describe('divide edge cases', () => {
  const MAX_INT = 2 ** 31 - 1; // 2147483647
  const MIN_INT = -(2 ** 31); // -2147483648
  
  it('should handle maximum positive integer overflow', () => {
    expect(divide(MIN_INT, -1)).toBe(MAX_INT);
    expect(divide(MAX_INT, 1)).toBe(MAX_INT);
    expect(divide(MAX_INT, -1)).toBe(-MAX_INT);
  });
  
  it('should handle minimum negative integer overflow', () => {
    expect(divide(MIN_INT, 1)).toBe(MIN_INT);
    expect(divide(MIN_INT, -1)).toBe(MAX_INT);
  });
  
  it('should handle division by 1 and -1', () => {
    expect(divide(100, 1)).toBe(100);
    expect(divide(100, -1)).toBe(-100);
    expect(divide(-100, 1)).toBe(-100);
    expect(divide(-100, -1)).toBe(100);
  });
  
  it('should handle small numbers', () => {
    expect(divide(1, 2)).toBe(0);
    expect(divide(-1, 2)).toBe(0);
    expect(divide(1, -2)).toBe(0);
    expect(divide(-1, -2)).toBe(0);
  });
  
  it('should handle large divisor', () => {
    expect(divide(10, 100)).toBe(0);
    expect(divide(-10, 100)).toBe(0);
    expect(divide(10, -100)).toBe(0);
    expect(divide(-10, -100)).toBe(0);
  });
  
  it('should handle exact divisions', () => {
    expect(divide(15, 3)).toBe(5);
    expect(divide(-15, 3)).toBe(-5);
    expect(divide(15, -3)).toBe(-5);
    expect(divide(-15, -3)).toBe(5);
  });
  
  it('should handle remainder cases', () => {
    expect(divide(17, 5)).toBe(3);
    expect(divide(-17, 5)).toBe(-3);
    expect(divide(17, -5)).toBe(-3);
    expect(divide(-17, -5)).toBe(3);
  });
  
  it('should handle boundary values', () => {
    expect(divide(MAX_INT, MAX_INT)).toBe(1);
    expect(divide(MIN_INT, MIN_INT)).toBe(1);
    expect(divide(MAX_INT, MIN_INT)).toBe(0);
    expect(divide(MIN_INT, MAX_INT)).toBe(-1);
  });
});
