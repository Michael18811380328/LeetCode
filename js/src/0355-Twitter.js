/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
// 184 ms, 在所有 JavaScript 提交中击败了44.19%
const Twitter = function() {
  // 用户关注数据库表
  // 这个是一个对象
  // 对象的键是用户ID，对象的值是一个数组（关注的人）
  // 这里支持增删关注这
  follow = {};
  // 推文发送数据库（时间戳和发送人）表
  // 这个使用数组实现，可以实现先后顺序
  // 每个数据是一个对象，存储当前的用户、信息等
  twitters = [];
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  const twitter = { userId, tweetId };
  twitters.push(twitter);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  // 这里获取有效的用户ID
  const followers = follow[userId] ? follow[userId].slice(0) : [];
  followers.push(userId);
  const res = [];
  for (let i = twitters.length - 1; i >= 0; i--) {
    const item = twitters[i];
    if (followers.includes(item.userId)) {
      res.push(item.tweetId);
    }
    if (res.length >= 10) {
      break;
    }
  }
  return res;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if (followerId === followeeId) return;
  if (!follow[followerId]) {
    follow[followerId] = [];
  }
  // 如果已经关注一个人了，再次关注不需要添加
  if (follow[followerId].indexOf(followeeId) > -1) return;
  follow[followerId].push(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (followerId === followeeId) return;
  if (!follow[followerId]) return;
  const index = follow[followerId].indexOf(followeeId);
  // 如果没有找到这个人，那么不需要删除
  if (index < 0) return;
  follow[followerId].splice(index, 1);
};

// 可能出现自己关注自己，自己取消关注自己，这些都是无效的操作
// ["Twitter","postTweet","unfollow","getNewsFeed"]
// [[],[1,5],[1,1],[1]]

/**
 * Your Twitter object will be instantiated and called as such:
 * let obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * let param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end
