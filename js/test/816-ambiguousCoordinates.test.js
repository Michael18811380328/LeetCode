import { ambiguousCoordinates } from '../src/816-ambiguousCoordinates';

test('816', () => {
  expect(ambiguousCoordinates('(00011)')).toEqual(["(0, 0.011)","(0.001, 1)"]);
  expect(ambiguousCoordinates("(123)")).toEqual(["(1, 2.3)", "(1, 23)","(1.2, 3)","(12, 3)"]);
  expect(ambiguousCoordinates("(100)")).toEqual(["(10, 0)"]);
});
