// 299
// 你正在和你的朋友玩 猜数字（Bulls and Cows）游戏：你写下一个数字让你的朋友猜。每次他猜测后，你给他一个提示，告诉他有多少位数字和确切位置都猜对了（称为“Bulls”, 公牛），有多少位数字猜对了但是位置不对（称为“Cows”, 奶牛）。你的朋友将会根据提示继续猜，直到猜出秘密数字。

// 请写出一个根据秘密数字和朋友的猜测数返回提示的函数，用 A 表示公牛，用 B 表示奶牛。
// 请注意秘密数字和朋友的猜测数都可能含有重复数字
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// 88 ms , 在所有 javascript 提交中击败了47.66%
function getHint(secret, guess) {
  let secret1 = secret;
  let guess1 = guess;
  let numA = 0;
  let numB = 0;
  // 遍历一次，找到位置相同的数字，并删除这个数字
  for (let i = 0; i < secret1.length; i++) {
    if (secret1[i] === guess1[i]) {
      numA++;
      secret1 = secret1.slice(0, i) + secret1.slice(i + 1, secret1.length);
      guess1 = guess1.slice(0, i) + guess1.slice(i + 1, guess1.length);
      i--;
    }
  }
  // 再遍历一次，找到位置不同的数字，然后删除对应的数字
  for (let i = 0; i < secret1.length; i++) {
    const index = guess1.indexOf(secret1[i]);
    if (index > -1) {
      guess1 = guess1.slice(0, index) + guess1.slice(index + 1, guess1.length);
      secret1 = secret1.slice(0, i) + secret1.slice(i + 1, secret1.length);
      i--;
      numB++;
    }
  }
  return `${numA}A${numB}B`;
}

export { getHint };
