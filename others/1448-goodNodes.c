/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
// 96 ms, 在所有 C 提交中击败了38.60%
int goodNodes(struct TreeNode* root){
  int goodNumber = 0;
  int runNode(struct TreeNode* node, int max) {
    if (!node) {
      return 0;
    }
    int val = node -> val;
    if (val >= max) {
      goodNumber++;
    }
    int nextMax = max > val ? max : val;
    runNode(node -> left, nextMax);
    runNode(node -> right, nextMax);
    return 0;
  }
  runNode(root, root -> val);
  return goodNumber;
}