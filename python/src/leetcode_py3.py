#!/usr/bin/python3
import math
from typing import List, Optional, ClassVar, Dict

# typing https://www.cnblogs.com/poloyy/p/15170297.html

# int 变量，默认值为 0
num: int = 0

# bool 变量，默认值为 True
bool_var: bool = True

# 字典变量，默认为空
dict_var: Dict = {}

# 列表变量，且列表元素为 int
primes: List[int] = []

class Starship:
    # 类变量,字典类型,键-字符串,值-整型
    stats: ClassVar[Dict[str, int]] = {}
    # 实例变量，标注了是一个整型
    num: int

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:

    # 0001
    def twoSum1(self, nums, target):
        for i in range(0, len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return None

    def twoSum2(self, nums, target):
        hash = {}
        for i in range(0, len(nums)):
            item = nums[i]
            index = hash.get(str(item))
            if index != None:
                return [index, i]
            key = str(target - item)
            hash[key] = i
    
    # 0012
    def intToRoman(self, num):
        res = []
        res.append((num - (num % 1000)) / 1000)
        num %= 1000
        res.append((num - (num % 500)) / 500)
        num %= 500
        res.append((num - (num % 100)) / 100)
        num %= 100
        res.append((num - (num % 50)) / 50)
        num %= 50
        res.append((num - (num % 10)) / 10)
        num %= 10
        res.append((num - (num % 5)) / 5)
        num %= 5
        res.append(num)

        result = ''

        while (res[0] > 0):
            result += 'M'
            res[0] -= 1

        if (res[2] == 4):
            if (res[1] == 1):
                result = result + 'CM'
            else:
                result = result + 'CD'
        else:
            if (res[1] == 1):
                result += 'D'
            while (res[2] > 0):
                result += 'C'
                res[2] -= 1
            
        if (res[4] == 4):
            if (res[3] == 1):
                result += 'XC'
            else:
                result += 'XL'
        else:
            if (res[3] == 1):
                result += 'L'
            while (res[4] > 0):
                result += 'X'
                res[4] -= 1
        
        if (res[6] == 4):
            if (res[5] == 1):
                result += 'IX'
            else:
                result += 'IV'
        else:
            if (res[5] == 1):
                result += 'V'
            while (res[6] > 0):
                result += 'I'
                res[6] -= 1

        return result
    
    # 0172
    def trailingZeroes(self, n):
        if n < 5:
            return 0
        result = 0
        while n >= 5:
            reminder = n % 5
            quotient = (n - reminder) / 5
            result = result + quotient
            n = quotient
        return result
    
    # 0204
    def countPrimes(self, n):
        if n <= 2:
            return 0
        arr = [False, False]
        for i in range(2, n):
            arr.append(True)

        result = 0
        for i in range(2, n):
            if arr[i] == True:
                result = result + 1
                end = int(math.ceil(n / i)) + 1
                # set i * n as False
                for j in range(i, end):
                    item = i * j
                    if item < n:
                        arr[item] = False
        return result
        
    # 0217
    def containsDuplicate(self, nums: List[int]) -> bool:
        dict = {}
        numsLen = len(nums)
        for i in range(0, numsLen):
            item = nums[i]
            if (item in dict):
                return True
            else:
                dict[item] = True
        return False
    
    # 0231
    def isPowerOfTwo(self, n):
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
    
    # 0292
    def canWinNim(self, n):
        if n % 4 == 0:
            return False
        else:
            return True
    
    # 374
    def guess(self, number):
        if number == 6:
            return 0
        if number < 6:
            return 1
        return -1

    def guessNumber(self, number):
        left = 1
        right = number
        while left < right:
            mid = (left + right) >> 1
            if self.guess(mid) == 1:
                left = mid + 1
            else:
                right = mid
        return left
    
    # 0877
    def stoneGame(self, piles):
        return True
    
    # 967
    def largestPerimeter(self, A):
        if len(A) == 3:
            if (A[0] + A[1] + A[2]) > 2 * max(A[0], A[1], A[2]):
                return (A[0] + A[1] + A[2])
            return 0

        A.sort(reverse=True)

        while (len(A) > 2 and not (A[0] + A[1] + A[2]) > 2 * max(A[0], A[1], A[2])):
            A.pop(0)

        if len(A) > 2:
            return A[0] + A[1] + A[2]
        return 0

    # 1929
    def getConcatenation(self, nums: List[int]) -> List[int]:
        nums.extend(nums)
        return nums

    # 1961
    def isPrefixString(s: str, words: List[str]) -> bool:
        tmp = ''
        sLen = len(tmp.join(words))
        wLen = len(words)
        for i in range(0, wLen):
            item = words[i]
            tmp = tmp + item
            if tmp == s:
                return True
            if len(tmp) > sLen:
                return False
        return False

    # 1979
    def findGCD(self, nums: List[int]) -> int:
        list_max = max(nums)
        list_min = min(nums)
        if list_max == list_min or list_max % list_min == 0:
            return list_min
        start = math.floor(list_min / 2 + 1)
        while start > 0:
            if list_max % start == 0 and list_min % start == 0:
                return int(start)
            start = start - 1
        return 1
    
    # 2265
    def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
        def run_node(root: Optional[TreeNode]):
            nonlocal result
            if not root:
                return 0, 0
            left_node_result = run_node(root.left)
            right_node_result = run_node(root.right)
            value = left_node_result[0] + right_node_result[0] + root.val
            count = left_node_result[1] + right_node_result[1] + 1
            if root.val == value // count:
                result += 1
            return value, count
        result = 0
        run_node(root)
        return result

    # 2469
    def convertTemperature(self, celsius: float) -> List[float]:
        return [celsius + 273.15, celsius * 1.80 + 32.00]
