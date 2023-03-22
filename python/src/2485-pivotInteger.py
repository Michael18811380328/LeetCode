class Solution:
    def pivotInteger(self, n: int) -> int:
        if n == 1:
            return 1
        sum = (1 + n) * n / 2
        tmp = 0
        for i in range(1, n):
            if tmp == (sum - i) / 2:
                return i
            if tmp > sum / 2:
                return -1
            tmp = tmp + i
        return -1
