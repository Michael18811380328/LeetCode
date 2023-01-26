/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
// [24] 两两交换链表中的节点
// Your runtime beats 100 % of c submissions
struct ListNode* swapPairs(struct ListNode* head){
  // 没有节点或者没有下一个节点
  if (head == NULL) {
    return head;
  }
  if (head && head->next == NULL) {
    return head;
  }
  // head 是当前节点，a 和 b 分别下一个和下下一个
  struct ListNode* a = head->next;
  struct ListNode* b = head->next->next;
  // 改变指针，调换 head 和 节点 a，并递归后面的节点
  head->next = swapPairs(b);
  a->next = head;
  return a;
}
