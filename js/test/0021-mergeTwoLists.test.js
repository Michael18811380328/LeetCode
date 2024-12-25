import { mergeTwoLists } from '../src/0021-mergeTwoLists';

describe('mergeTwoLists', () => {
  it('should work', () => {
    const list1 = {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 5,
          next: null
        }
      }
    };
    const list2 = {
      val: 2,
      next: {
        val: 4,
        next: null
      }
    };
    const result = mergeTwoLists(list1, list2);
    expect(result).toEqual({
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null
            }
          }
        }
      }
    });
  });
});
