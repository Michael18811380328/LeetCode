import $ from '../improve/improve.js';

// test-08 transform string
test('transform string to number', () => {
  expect($.transformString("   -42")).toBe(-42);
  expect($.transformString("4193 with words")).toBe(4193);
  expect($.transformString("-91283472332")).toBe(-2147483648);
  expect($.transformString("words and 987")).toBe(0);
  expect($.transformString("  -0012a42")).toBe(-12);
});

// test-22 generate
test('generate Parenthesis', () => {
  const arr = [
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
];
  // expect($.generateParenthesis(3)).toEqual(arr);
});

// test 48 transform image(matrix)
test('rotate matrix(image)', () => {
  const arr = 
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
  const result = 
  [
    [7,4,1],
    [8,5,2],
    [9,6,3]
  ];
  // expect($.rotateImage(arr)).toEqual(result);
});

test('rotatedDigits', () => {
  expect($.rotatedDigits(0)).toEqual(0);
  expect($.rotatedDigits(10)).toEqual(4);
  expect($.rotatedDigits(100)).toEqual(40);
  expect($.rotatedDigits(1000)).toEqual(316);
  expect($.rotatedDigits(5000)).toEqual(976);
  expect($.rotatedDigits(10000)).toEqual(2320);
});