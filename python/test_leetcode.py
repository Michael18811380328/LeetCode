from leetcode import canWinNim, countPrimes

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
