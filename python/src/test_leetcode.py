import importlib

twoSum = importlib.import_module("001-twoSum")
trailingZeroes = importlib.import_module("172-trailingZeroes")
isPowerOfTwo = importlib.import_module("231-isPowerOfTwo")
canWinNim = importlib.import_module("292-canWinNim")
countPrimes = importlib.import_module("204-countPrimes")
guessNumber = importlib.import_module("374-guessNumber")
largestPerimeter = importlib.import_module("967-largestPerimeter")
stoneGame = importlib.import_module('877-stoneGame')
intToRoman = importlib.import_module('012-intToRoman')

# test 292 nim-game
def test_answer_292():
    assert canWinNim.canWinNim(4) == False
    assert canWinNim.canWinNim(3) == True

# 204 countPrimes
def test_answer_204():
    assert countPrimes.countPrimes(2) == 0
    assert countPrimes.countPrimes(3) == 1
    assert countPrimes.countPrimes(10) == 4
    assert countPrimes.countPrimes(50) == 15
    assert countPrimes.countPrimes(20000) == 2262
    assert countPrimes.countPrimes(499979) == 41537

# 172 trailingZeroes
def test_answer_172():
    assert trailingZeroes.trailingZeroes(0) == 0
    assert trailingZeroes.trailingZeroes(5) == 1
    assert trailingZeroes.trailingZeroes(30) == 7
    assert trailingZeroes.trailingZeroes(2147483647) == 536870902

# test 374 guess number
def test_answer_374():
    assert guessNumber.guessNumber(10) == 6

# test 001 two-sum
def test_answer_001():
    assert twoSum.twoSum1([2, 7, 11, 15], 9) == [0, 1]
    assert twoSum.twoSum1([3, 2, 4], 6) == [1, 2]
    assert twoSum.twoSum2([2, 7, 11, 15], 9) == [0, 1]
    assert twoSum.twoSum2([3, 2, 4], 6) == [1, 2]

# test 231- isPowerOfTwo
def test_answer_231():
    assert isPowerOfTwo.isPowerOfTwo(1) == True
    assert isPowerOfTwo.isPowerOfTwo(16) == True
    assert isPowerOfTwo.isPowerOfTwo(128) == True
    assert isPowerOfTwo.isPowerOfTwo(218) == False

# test 967 find three numbers in a list to generate a triangle which C is max
def test_anster_967():
    assert largestPerimeter.largestPerimeter([2,3,4]) == 9
    assert largestPerimeter.largestPerimeter([2,3,3,100]) == 8
    assert largestPerimeter.largestPerimeter([1,2,3]) == 0

def test_anster_877():
    assert stoneGame.stoneGame([2,3,4]) == True

def test_anster_012():
    assert intToRoman.intToRoman(1) == 'I'
    assert intToRoman.intToRoman(3) == 'III'
    assert intToRoman.intToRoman(4) == 'IV'
    assert intToRoman.intToRoman(9) == 'IX'
    assert intToRoman.intToRoman(58) == 'LVIII'
    assert intToRoman.intToRoman(1994) == 'MCMXCIV'
    assert intToRoman.intToRoman(2427) == 'MMCDXXVII'
    assert intToRoman.intToRoman(3999) == 'MMMCMXCIX'
