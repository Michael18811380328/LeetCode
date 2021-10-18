import { isPalindrome, isPalindrome2 } from '../src/0009-isPalindrome';

test('09-isPalindrome', () => {
  const testDatas = [
    {para: 0, res: true},
    {para: 1234321, res: true},
    {para: 560065, res: true},
    {para: 1, res: true},
    {para: 11, res: true},
    {para: -123, res: false},
    {para: 123, res: false},
  ];
  testDatas.forEach(data => {
    expect(isPalindrome(data.para)).toEqual(data.res);
    expect(isPalindrome2(data.para)).toEqual(data.res);
  });
});
