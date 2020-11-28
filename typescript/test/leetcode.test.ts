import { canCompleteCircuit } from '../src/134-canCompleteCircuit';
import { summaryRanges } from '../src/228-summaryRanges';
import { moveZeroes } from '../src/283-moveZeroes';
import { integerBreak } from '../src/343-integerBreak';
import { intersection } from '../src/349-intersection';
import { countSegments } from '../src/434-countSegments';
import { findComplement1, findComplement2 } from '../src/476-findComplement';
import { maximumProduct } from '../src/628-maximumProduct';
import { toGoatLatin } from '../src/824-toGoatLatin';
import { validMountainArray } from '../src/941-validMountainArray';
import { duplicateZeros } from '../src/1089-duplicateZeros';
import { arrayPairSum } from '../src/561-arrayPairSum';
import { sortByBits } from '../src/1356-sortByBits';
import { findDisappearedNumbers } from '../src/448-findDisappearedNumbers';

// 下面测试脚本按照JS语法写，没有完全按照类型监测写
test('134-canCompleteCircuit', () => {
  const gas = [1,2,3,4,5];
  const cost = [3,4,5,1,2];
  const result = 3;
  expect(canCompleteCircuit(gas, cost)).toBe(result);
  const gas1 = [2,3,4];
  const cost1 = [3,4,3];
  const result1 = -1;
  expect(canCompleteCircuit(gas1, cost1)).toBe(result1);
});

test('228-summaryRanges', () => {
  const nums1 = [0,1,2,4,5,7];
  const res1 = ["0->2","4->5","7"];
  expect(summaryRanges(nums1)).toStrictEqual(res1);

  const nums2 = [0,2,3,4,6,8,9];
  const res2 = ["0","2->4","6","8->9"]
  expect(summaryRanges(nums2)).toStrictEqual(res2);

  const nums3:number[] = [];
  const res3:number[] = [];
  expect(summaryRanges(nums3)).toStrictEqual(res3);
  
  const nums4 = [-1]
  const res4 = ["-1"]
  expect(summaryRanges(nums4)).toStrictEqual(res4);

  const nums5 = [0]
  const res5 = ["0"]
  expect(summaryRanges(nums5)).toStrictEqual(res5);  
});

test('238-moveZeroes', () => {
  const nums = [0,1,0,3,12];
  moveZeroes(nums);
  expect(nums).toStrictEqual([1,3,12,0,0]);
});

test('343-integerBreak ', () => {
  // 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
  expect(integerBreak(2)).toBe(1);
  expect(integerBreak(10)).toBe(36);
});

test('349-intersection', () => {
  // 给定两个数组，编写一个函数来计算它们的交集。
  const nums1 = [1,2,2,1], nums2 = [2,2];
  expect(intersection(nums1, nums2)).toStrictEqual([2]);
  const nums3 = [4,9,5], nums4 = [9,4,9,8,4];
  expect(intersection(nums3, nums4)).toStrictEqual([4,9]);
});

test('434-countSegments', () => {
  expect((countSegments("Hello, my name is John"))).toBe(5);
});

test('467-findComplement', () => {
  expect((findComplement1(5))).toBe(2);
  expect((findComplement1(1))).toBe(0);
  expect((findComplement2(5))).toBe(2);
  expect((findComplement2(1))).toBe(0);
});

test('arrayPairSum', () => {
  expect(arrayPairSum([1,4,3,2])).toBe(4);
  expect(arrayPairSum([6,2,6,5,1,2])).toBe(9);
});

test('628-maximumProduct', () => {
  // 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
  expect((maximumProduct([1,2,3]))).toBe(6);
  expect((maximumProduct([1,2,3,4]))).toBe(24);
});

test('824-toGoatLati', () => {
  expect((toGoatLatin("I speak Goat Latin"))).toBe("Imaa peaksmaaa oatGmaaaa atinLmaaaaa");
  expect((toGoatLatin("The quick brown fox jumped over the lazy dog"))).toBe("heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa");
});

test('941-validMountainArray', () => {
  expect(validMountainArray([2,1])).toBe(false);
  expect(validMountainArray([3,5,5])).toBe(false);
  expect(validMountainArray([0,3,2,1])).toBe(true);
});

test('duplicateZeros', () => {
  let nums = [1,0,2,3,0,4,5,0];
  expect(duplicateZeros(nums)).toBe(undefined);
  expect(nums).toStrictEqual([1,0,0,2,3,0,0,4]);
  let nums2 = [1,2,3];
  expect(duplicateZeros(nums2)).toBe(undefined);
  expect(nums2).toStrictEqual([1,2,3]);
});

test('sortByBits', () => {
  expect(sortByBits([0,1,2,3,4,5,6,7,8])).toStrictEqual([0,1,2,4,8,3,5,6,7]);
  expect(sortByBits([1024,512,256,128,64,32,16,8,4,2,1])).toStrictEqual([1,2,4,8,16,32,64,128,256,512,1024]);
  expect(sortByBits([10000,10000])).toStrictEqual([10000,10000]);
  expect(sortByBits([2,3,5,7,11,13,17,19])).toStrictEqual([2,3,5,17,7,11,13,19]);
  expect(sortByBits([10,100,1000,10000])).toStrictEqual([10,100,10000,1000]);
});

test('448-findDisappearedNumbers', () => {
  // 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
  // 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
  // 这里需要改 ts 编译的配置
  expect((findDisappearedNumbers([4,3,2,7,8,2,3,1]))).toStrictEqual([5,6]);
});

// 树暂时不做单元测试
// 107 Tree levelOrderBottom(root: TreeNode | null)
// 226 invertTree
// 257 binaryTreePaths
