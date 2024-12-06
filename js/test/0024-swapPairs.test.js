import { swapPairs } from '../src/0024-swapPairs';

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

describe('swapPairs', () => {
  it('should swap pairs node', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    const result = swapPairs(head);
    expect(result.val).toBe(2);
    expect(result.next.val).toBe(1);
    expect(result.next.next.val).toBe(4);
    expect(result.next.next.next.val).toBe(3);
  });
});
