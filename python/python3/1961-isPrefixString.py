def isPrefixString(s: str, words: List[str]) -> bool:
    tmp = ''
    # python3 中使用 seperator.join(list)
    # 可以把列表转换成字符串(使用分隔符连接)
    sLen = len(tmp.join(words))
    wLen = len(words)
    for i in range(0, wLen):
        item = words[i]
        tmp = tmp + item;
        if tmp == s:
            return True
        if len(tmp) > sLen:
            return False
    return False
