// https://leetcode.com/problems/add-two-numbers/description/


// 习题1计算两个列表的和并存放在第3个列表当中 需要判断两个列表是否存在 然后通过next获取列表的下一个节点然后依次进行比较 直到有一个列表不存在。设置一个临时变量 如果两个列表的某一位数加起来超过10 那么存放在临时变量当中。 

// 习题2 判断一个数字是否是回文数。有很多种思路。可以把一个数字首先转换成字符串或者数组最后一次比较 第1项和最后一项是用双指的思路进行判断 这样消耗内存速度比较慢。另一种思路直接使用数字进行相处来计算是否是回文数。数字依次求10的余数然后把每一次的余数乘以10加上新的余数 判断最终新的和和原始的数字是否相同。如果相同证明是回文数。

// 判断判断一个字符串数组的最长公共字符。自己的思路是获取数组的第1个字符串，然后依次。获取其中的每一个字符。然后进行循环判断数组当中全部的元素是否包括这个字符。算法的时间复杂度相对较高。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const addTwoNumbers = function (l1, l2) {
    const getVal = function (l1, l2, plus = 0) {
        const val1 = l1 && l1.val;
        const val2 = l2 && l2.val;
        const total = val1 + val2 + plus;
        return {
            val:total % 10,
            next: parseInt(total / 10),
        }
    }
    let l = null;
    let plus = 0;
    let i = 0;

    function setNode(vm, l1, l2) {
        if(!l1 && !l2 && !plus) {
            return vm;
        }
        const totalObj = getVal(l1, l2, plus)
        if (totalObj.next) {
            plus = totalObj.next;
        } else {
            plus = 0
        }
        if(!l) {
            l = new ListNode(totalObj.val);
            vm = l;
        } else {
            vm.next = new ListNode(totalObj.val);
            vm = vm.next;
        }
        if( (l1 && l1.next) || (l2 && l2.next) || plus) {
            return setNode(vm, l1 && l1.next, l2 && l2.next)
        }
    }
    setNode(l, l1, l2)
    return l;
};

module.exports = addTwoNumbers;
