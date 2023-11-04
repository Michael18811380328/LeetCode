#!/usr/bin/python3
from count_pairs import Solution

def test_case():
    s = Solution()
    assert s.countPairs([-1,1,2,3,1], 2) == 3
