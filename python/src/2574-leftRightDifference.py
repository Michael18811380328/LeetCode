# https://leetcode.cn/problems/left-and-right-sum-differences/
class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        total = len(nums)
        if total == 1:
            return [0]

        # 这里创建长度是total的列表
        left_sum = [1 for x in range(0, total)]
        right_sum = [1 for x in range(0, total)]

        tmp = 0
        for i in range(0, total):
            left_sum[i] = tmp
            tmp = tmp + nums[i]
        tmp = 0
        # 这里先把数组求反向，然后计算和，再求反向
        nums_tmp = list(reversed(nums))
        for i in range(0, total):
            right_sum[i] = tmp
            tmp = tmp + nums_tmp[i]
        right_sum = list(reversed(right_sum))

        res = []

        for i in range(0, total):
            # 求左右和数组的差的绝对值
            res.append(abs(left_sum[i] - right_sum[i]))
        return res
