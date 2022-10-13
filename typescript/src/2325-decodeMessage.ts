function decodeMessage(key: string, message: string): string {
  const cleanKey: any = Array.from(new Set(key.replace(/\s/g, '').split('')));
  const dict = {};
  for (let i = 0; i < cleanKey.length; i++) {
    dict[cleanKey[i]] = String.fromCharCode(97 + i);
  }
  let newMessage = '';
  for (let j = 0; j < message.length; j++) {
    if (message[j] === ' ') {
      newMessage += ' ';
    } else {
      newMessage += dict[message[j]];
    }
  }
  return newMessage;
}

// console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv") === "this is a secret")
// console.log(decodeMessage("eljuxhpwnyrdgtqkviszcfmabo", "zwx hnfx lqantp mnoeius ycgk vcnjrdb") === "the five boxing wizards jump quickly")

export {decodeMessage};
