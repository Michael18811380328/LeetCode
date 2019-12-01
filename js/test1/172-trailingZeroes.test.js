import { trailingZeroes1, trailingZeroes2 } from '../finished1/172-trailingZeroes.js';

test('371-getSum.test.js', () => {
  // 思路一：适合计算小数，不好
  expect(trailingZeroes1(0)).toEqual(0);
  expect(trailingZeroes1(3)).toEqual(0);
  expect(trailingZeroes1(5)).toEqual(1);
  expect(trailingZeroes1(30)).toEqual(7);
  
  // 思路一：适合全部数字
  expect(trailingZeroes2(0)).toEqual(0);
  expect(trailingZeroes2(3)).toEqual(0);
  expect(trailingZeroes2(5)).toEqual(1);
  expect(trailingZeroes2(30)).toEqual(7);
  expect(trailingZeroes2(2147483647)).toEqual(536870902);
});
