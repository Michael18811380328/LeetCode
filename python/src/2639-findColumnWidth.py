from typing import List

class Solution:
    def findColumnWidth(self, grid: List[List[int]]) -> List[int]:
        result = []
        for i in range(0, len(grid[0])):
            tmp = 0
            for j in range(0, len(grid)):
                curr = len(str(grid[j][i]))
                if curr > tmp:
                    tmp = curr
            result.append(tmp)
        return result
