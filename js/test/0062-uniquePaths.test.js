import { uniquePaths } from '../src/0062-uniquePaths';

describe('uniquePaths', () => {
  it('should return 1 for a 1x1 grid', () => {
    expect(uniquePaths(1, 1)).toBe(1);
  });

  it('should return 1 for a 1xN grid', () => {
    expect(uniquePaths(1, 5)).toBe(1);
  });

  it('should return 1 for a Nx1 grid', () => {
    expect(uniquePaths(5, 1)).toBe(1);
  });

  it('should return 2 for a 2x2 grid', () => {
    expect(uniquePaths(2, 2)).toBe(2);
  });

  it('should return 3 for a 3x2 grid', () => {
    expect(uniquePaths(3, 2)).toBe(3);
  });

  it('should return 3 for a 2x3 grid', () => {
    expect(uniquePaths(2, 3)).toBe(3);
  });

  it('should return 6 for a 3x3 grid', () => {
    expect(uniquePaths(3, 3)).toBe(6);
  });

  it('should return 28 for a 3x7 grid', () => {
    expect(uniquePaths(3, 7)).toBe(28);
  });
});

