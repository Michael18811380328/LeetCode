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
    def __init__(val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# 0217
def containsDuplicate(nums: List[int]) -> bool:
    dict = {}
    numsLen = len(nums)
    for i in range(0, numsLen):
        item = nums[i]
        if (item in dict):
            return True
        else:
            dict[item] = True
    return False

# 1929
def getConcatenation(nums: List[int]) -> List[int]:
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


# 2265
def averageOfSubtree(root: Optional[TreeNode]) -> int:
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
