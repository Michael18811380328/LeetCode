import { calculateTax } from '../src/2303-calculateTax';

test('calculateTax', () => {
  expect(calculateTax([[3,50],[7,10],[12,25]], 0)).toEqual(0);
  expect(calculateTax([[3,50],[7,10],[12,25]], 10)).toEqual(2.65);
  expect(calculateTax([[1,0],[4,25],[5,50]], 2)).toEqual(0.25);
  expect(calculateTax([[10,10]], 5)).toEqual(0.5);
  expect(calculateTax([[10,10]], 20)).toEqual(1);
});
