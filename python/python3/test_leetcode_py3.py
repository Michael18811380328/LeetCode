#!/usr/bin/python3
from leetcode_py3 import Solution

s = Solution()

def test_case():

    # 1979
    assert s.findGCD([10, 20, 5]) == 5
    assert s.findGCD([6, 4]) == 2

    # 2469
    assert s.convertTemperature(100.00) == [373.15, 212.0]
