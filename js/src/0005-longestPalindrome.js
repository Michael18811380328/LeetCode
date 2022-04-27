var longestPalindrome = function(s) {
      // 辅助函数：判断子字符串是否是回文
      // 循环一半字符串即可
      let checkPalindrome = (start, end) => {
        const subLen = Math.ceil((end - start) / 2);
        for (let i = 0; i <= subLen; i++) {
          if (s[start + i] !== s[end - i]) {
            return false;
          }
        }
        return true;
      }

      const len = s.length;
      for (let i = len - 1; i > 0; i--) {
        // 这是当前子字符串的长度
        let currentLen = i;
        // 内部循环，遍历全部的情况（获取开始节点和结束节点的指针）
        for (let j = 0; j < len - currentLen; j++) {
          let start = j;
          let end = j + currentLen;
          // 判断两个指针构成的子字符串，是否是回文的
          // 注意指针的边界判断
          if (checkPalindrome(start, end)) {
            return s.slice(start, end + 1);
          }
        }
      }
      return s[0];
    };