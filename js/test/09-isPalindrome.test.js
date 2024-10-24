import { isPalindrome, isPalindrome2 } from '../src/0009-isPalindrome';

test('09-isPalindrome', () => {
  const testDatas = [
    // 测试用例：零
    {para: 0, res: true},
    // 测试用例：回文数
    {para: 1234321, res: true},
    {para: 560065, res: true},
    // 测试用例：个位数
    {para: 1, res: true},
    {para: 11, res: true},
    // 测试用例：负数
    {para: -123, res: false},
    // 测试用例：非回文数
    {para: 123, res: false},
    // 测试用例：回文数
    {para: 121, res: true},
  ];
  testDatas.forEach(data => {
    expect(isPalindrome(data.para)).toEqual(data.res);
    expect(isPalindrome2(data.para)).toEqual(data.res);
  });
});
