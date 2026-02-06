import { isLongPressedName } from '../src/0925-isLongPressedName';

describe('isLongPressedName', () => {
  test('should return true for valid long pressed name', () => {
    expect(isLongPressedName('alex', 'aaleex')).toBe(true);
    expect(isLongPressedName('saeed', 'ssaaedd')).toBe(false);
    expect(isLongPressedName('leelee', 'lleeelee')).toBe(true);
  });

  test('should return true when names are identical', () => {
    expect(isLongPressedName('alex', 'alex')).toBe(true);
    expect(isLongPressedName('a', 'a')).toBe(true);
  });

  test('should return false when typed is shorter than name', () => {
    expect(isLongPressedName('alex', 'ale')).toBe(false);
    expect(isLongPressedName('hello', 'hell')).toBe(false);
  });

  test('should handle edge cases', () => {
    expect(isLongPressedName('a', 'aa')).toBe(true);
    expect(isLongPressedName('a', 'aaa')).toBe(true);
    expect(isLongPressedName('a', 'b')).toBe(false);
    expect(isLongPressedName('a', 'ab')).toBe(false);
  });

  test('should handle complex cases', () => {
    expect(isLongPressedName('vtkgn', 'vttkgnn')).toBe(true);
    expect(isLongPressedName('pyplrz', 'ppyypllr')).toBe(false);
    expect(isLongPressedName('dfuyalc', 'fuuyallc')).toBe(false);
  });

  test('should handle empty strings', () => {
    expect(isLongPressedName('', '')).toBe(true);
    expect(isLongPressedName('', 'a')).toBe(false);
    expect(isLongPressedName('a', '')).toBe(false);
  });
});