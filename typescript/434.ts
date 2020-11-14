function countSegments(s: string): number {
    let str:string = s.trim();
    if (str.length === 0) {
        return 0;
    }
    if (str.indexOf(' ') === -1) {
        return 1;
    }
    let arr:string[] = str.split(' ').filter(item => item !== '');
    return arr.length;
};
