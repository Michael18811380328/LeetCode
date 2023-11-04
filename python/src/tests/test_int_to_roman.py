#!/usr/bin/python3
from int_to_roman import intToRoman

def test_case():
    assert intToRoman(1) == 'I'
    assert intToRoman(3) == 'III'
    assert intToRoman(4) == 'IV'
    assert intToRoman(9) == 'IX'
    assert intToRoman(58) == 'LVIII'
    assert intToRoman(1994) == 'MCMXCIV'
    assert intToRoman(2427) == 'MMCDXXVII'
    assert intToRoman(3999) == 'MMMCMXCIX'
