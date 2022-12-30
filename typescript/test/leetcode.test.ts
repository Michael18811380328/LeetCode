import {canCompleteCircuit} from '../src/0134-canCompleteCircuit';
import {summaryRanges} from '../src/0228-summaryRanges';
import {moveZeroes} from '../src/0283-moveZeroes';
import {integerBreak} from '../src/0343-integerBreak';
import {intersection} from '../src/0349-intersection';
import {countSegments} from '../src/0434-countSegments';
import {findComplement1, findComplement2} from '../src/0476-findComplement';
import {maximumProduct} from '../src/0628-maximumProduct';
import {toGoatLatin} from '../src/0824-toGoatLatin';
import {validMountainArray} from '../src/0941-validMountainArray';
import {arrayPairSum} from '../src/0561-arrayPairSum';
import {findDisappearedNumbers} from '../src/0448-findDisappearedNumbers';
import {repeatedSubstringPattern} from '../src/0459-repeatedSubstringPattern';
import {check} from '../src/1752-check';
import {duplicateZeros} from '../src/1089-duplicateZeros';
import {sortByBits} from '../src/1356-sortByBits';
import {slowestKey} from '../src/1629-slowestKey';
import {trimMean} from '../src/1619-trimMean';
import {decodeMessage} from '../src/2325-decodeMessage';

test('134-canCompleteCircuit', () => {
  const gas = [1, 2, 3, 4, 5];
  const cost = [3, 4, 5, 1, 2];
  const result = 3;
  expect(canCompleteCircuit(gas, cost)).toBe(result);
  const gas1 = [2, 3, 4];
  const cost1 = [3, 4, 3];
  const result1 = -1;
  expect(canCompleteCircuit(gas1, cost1)).toBe(result1);
});

test('228-summaryRanges', () => {
  const numsList: number[][] = [
    [0, 1, 2, 4, 5, 7],
    [0, 2, 3, 4, 6, 8, 9],
    [],
    [-1],
    [0],
  ];
  const resList: string[][] = [
    ['0->2', '4->5', '7'],
    ['0', '2->4', '6', '8->9'],
    [],
    ['-1'],
    ['0'],
  ];
  for (let i = 0; i < numsList.length; i++) {
    expect(summaryRanges(numsList[i])).toStrictEqual(resList[i]);
  }
});

test('238-moveZeroes', () => {
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  expect(nums).toStrictEqual([1, 3, 12, 0, 0]);
});

test('343-integerBreak ', () => {
  expect(integerBreak(1)).toBe(1);
  expect(integerBreak(2)).toBe(1);
  expect(integerBreak(3)).toBe(2);
  expect(integerBreak(9)).toBe(27);
  expect(integerBreak(10)).toBe(36);
  expect(integerBreak(11)).toBe(54);
});

test('349-intersection', () => {
  const nums1 = [1, 2, 2, 1],
    nums2 = [2, 2];
  expect(intersection(nums1, nums2)).toStrictEqual([2]);
  const nums3 = [4, 9, 5],
    nums4 = [9, 4, 9, 8, 4];
  expect(intersection(nums3, nums4)).toStrictEqual([4, 9]);
});

test('434-countSegments', () => {
  expect(countSegments('')).toBe(0);
  expect(countSegments('Leetcode')).toBe(1);
  expect(countSegments('Hello, my name is John')).toBe(5);
});

test('434-countSegments', () => {
  expect(countSegments('')).toBe(0);
  expect(countSegments('Leetcode')).toBe(1);
  expect(countSegments('Hello, my name is John')).toBe(5);
});

test('459-repeatedSubstringPattern', () => {
  expect(repeatedSubstringPattern('a')).toEqual(false);
  expect(repeatedSubstringPattern('abab')).toEqual(true);
  expect(repeatedSubstringPattern('abcabcabcabc')).toEqual(true);
  expect(repeatedSubstringPattern('aba')).toEqual(false);
});

test('1752-check', () => {
  expect(check([3, 4, 5, 1, 2])).toEqual(true);
  expect(check([2, 1, 3, 4])).toEqual(false);
  expect(check([1, 2, 3])).toEqual(true);
  expect(check([1, 1, 1])).toEqual(true);
  expect(check([2, 1])).toEqual(true);
});

test('467-findComplement', () => {
  expect(findComplement1(5)).toBe(2);
  expect(findComplement1(1)).toBe(0);
  expect(findComplement2(5)).toBe(2);
  expect(findComplement2(1)).toBe(0);
});

test('561-arrayPairSum', () => {
  expect(arrayPairSum([])).toBe(0);
  expect(arrayPairSum([1, 4, 3, 2])).toBe(4);
  expect(arrayPairSum([6, 2, 6, 5, 1, 2])).toBe(9);
});

