import { isMatch } from './10-isMatch';

test('10-isMatch', () => {
  expect(isMatch('', 'a')).toEqual(false);
  // expect(isMatch('aa', '')).toEqual(true);
  // expect(isMatch('aa', 'a')).toEqual(false);
  // expect(isMatch('aa', 'a*')).toEqual(true);
  // expect(isMatch('ab', '.*')).toEqual(true);
  // expect(isMatch('aab', 'c*a*b')).toEqual(true);
  // expect(isMatch('mississippi', 'mis*is*p*.')).toEqual(false);
  // expect(isMatch('aaa', 'a.a')).toEqual(true);
  // expect(isMatch('aaa', 'a*a')).toEqual(true); // 这种需要从后向前匹配
  // 如果是*，那么需要先匹配后面的几位
  // 优先匹配字符 然后是。 最后是*
});
