import {
  singleNumber1, singleNumber2, singleNumber3, singleNumber4,
} from '../src/0136-singleNumber';

test('136-array has single number', () => {
  expect(singleNumber1([2])).toEqual(2);
  expect(singleNumber1([2, 2, 1])).toEqual(1);
  expect(singleNumber1([1, 2, 1, 4, 2])).toEqual(4);

  expect(singleNumber2([2])).toEqual(2);
  expect(singleNumber2([2, 2, 1])).toEqual(1);
  expect(singleNumber2([1, 2, 1, 4, 2])).toEqual(4);

  expect(singleNumber3([2])).toEqual(2);
  expect(singleNumber3([2, 2, 1])).toEqual(1);
  expect(singleNumber3([1, 2, 1, 4, 2])).toEqual(4);

  expect(singleNumber4([2])).toEqual(2);
  expect(singleNumber4([2, 2, 1])).toEqual(1);
  expect(singleNumber4([1, 2, 1, 4, 2])).toEqual(4);
});
