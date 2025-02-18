class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        l = len(blocks)

        if l == k:
            min = 0
            for i in range(0, l):
                if blocks[i] == 'W':
                    min = min + 1
            return min

        tmp = 0
        for i in range(0, k):
            if blocks[i] == 'W':
                tmp = tmp + 1
        min = tmp
        if min == 0:
            return 0

        for i in range(k, l):
            if blocks[i] == 'W':
                tmp = tmp + 1
            if blocks[i - k] == 'W':
                tmp = tmp - 1
            if tmp == 0:
                return 0
            min = tmp if tmp < min else min

        return min
