/**
 * 2325. 解密消息
 * https://leetcode.cn/problems/decode-the-message/submissions/
 * 难度：简单，字符串操作和字典
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = function(key, message) {
  // unit test use nodejs env, don't support String.replaceAll(), so use String.replace() instead temporary
  const cleanKey = Array.from(new Set(key.replace(/\s/ig, '').split('')));
  const dict = {};
  for (let i = 0; i < cleanKey.length; i++) {
    dict[cleanKey[i]] = String.fromCharCode(97 + i);
  }
  let newMessage = '';
  for (let j = 0; j < message.length; j++) {
    if (message[j] === ' ') {
      newMessage += ' ';
    }
    else {
      newMessage += dict[message[j]];
    }
  }
  return newMessage;
};

export { decodeMessage };
