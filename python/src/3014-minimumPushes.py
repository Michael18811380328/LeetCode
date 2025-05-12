class Solution:
    def minimumPushes(self, word: str) -> int:
        strLen = len(word)

        if strLen <= 8:
            return strLen

        if (strLen <= 16):
            return 8 + (strLen - 8) * 2
        
        if (strLen <= 24):
            return 8 + 8 * 2 + (strLen - 16) * 3

        return 8 + 8 * 2 + 8 * 3 + (strLen - 24) * 4

