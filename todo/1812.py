def squareIsWhite(self, coordinates):
    """
    :type coordinates: str
    :rtype: bool
    """
    first = coordinates[0]
    second = int(coordinates[1], 10)
    
    if (first == 'a' or first == 'c' or first == 'e' or first == 'g'):
        if second % 2 == 0:
            return True
        else:
            return False
    else:
        if second % 2 == 0:
            return False
        else:
            return True