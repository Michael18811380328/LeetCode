class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        end = a if a < b else b
        tmp = 0
        for i in range(1, end + 1):
            if a % i == 0 and b % i == 0:
                tmp = tmp + 1
        return tmp
