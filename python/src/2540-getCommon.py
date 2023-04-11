class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        len1 = len(nums1)
        len2 = len(nums2)
        if nums1[0] > nums2[len2 - 1] or nums2[0] > nums1[len1 - 1]:
            return -1
        pointer1 = 0
        pointer2 = 0
        while pointer1 < len1 and pointer2 < len2:
            if nums1[pointer1] == nums2[pointer2]:
                return nums1[pointer1]
            elif nums1[pointer1] < nums2[pointer2]:
                pointer1 = pointer1 + 1
            else:
                pointer2 = pointer2 + 1
        return -1
