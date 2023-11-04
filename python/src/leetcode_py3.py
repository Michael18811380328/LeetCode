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
