import { generate } from '../src/118-pascals-triangle';

test('118-pascals-triangle', () => {
  const result1 = [
    [1],
  ];
  const result3 = [
    [1],
    [1, 1],
    [1, 2, 1],
  ];
  const result5 = [
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],

  ];
  expect(generate(1)).toEqual(result1);
  expect(generate(3)).toEqual(result3);
  expect(generate(5)).toEqual(result5);
});
