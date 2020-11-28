from isPowerOfTwo import isPowerOfTwo
from canWinNim import canWinNim
from countPrimes import countPrimes
from trailingZeroes import trailingZeroes
from guessNumber import guessNumber
from twoSum import twoSum1, twoSum2

# test 292 nim-game
def test_answer_292():
  assert canWinNim(4) == False
  assert canWinNim(3) == True

# 204 countPrimes
def test_answer_204():
  assert countPrimes(2) == 0
  assert countPrimes(3) == 1
  assert countPrimes(10) == 4
  assert countPrimes(50) == 15
  assert countPrimes(20000) == 2262
  assert countPrimes(499979) == 41537

# 172 trailingZeroes
def test_answer_172():
  assert trailingZeroes(0) == 0
  assert trailingZeroes(5) == 1
  assert trailingZeroes(30) == 7
  assert trailingZeroes(2147483647) == 536870902

# test 374 guess number
def test_answer_374():
  assert guessNumber(10) == 6

# test 001 two-sum
def test_answer_001():
  assert twoSum1([2, 7, 11, 15], 9) == [0, 1]
  assert twoSum1([3, 2, 4], 6) == [1, 2]
  assert twoSum2([2, 7, 11, 15], 9) == [0, 1]
  assert twoSum2([3, 2, 4], 6) == [1, 2]

# test 231- isPowerOfTwo
def test_answer_231():
  assert isPowerOfTwo(1) == True
  assert isPowerOfTwo(16) == True
  assert isPowerOfTwo(128) == True
  assert isPowerOfTwo(218) == False
