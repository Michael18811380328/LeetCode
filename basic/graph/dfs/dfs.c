#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->left = newNode->right = NULL;
    return newNode;
}

void dfs(struct Node* root) {
    if (root == NULL) return;
    printf("%d ", root->data); // 先序遍历
    dfs(root->left);
    dfs(root->right);
}

int main() {
    struct Node* root = createNode(1);
    root->left = createNode(2);
    root->right = createNode(3);
    root->left->left = createNode(4);
    root->left->right = createNode(5);

    printf("DFS遍历结果: ");
    dfs(root);
    printf("\n");
    return 0;
}