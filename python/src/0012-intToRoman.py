#!/usr/bin/python
# -*- coding:utf-8 -*-

def intToRoman(num):
    res = []

    res.append((num - (num % 1000)) / 1000)
    num %= 1000

    res.append((num - (num % 500)) / 500)
    num %= 500

    res.append((num - (num % 100)) / 100)
    num %= 100

    res.append((num - (num % 50)) / 50)
    num %= 50

    res.append((num - (num % 10)) / 10)
    num %= 10

    res.append((num - (num % 5)) / 5)
    num %= 5

    res.append(num);

    result = ''

    while (res[0] > 0):
        result += 'M'
        res[0] -= 1

    if (res[2] == 4):
        if (res[1] == 1):
            result = result + 'CM'
        else:
            result = result + 'CD'
    else:
        if (res[1] == 1):
            result += 'D';
        while (res[2] > 0):
            result += 'C'
            res[2] -= 1
        
    if (res[4] == 4):
        if (res[3] == 1):
            result += 'XC'
        else:
            result += 'XL'
    else:
        if (res[3] == 1):
            result += 'L'
        while (res[4] > 0):
            result += 'X'
            res[4] -= 1
    
    if (res[6] == 4):
        if (res[5] == 1):
            result += 'IX'
        else:
            result += 'IV'
    else:
        if (res[5] == 1):
            result += 'V'
        while (res[6] > 0):
            result += 'I'
            res[6] -= 1

    return result
