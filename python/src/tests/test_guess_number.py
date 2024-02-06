from guess_number import guessNumber, guess

def test_case():
    assert guess(6) == 0
    assert guess(5) == 1
    assert guess(7) == -1
    assert guessNumber(10) == 6
