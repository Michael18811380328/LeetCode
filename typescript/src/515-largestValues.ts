// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val);
//   this.left = (left===undefined ? null : left);
//   this.right = (right===undefined ? null : right);
// }

// 96 ms, 在所有 TypeScript 提交中击败了91.67%
function largestValues(root: TreeNode | null): number[] {
  let tmpList: number[][]  = [];
  let runNode = (node: TreeNode | null, layer: number) => {
    if (!node) {
      return;
    }
    if (!tmpList[layer]) {
      tmpList[layer] = [];
    }
    tmpList[layer].push(node.val);
    runNode(node.left, layer + 1);
    runNode(node.right, layer + 1);
  }
  runNode(root, 0);
  let list: number[] = [];
  tmpList.forEach((item, index) => {
    list[index] = Math.max(...item);
  });
  return list;
};