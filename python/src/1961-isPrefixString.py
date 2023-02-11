def isPrefixString(s, words):
    """
    :type s: str
    :type words: List[str]
    :rtype: bool
    """
    tmp = ''
    # python2 中直接使用 join(list) 可以把列表转换成字符串
    sLen = len('' + join(words))
    for i in range(0, len(words)):
        item = words[i]
        tmp = tmp + item
        if tmp == s:
            return True
        if len(tmp) > sLen:
            return False
    return False
