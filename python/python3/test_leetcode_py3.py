#!/usr/bin/python3
from typing import List

class Solution:

    # 2469-convertTemperature
    def convertTemperature(self, celsius: float) -> List[float]:
        return [celsius + 273.15, celsius * 1.80 + 32.00]


def test_case():
    s = Solution()
    # 2469
    assert s.convertTemperature(100) == [373.15, 212.0]
