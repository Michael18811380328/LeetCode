import { findSubstring } from '../src/0030-findSubstring';

describe('findSubstring', () => {
  it('should find the right substring', () => {
    expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9]);
    expect(findSubstring('barfoofoobarthefooman', ['bar', 'foo', 'the'])).toEqual([6, 9]);
    expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])).toEqual([]);
    expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good'])).toEqual([8]);
    expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best'])).toEqual([12]);
    expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'good', 'good'])).toEqual([0]);
  });
});
