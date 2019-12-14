import { calculate } from '../finished2/224-calculate';

test('224-calculate.js', () => {
  expect(calculate("1 + 1")).toEqual(2);
  expect(calculate(" 2-1 + 2 ")).toEqual(3);
  expect(calculate("(1+(4+5+2)-3)+(6+8)")).toEqual(23);
  // 特殊情况，连续减法
  expect(calculate("1 + 1 -0+33-0-      12+9 -0-0-0-1-9")).toEqual(22);
  // 特殊情况，--
  expect(calculate("2-(5-6)")).toEqual(3);
  // 特殊情况 负数
  expect(calculate("(5-(1+(5)))")).toEqual(-1);
  expect(calculate("1-(3+5-2+(3+19-(3-1-4+(9-4-(4-(1+(3)-2)-5)+8-(3-5)-1)-4)-5)-4+3-9)-4-(3+2-5)-10")).toEqual(-15);
  expect(calculate("(5-(-3)+8-(-2)-1)")).toEqual(17);
});