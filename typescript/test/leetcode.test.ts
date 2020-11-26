// 107 Tree levelOrderBottom(root: TreeNode | null)
import { canCompleteCircuit } from '../src/134-canCompleteCircuit';

test('canCompleteCircuit', () => {
  const gas  = [1,2,3,4,5];
  const cost = [3,4,5,1,2];
  const result = 3;
  expect(canCompleteCircuit(gas, cost)).toBe(result);
  const gas1  = [2,3,4];
  const cost1 = [3,4,3];
  const result1 = -1;
  expect(canCompleteCircuit(gas1, cost1)).toBe(result1);
});
