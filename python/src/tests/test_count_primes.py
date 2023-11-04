from count_primes import countPrimes

def test_case():
    assert countPrimes(2) == 0
    assert countPrimes(3) == 1
    assert countPrimes(10) == 4
    assert countPrimes(50) == 15
    assert countPrimes(20000) == 2262
    assert countPrimes(499979) == 41537
