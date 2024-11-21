// 思路1：循环两边数组，暴力枚举
// Note: The returned array must be malloced, assume caller calls free().
int* twoSum1(int* nums, int numsSize, int target, int* returnSize) {
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                // 思路相同，C语言需要额外处理内存
                // 题目要求以数组形式返回，需要手动分配内存，指定数量 2 个字节
                int* ret = malloc(sizeof(int) * 2);
                ret[0] = i;
                ret[1] = j;
                *returnSize = 2;
                return ret;
            }
        }
    }
    *returnSize = 0;
    return NULL;
}

// 思路2：哈希表存储，注：C核心语法没有内置哈希表，需要手动实现，供参考
struct hashTable {
    int key;
    int val;
    // 核心 uthash.h 规定必须这么写，作为用来实现hash的句柄，参考：https://zhuanlan.zhihu.com/p/647794415
    UT_hash_handle hh;
};

struct hashTable* hashtable;

struct hashTable* find(int ikey) {
    struct hashTable* tmp;
    // 查找哈希表的值
    HASH_FIND_INT(hashtable, &ikey, tmp);
    return tmp;
}

void insert(int ikey, int ival) {
    struct hashTable* it = find(ikey);
    if (it == NULL) {
        struct hashTable* tmp = malloc(sizeof(struct hashTable));
        tmp->key = ikey;
        tmp->val = ival;
        // 增加哈希表的值
        HASH_ADD_INT(hashtable, key, tmp);
    } else {
        it->val = ival;
    }
}

int* twoSum2(int* nums, int numsSize, int target, int* returnSize) {
    hashtable = NULL;
    for (int i = 0; i < numsSize; i++) {
        // 在哈希表中找到对应的值，如果存在返回，如果不存在，更新哈希表继续循环
        struct hashTable* it = find(target - nums[i]);
        if (it != NULL) {
            int* ret = malloc(sizeof(int) * 2);
            ret[0] = it->val;
            ret[1] = i;
            *returnSize = 2;
            return ret;
        }
        insert(nums[i], i);
    }
    *returnSize = 0;
    return NULL;
}
