/*
 * @lc app=leetcode.cn id=1311 lang=javascript
 *
 * [1311] 获取你好友已观看的视频
 */

// @lc code=start
// Your runtime beats 41.94 % of javascript submissions
const watchedVideosByFriends = function(watchedVideos, friends, id, level) {
  // 先根据自己的ID 和 level，计算目标用户的集合 users
  let users = [];
  let tmp = [];
  const deletedUsers = {};
  // 这个是已经出现的好友，不能继续计算
  deletedUsers[id] = true;
  // 如果A是1级好友，就不能计算成3级好友
  users.push(id);
  while (level > 0) {
    users.forEach((id) => {
      tmp.push(...friends[id]);
    });
    // tmp 去重，去掉自己? 目前正确
    tmp = [...new Set(tmp)];
    level--;
    // 去掉已经是前面层级的好友
    users = tmp.filter((item) => deletedUsers[item] !== true);
    users.forEach((user) => {
      deletedUsers[user] = true;
    });
    tmp = [];
  }
  // 然后把这部分用户看过的视频拿出来，使用哈希表并进行排序操作
  const dict = {};
  users.forEach((index) => {
    const arr = watchedVideos[index];
    arr.forEach((key) => {
      if (dict[key]) {
        dict[key]++;
      } else {
        dict[key] = 1;
      }
    });
  });
  // 获取哈希表中的频率
  tmp = [];
  for (const key in dict) {
    const times = dict[key];
    const obj = { key, times };
    tmp.push(obj);
  }
  tmp.sort((a, b) => {
    if (a.times !== b.times) {
      return a.times < b.times ? -1 : 1;
    } else {
      return a.key < b.key ? -1 : 1;
    }
  });
  return tmp.map((item) => item.key);
};

// @lc code=end

export { watchedVideosByFriends };
