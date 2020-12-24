function slowestKey(releaseTimes: number[], keysPressed: string): string {
  let longTime:number = releaseTimes[0];
  let longStr:string = keysPressed[0];
  const n:number = keysPressed.length;
  for (let i:number = 1; i < n; i++) {
    let currentTime:number = releaseTimes[i] - releaseTimes[i - 1];
    if (currentTime > longTime) {
      longTime = currentTime;
      longStr = keysPressed[i];
    }
    else if (currentTime === longTime) {
      let item:string = keysPressed[i];
      if (longStr.charCodeAt(0) < item.charCodeAt(0)) {
        longStr = item;
      }
    }
  }
  return longStr;
};

export { slowestKey };