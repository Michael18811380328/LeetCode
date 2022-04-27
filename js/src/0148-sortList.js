/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 思路1：先把链表转换成数组，然后数组排序，再转换成链表
// 7704 ms, 在所有 JavaScript 提交中击败了5.02%
// 这个方法不合适啊
var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    // 思路：先把链表节点放在数组中，数组排序，然后重新构建链表即可
    let arr = [];
    let tmp = head;
    while (tmp) {
        arr.push(tmp);
        tmp = tmp.next;
    }
    arr.sort((a, b) => {
        return a.val > b.val ? 1 : -1;
    });
    
    let init = new ListNode(arr.shift().val);
    tmp = init;
    while (arr.length > 0) {
        let node = new ListNode(arr.shift().val);
        tmp.next = node;
        tmp = node;
    }
    return init;
};

// 官方给出：直接并归排序
// const merge = (head1, head2) => {
//     const dummyHead = new ListNode(0);
//     let temp = dummyHead, temp1 = head1, temp2 = head2;
//     while (temp1 !== null && temp2 !== null) {
//         if (temp1.val <= temp2.val) {
//             temp.next = temp1;
//             temp1 = temp1.next;
//         } else {
//             temp.next = temp2;
//             temp2 = temp2.next;
//         }
//         temp = temp.next;
//     }
//     if (temp1 !== null) {
//         temp.next = temp1;
//     } else if (temp2 !== null) {
//         temp.next = temp2;
//     }
//     return dummyHead.next;
// }

// const toSortList = (head, tail) => {
//     if (head === null) {
//         return head;
//     }
//     if (head.next === tail) {
//         head.next = null;
//         return head;
//     }
//     let slow = head, fast = head;
//     while (fast !== tail) {
//         slow = slow.next;
//         fast = fast.next;
//         if (fast !== tail) {
//             fast = fast.next;
//         }
//     }
//     const mid = slow;
//     return merge(toSortList(head, mid), toSortList(mid, tail));
// }

// var sortList = function(head) {
//     return toSortList(head, null);
// };
