/**
 * @param {string[][]} accounts
 * @return {string[][]}
 * https://leetcode.cn/problems/accounts-merge/
 * 图 DFS 或者 BFS 算法实现
 * 424 ms, 在所有 JavaScript 提交中击败了16.39% 基本完成，时间不太好
 */
const accountsMerge = function(accounts) {
  // 遍历矩阵，获取 email - index 字典
  const dict = {};
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    for (let j = 1; j < account.length; j++) {
      const email = account[j];
      if (!dict[email]) {
        dict[email] = {};
      }
      dict[email][i] = true;
    }
  }
  // 循环原数组，DFS 找到相关的账号并标记原数组
  const res = [];
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].visited) {
      continue;
    }
    const account = accounts[i];
    // 当前账户的邮箱存储
    accounts[i].visited = true;
    // 广度优先遍历
    let result = [];
    const emails = account.slice(1);
    while (emails.length > 0) {
      const currentEmail = emails.pop();
      result.push(currentEmail);
      Object.keys(dict[currentEmail]).forEach((index) => {
        // 没有访问过的节点
        if (!accounts[index].visited) {
          // 这是剩余的相同的邮箱
          emails.push(...accounts[index].slice(1));
          accounts[index].visited = true;
        }
      });
    }
    // 这里需要排列顺序（这里看一下为什么可能重复邮箱）
    result = Array.from(new Set(result)).sort((a, b) => a > b ? 1 : -1);
    // 把名字放在第一位
    result.unshift(account[0]);
    res.push(result);
  }
  return res;
};

// console.log(accountsMerge([["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]))
// [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]

// console.log(accountsMerge([["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]))
// [
//   ["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],
//   ["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],
//   ["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],
//   ["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],
//   ["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]
// ]

// 官方给出的算法是并查集，需要学一下这个算法
// https://leetcode.cn/problems/accounts-merge/solution/zhang-hu-he-bing-by-leetcode-solution-3dyq/
// var accountsMerge = function(accounts) {
//   const emailToIndex = new Map();
//   const emailToName = new Map();
//   let emailsCount = 0;
//   for (const account of accounts) {
//       const name = account[0];
//       const size = account.length;
//       for (let i = 1; i < size; i++) {
//           const email = account[i];
//           if (!emailToIndex.has(email)) {
//               emailToIndex.set(email, emailsCount++);
//               emailToName.set(email, name);
//           }
//       }
//   }

//   const uf = new UnionFind(emailsCount);
//   for (const account of accounts) {
//       const firstEmail = account[1];
//       const firstIndex = emailToIndex.get(firstEmail);
//       const size = account.length;
//       for (let i = 2; i < size; i++) {
//           const nextEmail = account[i];
//           const nextIndex = emailToIndex.get(nextEmail);
//           uf.union(firstIndex, nextIndex);
//       }
//   }

//   const indexToEmails = new Map();
//   for (const email of emailToIndex.keys()) {
//       const index = uf.find(emailToIndex.get(email));
//       const account = indexToEmails.get(index) ? indexToEmails.get(index) : [];
//       account.push(email);
//       indexToEmails.set(index, account);
//   }
//   const merged = [];
//   for (const emails of indexToEmails.values()) {
//       emails.sort();
//       const name = emailToName.get(emails[0]);
//       const account = [];
//       account.push(name);
//       account.push(...emails);
//       merged.push(account);
//   }
//   return merged;
// };

// class UnionFind {
//   constructor (n) {
//       this.parent = new Array(n).fill(0).map((element, index) => index);
//   }

//   union (index1, index2) {
//       this.parent[this.find(index2)] = this.find(index1);
//   }

//   find (index) {
//       if (this.parent[index] !== index) {
//           this.parent[index] = this.find(this.parent[index]);
//       }
//       return this.parent[index];
//   }
// }

export { accountsMerge };
