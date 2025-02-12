import { convertToTitle, convertToTitle1 } from '../src/0168-convertToTitle';

test('168 excel convertToTitle', () => {
  const list = [
    [1, 'A'],
    [26, 'Z'],
    [27, 'AA'],
    [28, 'AB'],
    [52, 'AZ'],
    [701, 'ZY'],
  ];
  list.forEach((item) => {
    expect(convertToTitle(item[0])).toEqual(item[1]);
    expect(convertToTitle1(item[0])).toEqual(item[1]);
  });
});
