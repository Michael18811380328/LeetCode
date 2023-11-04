from convert_temperature import Solution

s = Solution()

def test_case():
    assert s.convertTemperature(100.00) == [373.15, 212.0]
