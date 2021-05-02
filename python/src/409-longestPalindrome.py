def longestPalindrome(s):
    """
    :type s: str
    :rtype: int
    """
    s_len = len(s);
    # 长度是0或者1的情况
    if s_len < 2:
        return s_len
    
    # 获取字符出现的次数
    str_dict = {}

    for i in range(0, s_len):
        key = s[i]
        if str_dict.get(str(key)):
            str_dict[key] += 1
        else:
            str_dict[key] = 1

    # 计算回文串长度
    str_max = 0
    has_middle = False
    
    for attr in str_dict.keys():
        times = str_dict.get(attr)
        if int(times) % 2 == 0:
            str_max += int(times)
        else:
            str_max += (int(times) - 1)
            has_middle = True
    
    if has_middle:
        str_max += 1
    
    # 如果中间有值，增加一个长度
    return str_max