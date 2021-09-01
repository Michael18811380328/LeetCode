function minTimeToType(word) {
    var len = word.length;
    if (len === 0)
        return 0;
    var getIndent = function (a, b) {
        if (a === b)
            return 0;
        var tmp = Math.abs(Number(b.charCodeAt(0)) - Number(a.charCodeAt(0)));
        return Math.min(tmp, 26 - tmp);
    };
    var res = len;
    res += getIndent('a', word[0]);
    for (var i = 0; i < len - 1; i++) {
        res += getIndent(word[i], word[i + 1]);
    }
    return res;
}
;