test('628-maximumProduct', () => {
  expect(maximumProduct([1, 2, 3])).toBe(6);
  expect(maximumProduct([1, 2, 3, 4])).toBe(24);
});

test('824-toGoatLati', () => {
  expect(toGoatLatin('I speak Goat Latin')).toBe(
    'Imaa peaksmaaa oatGmaaaa atinLmaaaaa'
  );
  expect(toGoatLatin('The quick brown fox jumped over the lazy dog')).toBe(
    'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa'
  );
});

test('941-validMountainArray', () => {
  expect(validMountainArray([2, 1])).toBe(false);
  expect(validMountainArray([3, 5, 5])).toBe(false);
  expect(validMountainArray([0, 3, 2, 1])).toBe(true);
  expect(validMountainArray([0, 1, 2, 3, 2, 3, 2, 1])).toBe(false);
});

test('1089-duplicateZeros', () => {
  const nums = [1, 0, 2, 3, 0, 4, 5, 0];
  expect(duplicateZeros(nums)).toBe(undefined);
  expect(nums).toStrictEqual([1, 0, 0, 2, 3, 0, 0, 4]);
  const nums2 = [1, 2, 3];
  expect(duplicateZeros(nums2)).toBe(undefined);
  expect(nums2).toStrictEqual([1, 2, 3]);
});

test('1356-sortByBits', () => {
  expect(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])).toStrictEqual([
    0, 1, 2, 4, 8, 3, 5, 6, 7,
  ]);
  expect(
    sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])
  ).toStrictEqual([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]);
  expect(sortByBits([10000, 10000])).toStrictEqual([10000, 10000]);
  expect(sortByBits([2, 3, 5, 7, 11, 13, 17, 19])).toStrictEqual([
    2, 3, 5, 17, 7, 11, 13, 19,
  ]);
  expect(sortByBits([10, 100, 1000, 10000])).toStrictEqual([
    10, 100, 10000, 1000,
  ]);
});

test('1629-slowestKey', () => {
  const releaseTimes = [9, 29, 49, 50];
  const keysPressed = 'cbcd';
  const res = 'c';
  expect(slowestKey(releaseTimes, keysPressed)).toStrictEqual(res);
});

test('1619-trimMean', () => {
  expect(
    trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3])
  ).toStrictEqual(2.0);
  expect(
    trimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0])
  ).toStrictEqual(4.0);
  expect(
    trimMean([
      6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4,
      3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4,
    ])
  ).toStrictEqual(4.777777777777778);
  expect(
    trimMean([
      9, 7, 8, 7, 7, 8, 4, 4, 6, 8, 8, 7, 6, 8, 8, 9, 2, 6, 0, 0, 1, 10, 8, 6,
      3, 3, 5, 1, 10, 9, 0, 7, 10, 0, 10, 4, 1, 10, 6, 9, 3, 6, 0, 0, 2, 7, 0,
      6, 7, 2, 9, 7, 7, 3, 0, 1, 6, 1, 10, 3,
    ])
  ).toStrictEqual(5.277777777777778);
  expect(
    trimMean([
      4, 8, 4, 10, 0, 7, 1, 3, 7, 8, 8, 3, 4, 1, 6, 2, 1, 1, 8, 0, 9, 8, 0, 3,
      9, 10, 3, 10, 1, 10, 7, 3, 2, 1, 4, 9, 10, 7, 6, 4, 0, 8, 5, 1, 2, 1, 6,
      2, 5, 0, 7, 10, 9, 10, 3, 7, 10, 5, 8, 5, 7, 6, 7, 6, 10, 9, 5, 10, 5, 5,
      7, 2, 10, 7, 7, 8, 2, 0, 1, 1,
    ])
  ).toStrictEqual(5.291666666666667);
});

test('448-findDisappearedNumbers', () => {
  expect(findDisappearedNumbers([4])).toStrictEqual([]);
  expect(findDisappearedNumbers([4, 3, 2, 1])).toStrictEqual([]);
  expect(findDisappearedNumbers([1, 1, 1, 1, 1])).toStrictEqual([2, 3, 4, 5]);
  expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toStrictEqual([
    5, 6,
  ]);
});

test('2325-decodeMessage', () => {
  expect(
    decodeMessage(
      'the quick brown fox jumps over the lazy dog',
      'vkbs bs t suepuv'
    )
  ).toBe('this is a secret');
  expect(
    decodeMessage(
      'eljuxhpwnyrdgtqkviszcfmabo',
      'zwx hnfx lqantp mnoeius ycgk vcnjrdb'
    )
  ).toBe('the five boxing wizards jump quickly');
});
