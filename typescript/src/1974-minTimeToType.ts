function minTimeToType(word: string): number {
    const len = word.length;
    if (len === 0) return 0;

    let getIndent = (a:string, b:string): number => {
        if (a === b) return 0;
        let tmp:number = Math.abs(Number(b.charCodeAt(0)) - Number(a.charCodeAt(0)));
        return Math.min(tmp, 26 - tmp);
    }
    let res:number = len;
    res += getIndent('a', word[0]);
    for (let i:number = 0; i < len - 1; i++) {
        res += getIndent(word[i], word[i + 1]);
    }
    return res;
};
