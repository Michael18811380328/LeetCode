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
