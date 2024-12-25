import { search1, search2, search3 } from '../src/0033-search-rotate-array';

describe('search1', () => {
  it('search1([4, 5, 6, 7, 0, 1, 2], 0) should return 4', () => {
    expect(search1([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });
  it('search1([4, 5, 6, 7, 0, 1, 2], 3) should return -1', () => {
    expect(search1([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });
  it('search1([4, 5, 6, 7, 0, 1, 2], 100) should return -1', () => {
    expect(search1([4, 5, 6, 7, 0, 1, 2], 100)).toBe(-1);
  });
  it('search1([4, 5, 6, 7, 0, 1, 2], 2) should return 6', () => {
    expect(search1([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6);
  });
});

describe('search2', () => {
  it('search2([4, 5, 6, 7, 0, 1, 2], 0) should return 4', () => {
    expect(search2([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });
  it('search2([4, 5, 6, 7, 0, 1, 2], 3) should return -1', () => {
    expect(search2([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });
  it('search2([4, 5, 6, 7, 0, 1, 2], 100) should return -1', () => {
    expect(search2([4, 5, 6, 7, 0, 1, 2], 100)).toBe(-1);
  });
  it('search2([4, 5, 6, 7, 0, 1, 2], 2) should return 6', () => {
    expect(search2([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6);
  });
});

describe('search3', () => {
  it('search3([4, 5, 6, 7, 0, 1, 2], 0) should return 4', () => {
    expect(search3([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });
  it('search3([4, 5, 6, 7, 0, 1, 2], 3) should return -1', () => {
    expect(search3([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });
  it('search3([4, 5, 6, 7, 0, 1, 2], 100) should return -1', () => {
    expect(search3([4, 5, 6, 7, 0, 1, 2], 100)).toBe(-1);
  });
  it('search3([4, 5, 6, 7, 0, 1, 2], 2) should return 6', () => {
    expect(search3([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6);
  });
});
