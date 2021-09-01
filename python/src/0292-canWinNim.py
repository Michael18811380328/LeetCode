# coding=utf-8
# 292 nim-game 在nim游戏中获胜
def canWinNim(n):
    """
    :type n: int
    :rtype: bool
    """
    if n % 4 == 0:
        return False
    else:
        return True
