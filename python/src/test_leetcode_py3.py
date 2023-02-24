#!/usr/bin/python3
from leetcode_py3 import Solution

s = Solution()

def test_case():

    # test 0001 two-sum
    assert s.twoSum1([2, 7, 11, 15], 9) == [0, 1]
    assert s.twoSum1([3, 2, 4], 6) == [1, 2]
    assert s.twoSum2([2, 7, 11, 15], 9) == [0, 1]
    assert s.twoSum2([3, 2, 4], 6) == [1, 2]

    # 0012
    assert s.intToRoman(1) == 'I'
    assert s.intToRoman(3) == 'III'
    assert s.intToRoman(4) == 'IV'
    assert s.intToRoman(9) == 'IX'
    assert s.intToRoman(58) == 'LVIII'
    assert s.intToRoman(1994) == 'MCMXCIV'
    assert s.intToRoman(2427) == 'MMCDXXVII'
    assert s.intToRoman(3999) == 'MMMCMXCIX'

    # 0172
    assert s.trailingZeroes(0) == 0
    assert s.trailingZeroes(5) == 1
    assert s.trailingZeroes(30) == 7
    assert s.trailingZeroes(2147483647) == 536870902

    # 0204 countPrimes
    assert s.countPrimes(2) == 0
    assert s.countPrimes(3) == 1
    assert s.countPrimes(10) == 4
    assert s.countPrimes(50) == 15
    assert s.countPrimes(20000) == 2262
    assert s.countPrimes(499979) == 41537

    # test 0231 isPowerOfTwo
    assert s.isPowerOfTwo(1) == True
    assert s.isPowerOfTwo(16) == True
    assert s.isPowerOfTwo(128) == True
    assert s.isPowerOfTwo(218) == False

    # 0292
    assert s.canWinNim(4) == False
    assert s.canWinNim(3) == True

    # 0374
    assert s.guessNumber(10) == 6

    # 0877
    assert s.stoneGame([2,3,4]) == True

    # 967
    assert s.largestPerimeter([2,3,4]) == 9
    assert s.largestPerimeter([2,3,3,100]) == 8
    assert s.largestPerimeter([1,2,3]) == 0

    # 1979
    assert s.findGCD([10, 20, 5]) == 5
    assert s.findGCD([6, 4]) == 2

    # 2469
    assert s.convertTemperature(100.00) == [373.15, 212.0]
