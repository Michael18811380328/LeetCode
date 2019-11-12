import $ from '../improve/improve';

// test-08 transform string
// test('transform string to number', () => {
//   expect($.transformString('   -42')).toBe(-42);
//   expect($.transformString('4193 with words')).toBe(4193);
//   expect($.transformString('-91283472332')).toBe(-2147483648);
//   expect($.transformString('words and 987')).toBe(0);
//   expect($.transformString('  -0012a42')).toBe(-12);
// });

// test-22 generate
test('generate Parenthesis', () => {
  const arr = [
    '((()))',
    '(()())',
    '(())()',
    '()(())',
    '()()()',
  ];
  expect($.generateParenthesis(3)).toEqual(arr);
  // return null
});
