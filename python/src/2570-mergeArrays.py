class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        dict = {}
        for i in range(0, len(nums1)):
            value = nums1[i][1]
            key = nums1[i][0]
            # 判断字典中有这个键
            if key in dict.keys():
                dict[key] = dict[key] + value
            else:
                dict[key] = value
        for i in range(0, len(nums2)):
            value = nums2[i][1]
            key = nums2[i][0]
            if key in dict.keys():
                dict[key] = dict[key] + value
            else:
                dict[key] = value
        result = []
        # 先排序后循环字典
        for key in sorted(dict):
            item = [int(key), dict[key]]
            result.append(item)
        return result
