# coding=utf-8
"""231-判断2的幂"""
def isPowerOfTwo(n):
    """判断2的幂"""
    if n <= 0:
        return False
    if n == 1:
        return True
    while n > 0:
        if n == 1:
            return True
        if n % 2 != 0:
            return False
        n = n / 2
    return False

# todo: snake_case naming style (invalid-name)
