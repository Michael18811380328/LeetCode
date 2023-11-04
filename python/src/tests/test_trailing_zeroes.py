from trailing_zeroes import trailingZeroes

def test_case():
    assert trailingZeroes(0) == 0
    assert trailingZeroes(5) == 1
    assert trailingZeroes(30) == 7
    assert trailingZeroes(2147483647) == 536870902
