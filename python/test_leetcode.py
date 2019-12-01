from leetcode import canWinNim, countPrimes, trailingZeroes, guessNumber

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
  assert guessNumber(200) == 188
  # assert guessNumber(12500) == 188
