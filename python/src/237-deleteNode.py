# -*- coding:utf-8 -*-

# 237 删除链表中的一个节点
def deleteNode(node):
    # Definition for singly-linked list.
    # class ListNode(object):
    #         def __init__(self, x):
    #                 self.val = x
    #                 self.next = None
    """
    :type node: ListNode
    :rtype: void Do not return anything, modify node in-place instead.
    """
    node.val = node.next.val
    node.next = node.next.next
